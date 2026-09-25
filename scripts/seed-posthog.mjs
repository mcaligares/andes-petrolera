/* ==========================================================================
   Carga en PostHog eventos históricos de ejemplo para la demo.

   Genera personas con distinto perfil (inversor, talento, proveedor, prensa,
   comunidad, general), sesiones repartidas en los últimos N días, con retorno
   de usuarios para que funcionen retención y comparación semana contra semana.

   Uso:
     npm run seed:posthog            # carga en PostHog
     npm run seed:posthog -- --dry   # sólo muestra el resumen, no envía nada

   Variables (en .env.local):
     NEXT_PUBLIC_POSTHOG_KEY   Project API Key (phc_...)
     NEXT_PUBLIC_POSTHOG_HOST  https://us.i.posthog.com | https://eu.i.posthog.com
     SEED_DIAS                 días hacia atrás (por defecto 35)
     SEED_VISITANTES           personas a simular (por defecto 420)
   ========================================================================== */

import { cargarEnv } from './lib-env.mjs';
import { EVENTOS, AUDIENCIA_POR_SECCION, audienciaDe } from '../lib/analitica.js';

cargarEnv();

const SECO = process.argv.includes('--dry') || process.argv.includes('--dry-run');
const CLAVE = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';
const HOST = (process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com').replace(/\/$/, '');
const DIAS = parseInt(process.env.SEED_DIAS || '35', 10);
const VISITANTES = parseInt(process.env.SEED_VISITANTES || '900', 10);
const SITIO = 'https://www.andespetrolera.com.ar';

if (!SECO && (!CLAVE || CLAVE.startsWith('phc_xxxx'))) {
  console.error('\nFalta NEXT_PUBLIC_POSTHOG_KEY en .env.local.');
  console.error('Copiá .env.local.example a .env.local y completá la Project API Key.');
  console.error('Para ver el resumen sin enviar nada: npm run seed:posthog -- --dry\n');
  process.exit(1);
}

/* ------------------------------------------------------------------- AZAR
   Generador determinístico: dos corridas producen el mismo conjunto. */
let semilla = 20260925;
function azar() {
  semilla = (semilla * 1103515245 + 12345) & 0x7fffffff;
  return semilla / 0x7fffffff;
}
function entre(minimo, maximo) {
  return minimo + Math.floor(azar() * (maximo - minimo + 1));
}
function elegir(opciones) {
  return opciones[Math.floor(azar() * opciones.length)];
}
function elegirPesado(pares) {
  const total = pares.reduce((suma, par) => suma + par[1], 0);
  let tirada = azar() * total;
  for (const [valor, peso] of pares) {
    tirada -= peso;
    if (tirada <= 0) return valor;
  }
  return pares[pares.length - 1][0];
}

/* ------------------------------------------------------------------ PERFILES */
const PAGINAS = {
  home: { ruta: '/', titulo: 'Andes Petrolera S.A. | Compañía independiente de oil & gas en Vaca Muerta' },
  inversores: { ruta: '/inversores', titulo: 'Inversores | Andes Petrolera S.A. (BYMA: ANDP · NYSE: ANDP)' },
  operaciones: { ruta: '/operaciones', titulo: 'Operaciones | Andes Petrolera S.A.' },
  sustentabilidad: { ruta: '/sustentabilidad', titulo: 'Sustentabilidad | Andes Petrolera S.A.' },
};

const SECCIONES_POR_PAGINA = { home: [], inversores: [], operaciones: [], sustentabilidad: [] };
for (const [seccion] of Object.entries(AUDIENCIA_POR_SECCION)) {
  if (seccion.startsWith('hero-inversores') || ['cotizacion-accion', 'resultados-trimestrales', 'indicadores-financieros', 'reservas', 'guidance', 'reportes-descargables', 'calendario-eventos', 'gobierno-corporativo', 'hechos-relevantes', 'contacto-ir'].includes(seccion)) {
    SECCIONES_POR_PAGINA.inversores.push(seccion);
  } else if (seccion.startsWith('hero-operaciones') || ['operaciones-resumen', 'mapa-bloques', 'bloques-detalle', 'perforacion-terminacion', 'facilities-evacuacion', 'exploracion', 'seguridad-operacional', 'proveedores'].includes(seccion)) {
    SECCIONES_POR_PAGINA.operaciones.push(seccion);
  } else if (seccion.startsWith('hero-sustentabilidad') || ['enfoque-esg', 'metas-esg', 'cambio-climatico', 'gestion-agua', 'biodiversidad', 'seguridad-salud', 'comunidades-programas', 'diversidad-talento', 'etica-cumplimiento', 'estandares-reportes'].includes(seccion)) {
    SECCIONES_POR_PAGINA.sustentabilidad.push(seccion);
  } else {
    SECCIONES_POR_PAGINA.home.push(seccion);
  }
}

const PERFILES = [
  { tipo: 'inversor',  peso: 18, paginas: ['inversores', 'home', 'operaciones'], retorno: 0.62, profundidad: [3, 8], descarga: 0.58 },
  { tipo: 'talento',   peso: 26, paginas: ['home', 'sustentabilidad'],           retorno: 0.28, profundidad: [2, 5], descarga: 0.04 },
  { tipo: 'proveedor', peso: 12, paginas: ['operaciones', 'home'],               retorno: 0.41, profundidad: [2, 6], descarga: 0.12 },
  { tipo: 'prensa',    peso: 6,  paginas: ['home', 'inversores'],                retorno: 0.55, profundidad: [2, 6], descarga: 0.34 },
  { tipo: 'comunidad', peso: 14, paginas: ['sustentabilidad', 'home'],           retorno: 0.22, profundidad: [2, 5], descarga: 0.18 },
  { tipo: 'general',   peso: 24, paginas: ['home'],                              retorno: 0.11, profundidad: [1, 3], descarga: 0.02 },
];

const CANALES = [
  ['busqueda_organica', 44, 'https://www.google.com/', 'google.com'],
  ['directo', 28, '', '$direct'],
  ['linkedin', 11, 'https://www.linkedin.com/', 'linkedin.com'],
  ['referencia', 9, 'https://www.bolsar.info/', 'bolsar.info'],
  ['email', 5, 'https://mail.google.com/', 'mail.google.com'],
  ['x', 3, 'https://t.co/', 't.co'],
];

const DISPOSITIVOS = [
  ['Desktop', 58, ['Chrome', 'Chrome', 'Safari', 'Edge', 'Firefox'], ['Mac OS X', 'Windows', 'Windows', 'Linux']],
  ['Mobile', 37, ['Mobile Safari', 'Chrome', 'Chrome'], ['iOS', 'Android', 'Android']],
  ['Tablet', 5, ['Mobile Safari', 'Chrome'], ['iOS', 'Android']],
];

const PAISES = [
  ['AR', 62, 'Argentina', ['Buenos Aires', 'Neuquén', 'Córdoba', 'Rosario', 'Mendoza']],
  ['US', 12, 'United States', ['Houston', 'New York', 'Miami']],
  ['UY', 5, 'Uruguay', ['Montevideo']],
  ['CL', 5, 'Chile', ['Santiago']],
  ['BR', 4, 'Brazil', ['São Paulo']],
  ['ES', 4, 'Spain', ['Madrid']],
  ['GB', 4, 'United Kingdom', ['London']],
  ['MX', 4, 'Mexico', ['Ciudad de México']],
];

const PDFS_FINANCIEROS = [
  'Andes_Petrolera_2T2026_Earnings_Presentation.pdf',
  'Andes_Petrolera_2T2026_Estados_Financieros_Intermedios.pdf',
  'Andes_Petrolera_2T2026_Earnings_Release_ES.pdf',
  'Andes_Petrolera_Corporate_Presentation_Sep2026.pdf',
  'Andes_Petrolera_Form_20-F_2025.pdf',
  'Andes_Petrolera_Informe_de_Reservas_2025.pdf',
];
const PDFS_SUSTENTABILIDAD = [
  'Andes_Petrolera_Reporte_Sustentabilidad_2025.pdf',
  'Andes_Petrolera_Indice_GRI_SASB_2025.pdf',
  'Andes_Petrolera_Reporte_TCFD_2025.pdf',
];
const PDFS_GOBIERNO = [
  'Estatuto_Social_Andes_Petrolera.pdf',
  'Codigo_de_Etica_y_Conducta_2025.pdf',
  'Politica_de_Anticorrupcion_2024.pdf',
];
const COMUNICADOS = ['2026-08-06', '2026-05-12', '2026-04-22', '2026-02-11', '2025-11-05', '2024-09-17'];

/* Días con actividad por encima de lo normal. Se mantienen dentro de la
   ventana por defecto de 35 días respecto del 25/09/2026. */
const PICOS = {
  '2026-09-10': 2.4, // presentación corporativa de septiembre
  '2026-09-11': 1.6,
  '2026-08-27': 1.4,
  '2026-09-18': 1.3,
};

/* ------------------------------------------------------------------ TIEMPO */
const HOY = new Date();
HOY.setHours(0, 0, 0, 0);

function diaDesplazado(dias) {
  const fecha = new Date(HOY);
  fecha.setDate(fecha.getDate() - dias);
  return fecha;
}
function claveDia(fecha) {
  return fecha.toISOString().slice(0, 10);
}
function factorDia(fecha) {
  const porDiaSemana = [0.38, 1.15, 1.2, 1.15, 1.1, 0.95, 0.42][fecha.getDay()];
  return porDiaSemana * (PICOS[claveDia(fecha)] || 1);
}
function momento(fecha, minutosDesdeMedianoche, desplazamientoSegundos = 0) {
  const salida = new Date(fecha);
  salida.setMinutes(minutosDesdeMedianoche);
  salida.setSeconds(desplazamientoSegundos);
  return salida.toISOString();
}

/* Peso de cada día de la ventana: estacionalidad semanal, picos puntuales y
   una tendencia suave de crecimiento hacia los días más recientes. */
const DIAS_PONDERADOS = [];
for (let d = 0; d < DIAS; d++) {
  const fecha = diaDesplazado(d);
  const tendencia = 0.62 + 0.38 * (1 - d / DIAS);
  DIAS_PONDERADOS.push([d, factorDia(fecha) * tendencia]);
}

/* ------------------------------------------------------------------ EVENTOS */
const eventos = [];
function registrar(nombre, distinctId, marca, propiedades) {
  eventos.push({
    event: nombre,
    timestamp: marca,
    properties: { distinct_id: distinctId, ...propiedades },
  });
}

let personasCreadas = 0;
const resumen = { porEvento: {}, porDia: {}, porTipo: {} };

function contar(nombre, marca, tipo) {
  resumen.porEvento[nombre] = (resumen.porEvento[nombre] || 0) + 1;
  const dia = marca.slice(0, 10);
  resumen.porDia[dia] = (resumen.porDia[dia] || 0) + 1;
  if (tipo) resumen.porTipo[tipo] = (resumen.porTipo[tipo] || 0) + 1;
}

function generarPersona(indice) {
  const perfil = elegirPesado(PERFILES.map((p) => [p, p.peso]));
  const [canal, , referrer, dominioReferrer] = elegirPesado(CANALES.map((c) => [c, c[1]]));
  const [dispositivo, , navegadores, sistemas] = elegirPesado(DISPOSITIVOS.map((d) => [d, d[1]]));
  const [codigoPais, , nombrePais, ciudades] = elegirPesado(PAISES.map((p) => [p, p[1]]));

  const navegador = elegir(navegadores);
  const sistema = elegir(sistemas);
  const ciudad = elegir(ciudades);
  const distinctId = 'demo_' + perfil.tipo + '_' + String(indice).padStart(4, '0');

  // Primera visita repartida según el peso de cada día (ver DIAS_PONDERADOS).
  const primerDia = elegirPesado(DIAS_PONDERADOS);

  // Sesiones adicionales según la probabilidad de retorno del perfil.
  // El día de retorno se acepta o rechaza según el peso de ese día, para que
  // los fines de semana no queden sobrerrepresentados.
  const diasDeVisita = [primerDia];
  let cursor = primerDia;
  while (azar() < perfil.retorno && diasDeVisita.length < 9) {
    let candidato = -1;
    for (let intento = 0; intento < 5; intento++) {
      const propuesta = cursor - entre(1, 8);
      if (propuesta < 0) break;
      if (factorDia(diaDesplazado(propuesta)) >= azar() * 1.25) {
        candidato = propuesta;
        break;
      }
    }
    if (candidato < 0) break;
    cursor = candidato;
    diasDeVisita.push(cursor);
  }

  personasCreadas++;

  diasDeVisita.forEach((diasAtras, numeroSesion) => {
    const fecha = diaDesplazado(diasAtras);
    const sesionId = distinctId + '_s' + numeroSesion;
    const horaBase = entre(8, 20) * 60 + entre(0, 59);
    let desplazamiento = 0;

    const comunes = {
      $session_id: sesionId,
      $device_type: dispositivo,
      $browser: navegador,
      $os: sistema,
      $referrer: referrer || '$direct',
      $referring_domain: dominioReferrer,
      $geoip_country_code: codigoPais,
      $geoip_country_name: nombrePais,
      $geoip_city_name: ciudad,
      sitio: 'andespetrolera.com.ar',
      plantilla: 'institucional-v2',
      canal: canal,
      tipo_visitante: perfil.tipo,
      origen_datos: 'demo_seed',
    };

    if (numeroSesion === 0) {
      comunes.$set_once = {
        tipo_visitante: perfil.tipo,
        canal_primera_visita: canal,
        pais: nombrePais,
        ciudad: ciudad,
        fecha_primera_visita: claveDia(fecha),
      };
      comunes.$set = { tipo_visitante: perfil.tipo, pais: nombrePais, ciudad: ciudad, canal_ultima_visita: canal };

      const marcaConsentimiento = momento(fecha, horaBase, 4);
      const decision = azar() < 0.74 ? 'todas' : 'esenciales';
      registrar(EVENTOS.COOKIES_DECISION, distinctId, marcaConsentimiento, { ...comunes, decision: decision, pagina: perfil.paginas[0] });
      contar(EVENTOS.COOKIES_DECISION, marcaConsentimiento, perfil.tipo);
    } else {
      comunes.$set = { tipo_visitante: perfil.tipo, canal_ultima_visita: canal };
    }

    // Recorrido de páginas de la sesión.
    const cantidadPaginas = Math.min(perfil.paginas.length, entre(1, perfil.paginas.length));
    const recorrido = perfil.paginas.slice(0, cantidadPaginas);

    recorrido.forEach((clavePagina) => {
      const pagina = PAGINAS[clavePagina];
      desplazamiento += entre(5, 40);
      const marca = momento(fecha, horaBase, desplazamiento);
      const propsPagina = {
        ...comunes,
        pagina: clavePagina,
        $current_url: SITIO + pagina.ruta,
        $pathname: pagina.ruta,
        $host: 'www.andespetrolera.com.ar',
        title: pagina.titulo,
      };

      registrar('$pageview', distinctId, marca, propsPagina);
      contar('$pageview', marca, perfil.tipo);

      // Secciones efectivamente vistas dentro de la página.
      const secciones = SECCIONES_POR_PAGINA[clavePagina];
      const [minimo, maximo] = perfil.profundidad;
      const vistas = Math.min(secciones.length, entre(minimo, maximo));
      for (let i = 0; i < vistas; i++) {
        desplazamiento += entre(6, 30);
        const marcaSeccion = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.SECCION_VISTA, distinctId, marcaSeccion, {
          ...propsPagina,
          seccion: secciones[i],
          audiencia: audienciaDe(secciones[i]),
          orden: i + 1,
        });
        contar(EVENTOS.SECCION_VISTA, marcaSeccion, perfil.tipo);
      }

      // Interacciones propias de cada perfil.
      if (clavePagina === 'inversores' && azar() < perfil.descarga) {
        desplazamiento += entre(10, 50);
        const marcaDescarga = momento(fecha, horaBase, desplazamiento);
        const archivo = elegir(azar() < 0.78 ? PDFS_FINANCIEROS : PDFS_GOBIERNO);
        registrar(EVENTOS.REPORTE_DESCARGADO, distinctId, marcaDescarga, {
          ...propsPagina,
          seccion: 'reportes-descargables',
          archivo: archivo,
          categoria: PDFS_GOBIERNO.includes(archivo) ? 'gobierno' : 'financiero',
        });
        contar(EVENTOS.REPORTE_DESCARGADO, marcaDescarga, perfil.tipo);

        if (azar() < 0.14) {
          desplazamiento += entre(20, 90);
          const marcaAlerta = momento(fecha, horaBase, desplazamiento);
          registrar(EVENTOS.ALERTA_SUSCRIPCION, distinctId, marcaAlerta, { ...propsPagina, seccion: 'contacto-ir', origen: 'contacto-ir' });
          contar(EVENTOS.ALERTA_SUSCRIPCION, marcaAlerta, perfil.tipo);
        }
      }

      if (clavePagina === 'sustentabilidad' && azar() < perfil.descarga) {
        desplazamiento += entre(10, 60);
        const marcaDescarga = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.REPORTE_DESCARGADO, distinctId, marcaDescarga, {
          ...propsPagina,
          seccion: 'estandares-reportes',
          archivo: elegir(PDFS_SUSTENTABILIDAD),
          categoria: 'sustentabilidad',
        });
        contar(EVENTOS.REPORTE_DESCARGADO, marcaDescarga, perfil.tipo);
      }

      if (clavePagina === 'home' && (perfil.tipo === 'prensa' || azar() < 0.17)) {
        desplazamiento += entre(8, 40);
        const marcaComunicado = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.COMUNICADO_ABIERTO, distinctId, marcaComunicado, {
          ...propsPagina,
          seccion: 'prensa-novedades',
          comunicado: elegir(COMUNICADOS),
        });
        contar(EVENTOS.COMUNICADO_ABIERTO, marcaComunicado, perfil.tipo);
      }

      if (clavePagina === 'home' && perfil.tipo === 'talento' && azar() < 0.46) {
        desplazamiento += entre(10, 45);
        const marcaBusqueda = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.BUSQUEDA_LABORAL_CLICK, distinctId, marcaBusqueda, { ...propsPagina, seccion: 'carreras', destino: '/carreras/busquedas' });
        contar(EVENTOS.BUSQUEDA_LABORAL_CLICK, marcaBusqueda, perfil.tipo);
      }

      if (clavePagina === 'operaciones' && perfil.tipo === 'proveedor' && azar() < 0.51) {
        desplazamiento += entre(10, 45);
        const marcaProveedor = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.PROVEEDOR_REGISTRO_CLICK, distinctId, marcaProveedor, { ...propsPagina, seccion: 'proveedores', destino: '/proveedores/registro' });
        contar(EVENTOS.PROVEEDOR_REGISTRO_CLICK, marcaProveedor, perfil.tipo);
      }

      if (azar() < 0.05) {
        desplazamiento += entre(15, 60);
        const marcaEtica = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.LINEA_ETICA_CLICK, distinctId, marcaEtica, { ...propsPagina, seccion: 'etica-cumplimiento' });
        contar(EVENTOS.LINEA_ETICA_CLICK, marcaEtica, perfil.tipo);
      }

      if (azar() < 0.33) {
        desplazamiento += entre(4, 20);
        const marcaCta = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.CTA_CLICK, distinctId, marcaCta, { ...propsPagina, destino: elegir(['/inversores', '/operaciones', '/sustentabilidad', '#quienes-somos']) });
        contar(EVENTOS.CTA_CLICK, marcaCta, perfil.tipo);
      }

      if (azar() < 0.42) {
        desplazamiento += entre(4, 18);
        const marcaNav = momento(fecha, horaBase, desplazamiento);
        registrar(EVENTOS.NAVEGACION_CLICK, distinctId, marcaNav, { ...propsPagina, destino: elegir(['/inversores#resultados-trimestrales', '/operaciones#bloques-detalle', '/sustentabilidad#metas-esg', '/#contacto-oficinas']) });
        contar(EVENTOS.NAVEGACION_CLICK, marcaNav, perfil.tipo);
      }

      desplazamiento += entre(20, 120);
      const marcaSalida = momento(fecha, horaBase, desplazamiento);
      registrar('$pageleave', distinctId, marcaSalida, propsPagina);
      contar('$pageleave', marcaSalida, perfil.tipo);
    });
  });
}

