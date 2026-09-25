/* ==========================================================================
   Crea en PostHog el dashboard "Andes Petrolera — Reporte semanal" con los
   insights que usa la demo. Es opcional: si preferís armarlos a mano, este
   script sirve como referencia de qué mide cada uno.

   Uso:
     npm run posthog:dashboard
     npm run posthog:dashboard -- --dry   # imprime lo que crearía

   Variables (en .env.local):
     POSTHOG_PERSONAL_API_KEY  Personal API Key (phx_...) con scopes
                               insight:write y dashboard:write
     POSTHOG_PROJECT_ID        ID numérico del proyecto
     NEXT_PUBLIC_POSTHOG_HOST  host del proyecto (us / eu / self-hosted)
   ========================================================================== */

import { cargarEnv } from './lib-env.mjs';

cargarEnv();

const SECO = process.argv.includes('--dry') || process.argv.includes('--dry-run');
const CLAVE = process.env.POSTHOG_PERSONAL_API_KEY || '';
const PROYECTO = process.env.POSTHOG_PROJECT_ID || '';
const HOST = (process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com')
  .replace(/\/$/, '')
  .replace('us.i.posthog.com', 'us.posthog.com')
  .replace('eu.i.posthog.com', 'eu.posthog.com');

if (!SECO && (!CLAVE || !PROYECTO)) {
  console.error('\nFaltan POSTHOG_PERSONAL_API_KEY y/o POSTHOG_PROJECT_ID en .env.local.');
  console.error('Para ver qué crearía sin llamar a la API: npm run posthog:dashboard -- --dry\n');
  process.exit(1);
}

const tendencia = (serie, opciones = {}) => ({
  kind: 'InsightVizNode',
  source: {
    kind: 'TrendsQuery',
    dateRange: { date_from: opciones.desde || '-30d' },
    interval: opciones.intervalo || 'day',
    series: serie,
    ...(opciones.breakdown
      ? { breakdownFilter: { breakdown: opciones.breakdown, breakdown_type: 'event' } }
      : {}),
    trendsFilter: { display: opciones.display || 'ActionsLineGraph' },
  },
});

const evento = (nombre, matematica = 'total', etiqueta) => ({
  kind: 'EventsNode',
  event: nombre,
  name: nombre,
  math: matematica,
  ...(etiqueta ? { custom_name: etiqueta } : {}),
});

const INSIGHTS = [
  {
    name: 'Visitantes y páginas vistas por día',
    description: 'Personas únicas y total de páginas vistas. Base del reporte semanal.',
    query: tendencia([evento('$pageview', 'dau', 'Visitantes únicos'), evento('$pageview', 'total', 'Páginas vistas')]),
  },
  {
    name: 'Páginas vistas por página del sitio',
    description: 'Reparto de tráfico entre home, inversores, operaciones y sustentabilidad.',
    query: tendencia([evento('$pageview')], { breakdown: 'pagina', display: 'ActionsBar' }),
  },
  {
    name: 'Audiencia por tipo de visitante',
    description: 'Segmentación por perfil declarado en la taxonomía de eventos.',
    query: tendencia([evento('$pageview', 'dau')], { breakdown: 'tipo_visitante', display: 'ActionsPie' }),
  },
  {
    name: 'Canales de adquisición',
    description: 'De dónde llega el tráfico: orgánico, directo, LinkedIn, referencia, email.',
    query: tendencia([evento('$pageview', 'dau')], { breakdown: 'canal', display: 'ActionsBarValue' }),
  },
  {
    name: 'Secciones más vistas',
    description: 'Basado en el evento seccion_vista, que usa el atributo data-section del HTML.',
    query: tendencia([evento('seccion_vista')], { breakdown: 'seccion', display: 'ActionsBarValue' }),
  },
  {
    name: 'Secciones vistas por audiencia objetivo',
    description: 'Cruce contra la audiencia declarada en sections.json.',
    query: tendencia([evento('seccion_vista')], { breakdown: 'audiencia', display: 'ActionsBar' }),
  },
  {
    name: 'Descargas de reportes por archivo',
    description: 'Qué PDF se baja más desde el centro de inversores y sustentabilidad.',
    query: tendencia([evento('reporte_descargado')], { breakdown: 'archivo', display: 'ActionsBarValue' }),
  },
  {
    name: 'Conversiones de interés',
    description: 'Suscripciones a alertas, clicks a búsquedas laborales, registro de proveedores y Línea Ética.',
    query: tendencia(
      [
        evento('alerta_suscripcion', 'total', 'Alertas IR'),
        evento('busqueda_laboral_click', 'total', 'Búsquedas laborales'),
        evento('proveedor_registro_click', 'total', 'Registro de proveedores'),
        evento('linea_etica_click', 'total', 'Línea Ética'),
        evento('comunicado_abierto', 'total', 'Comunicados'),
      ],
      { display: 'ActionsLineGraph' }
    ),
  },
  {
    name: 'Embudo inversor',
    description: 'Visita → lectura de una sección → descarga de un reporte.',
    query: {
      kind: 'InsightVizNode',
      source: {
        kind: 'FunnelsQuery',
        dateRange: { date_from: '-30d' },
        series: [
          { kind: 'EventsNode', event: '$pageview', name: '$pageview', custom_name: 'Visita el sitio' },
          { kind: 'EventsNode', event: 'seccion_vista', name: 'seccion_vista', custom_name: 'Lee una sección' },
          { kind: 'EventsNode', event: 'reporte_descargado', name: 'reporte_descargado', custom_name: 'Descarga un reporte' },
        ],
        funnelsFilter: { funnelVizType: 'steps' },
      },
    },
  },
  {
    name: 'Retención semanal',
    description: 'Cuántas personas vuelven al sitio en las semanas siguientes a su primera visita.',
    query: {
      kind: 'InsightVizNode',
      source: {
        kind: 'RetentionQuery',
        dateRange: { date_from: '-56d' },
        retentionFilter: {
          period: 'Week',
          totalIntervals: 8,
          retentionType: 'retention_first_time',
          targetEntity: { id: '$pageview', name: '$pageview', type: 'events' },
          returningEntity: { id: '$pageview', name: '$pageview', type: 'events' },
        },
      },
    },
  },
];

if (SECO) {
  console.log('\n=== Dashboard que se crearía ===\n');
  console.log('Nombre: Andes Petrolera — Reporte semanal');
  console.log('Host  : ' + HOST + '\n');
  INSIGHTS.forEach((insight, indice) => {
    console.log('  ' + String(indice + 1).padStart(2) + '. ' + insight.name);
    console.log('      ' + insight.description);
  });
  console.log('\nModo --dry: no se llamó a la API de PostHog.\n');
  process.exit(0);
}

async function api(ruta, cuerpo) {
  const respuesta = await fetch(HOST + ruta, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + CLAVE,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cuerpo),
  });

  const texto = await respuesta.text();
  if (!respuesta.ok) {
    throw new Error('HTTP ' + respuesta.status + ' en ' + ruta + '\n' + texto.slice(0, 600));
  }
  return JSON.parse(texto);
}

const dashboard = await api('/api/projects/' + PROYECTO + '/dashboards/', {
  name: 'Andes Petrolera — Reporte semanal',
  description:
    'Tráfico, audiencias, secciones leídas, descargas de reportes y retención. Alimentado por la taxonomía de eventos de lib/analitica.js.',
});

console.log('\nDashboard creado: ' + HOST + '/project/' + PROYECTO + '/dashboard/' + dashboard.id + '\n');

let creados = 0;
let fallidos = 0;

for (const insight of INSIGHTS) {
  try {
    await api('/api/projects/' + PROYECTO + '/insights/', {
      name: insight.name,
      description: insight.description,
      query: insight.query,
      dashboards: [dashboard.id],
      saved: true,
    });
    creados++;
    console.log('  ok    ' + insight.name);
  } catch (error) {
    fallidos++;
    console.log('  falló ' + insight.name);
    console.log('        ' + String(error.message).split('\n')[0]);
  }
}

console.log('\n' + creados + ' insights creados, ' + fallidos + ' con error.');
console.log(HOST + '/project/' + PROYECTO + '/dashboard/' + dashboard.id + '\n');