for (let i = 1; i <= VISITANTES; i++) generarPersona(i);

eventos.sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1));

/* ------------------------------------------------------------------ RESUMEN */
console.log('\n=== Datos de demo para PostHog ===');
console.log('Ventana            : últimos ' + DIAS + ' días (hasta ' + claveDia(HOY) + ')');
console.log('Personas simuladas : ' + personasCreadas);
console.log('Eventos generados  : ' + eventos.length);
console.log('\nPor evento:');
Object.entries(resumen.porEvento)
  .sort((a, b) => b[1] - a[1])
  .forEach(([nombre, cantidad]) => console.log('  ' + String(cantidad).padStart(6) + '  ' + nombre));
console.log('\nPor tipo de visitante:');
Object.entries(resumen.porTipo)
  .sort((a, b) => b[1] - a[1])
  .forEach(([tipo, cantidad]) => console.log('  ' + String(cantidad).padStart(6) + '  ' + tipo));

const dias = Object.keys(resumen.porDia).sort();
console.log('\nEventos por día (' + dias.length + ' días con actividad):');
dias.slice(-14).forEach((dia) => {
  const cantidad = resumen.porDia[dia];
  console.log('  ' + dia + '  ' + String(cantidad).padStart(5) + '  ' + '#'.repeat(Math.round(cantidad / 28)));
});

if (SECO) {
  console.log('\nModo --dry: no se envió nada a PostHog.\n');
  process.exit(0);
}

/* ------------------------------------------------------------------- ENVÍO */
const TAMANIO_LOTE = 500;
let enviados = 0;

for (let inicio = 0; inicio < eventos.length; inicio += TAMANIO_LOTE) {
  const lote = eventos.slice(inicio, inicio + TAMANIO_LOTE);

  const respuesta = await fetch(HOST + '/batch/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: CLAVE,
      historical_migration: true,
      batch: lote,
    }),
  });

  if (!respuesta.ok) {
    const cuerpo = await respuesta.text();
    console.error('\nError al enviar el lote ' + (inicio / TAMANIO_LOTE + 1) + ': HTTP ' + respuesta.status);
    console.error(cuerpo.slice(0, 500));
    process.exit(1);
  }

  enviados += lote.length;
  process.stdout.write('\r  Enviados ' + enviados + ' / ' + eventos.length + ' eventos');
}

console.log('\n\nCarga completa.');
console.log('PostHog puede tardar unos minutos en procesar eventos históricos.');
console.log('Verificá en: ' + HOST.replace('i.posthog.com', 'posthog.com') + '/activity\n');
