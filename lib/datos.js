/* ==========================================================================
   Datos institucionales compartidos entre páginas.
   Fuente: Dirección de Relaciones Institucionales / Relaciones con Inversores.
   Última actualización manual: 24/09/2026.
   ========================================================================== */

export const EMPRESA = {
  nombre: 'Andes Petrolera S.A.',
  nombreCorto: 'Andes Petrolera',
  razonSocial: 'Andes Petrolera S.A.',
  cuit: '30-71562348-9',
  igj: 'I.G.J. N.º 1.892.447',
  domicilioLegal: 'Av. Leandro N. Alem 855, Piso 12 (C1001AAD), Ciudad Autónoma de Buenos Aires, Argentina',
  fundacion: 2017,
  empleados: '1.148',
  contratistas: '3.400',
  produccion: '78.412',
  bloques: 5,
  anio: 2026,
};

export const COTIZACION = {
  fecha: '24/09/2026',
  hora: '17:00 ART',
  byma: { simbolo: 'ANDP', moneda: 'ARS', precio: '8.742,50', variacion: '+1,84%', sube: true, volumen: '412.870' },
  nyse: { simbolo: 'ANDP', moneda: 'USD', precio: '46,18', variacion: '-0,62%', sube: false, volumen: '183.402' },
  ratioAdr: '1 ADR = 4 acciones ordinarias Clase B',
  marketCap: 'USD 3.184 MM',
  acciones: '68.940.000',
};

/* --------------------------------------------------------------------------
   Navegación principal — 8 ítems de primer nivel.
   "Inversores" vive dentro de "La Compañía" desde la reorganización de 2021.
   -------------------------------------------------------------------------- */
export const NAVEGACION = [
  {
    titulo: 'La Compañía',
    ancho: true,
    columnas: [
      {
        titulo: 'Quiénes somos',
        enlaces: [
          { texto: 'Perfil corporativo', href: '/#quienes-somos' },
          { texto: 'Nuestra historia', href: '/#nuestra-historia' },
          { texto: 'Misión, visión y valores', href: '/#mision-vision-valores' },
          { texto: 'Mensaje del Presidente', href: '/#mensaje-presidente' },
          { texto: 'Estructura societaria', href: '/inversores#gobierno-corporativo' },
        ],
      },
      {
        titulo: 'Inversores',
        enlaces: [
          { texto: 'Centro de inversores', href: '/inversores' },
          {
            texto: 'Información financiera',
            href: '/inversores#resultados-trimestrales',
            hijos: [
              { texto: 'Resultados trimestrales', href: '/inversores#resultados-trimestrales' },
              { texto: 'Indicadores históricos', href: '/inversores#indicadores-financieros' },
              { texto: 'Reservas', href: '/inversores#reservas' },
              { texto: 'Guidance 2026', href: '/inversores#guidance' },
            ],
          },
          {
            texto: 'Gobierno corporativo',
            href: '/inversores#gobierno-corporativo',
            hijos: [
              { texto: 'Directorio', href: '/inversores#gobierno-corporativo' },
              { texto: 'Comités', href: '/inversores#gobierno-corporativo' },
              { texto: 'Estatuto y políticas', href: '/inversores#reportes-descargables' },
            ],
          },
          { texto: 'Hechos relevantes', href: '/inversores#hechos-relevantes' },
          { texto: 'Calendario financiero', href: '/inversores#calendario-eventos' },
          { texto: 'Contacto IR', href: '/inversores#contacto-ir' },
        ],
      },
      {
        titulo: 'Presencia',
        enlaces: [
          { texto: 'Oficinas', href: '/#contacto-oficinas' },
          { texto: 'Cuenca Neuquina', href: '/operaciones#mapa-bloques' },
          { texto: 'Nuestra gente', href: '/#carreras' },
        ],
      },
    ],
    destacado: {
      titulo: 'Resultados 2T 2026',
      texto: 'EBITDA ajustado de USD 246,3 MM y producción media de 78.412 boe/d.',
      enlace: { texto: 'Ver presentación', href: '/inversores#resultados-trimestrales' },
    },
  },
  {
    titulo: 'Operaciones',
    columnas: [
      {
        titulo: 'Upstream',
        enlaces: [
          { texto: 'Nuestros bloques', href: '/operaciones#bloques-detalle' },
          {
            texto: 'Perforación y terminación',
            href: '/operaciones#perforacion-terminacion',
            hijos: [
              { texto: 'Pozos horizontales', href: '/operaciones#perforacion-terminacion' },
              { texto: 'Estimulación hidráulica', href: '/operaciones#perforacion-terminacion' },
            ],
          },
          { texto: 'Exploración', href: '/operaciones#exploracion' },
        ],
      },
      {
        titulo: 'Midstream',
        enlaces: [
          { texto: 'Plantas y facilities', href: '/operaciones#facilities-evacuacion' },
          { texto: 'Evacuación y transporte', href: '/operaciones#facilities-evacuacion' },
          { texto: 'Integridad de ductos', href: '/operaciones#seguridad-operacional' },
        ],
      },
    ],
  },
  {
    titulo: 'Sustentabilidad',
    ancho: true,
    columnas: [
      {
        titulo: 'Ambiente',
        enlaces: [
          { texto: 'Cambio climático', href: '/sustentabilidad#cambio-climatico' },
          { texto: 'Gestión del agua', href: '/sustentabilidad#gestion-agua' },
          { texto: 'Biodiversidad', href: '/sustentabilidad#biodiversidad' },
        ],
      },
      {
        titulo: 'Social',
        enlaces: [
          { texto: 'Comunidades', href: '/sustentabilidad#comunidades-programas' },
          { texto: 'Diversidad e inclusión', href: '/sustentabilidad#diversidad-talento' },
          { texto: 'Proveedores locales', href: '/operaciones#proveedores' },
        ],
      },
      {
        titulo: 'Gobernanza',
        enlaces: [
          { texto: 'Metas ESG', href: '/sustentabilidad#metas-esg' },
          { texto: 'Ética y cumplimiento', href: '/sustentabilidad#etica-cumplimiento' },
          { texto: 'Estándares y reportes', href: '/sustentabilidad#estandares-reportes' },
        ],
      },
    ],
  },
  {
    titulo: 'Seguridad y Salud',
    columnas: [
      {
        titulo: 'Gestión HSE',
        enlaces: [
          { texto: 'Política de seguridad', href: '/sustentabilidad#seguridad-salud' },
          { texto: 'Indicadores TRIR y LTIF', href: '/sustentabilidad#seguridad-salud' },
          { texto: 'Seguridad de procesos', href: '/operaciones#seguridad-operacional' },
          { texto: 'Salud ocupacional', href: '/sustentabilidad#seguridad-salud' },
        ],
      },
    ],
  },
  {
    titulo: 'Innovación',
    columnas: [
      {
        titulo: 'Tecnología aplicada',
        enlaces: [
          { texto: 'Centro de Monitoreo Integrado', href: '/#innovacion-tecnologia' },
          { texto: 'Analítica de producción', href: '/#innovacion-tecnologia' },
          { texto: 'Digitalización de campo', href: '/#innovacion-tecnologia' },
        ],
      },
    ],
  },
  {
    titulo: 'Proveedores',
    columnas: [
      {
        titulo: 'Trabajar con nosotros',
        enlaces: [
          { texto: 'Registro de proveedores', href: '/operaciones#proveedores' },
          { texto: 'Condiciones generales de compra', href: '/operaciones#proveedores' },
          { texto: 'Desarrollo de proveedores locales', href: '/operaciones#proveedores' },
          { texto: 'Facturación', href: '/operaciones#proveedores' },
        ],
      },
    ],
  },
  {
    titulo: 'Prensa',
    columnas: [
      {
        titulo: 'Sala de prensa',
        enlaces: [
          { texto: 'Comunicados', href: '/#prensa-novedades' },
          { texto: 'Hechos relevantes (CNV)', href: '/inversores#hechos-relevantes' },
          { texto: 'Material institucional', href: '/#prensa-novedades' },
          { texto: 'Contacto de prensa', href: '/#contacto-oficinas' },
        ],
      },
    ],
  },
  {
    titulo: 'Carreras',
    columnas: [
      {
        titulo: 'Sumate al equipo',
        enlaces: [
          { texto: 'Búsquedas abiertas', href: '/#carreras' },
          { texto: 'Programa de Jóvenes Profesionales', href: '/#carreras' },
          { texto: 'Prácticas y pasantías', href: '/#carreras' },
          { texto: 'Nuestra propuesta de valor', href: '/#carreras' },
        ],
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   Comunicados de prensa
   -------------------------------------------------------------------------- */
export const COMUNICADOS = [
  {
    fecha: '6 de agosto de 2026',
    fechaISO: '2026-08-06',
    categoria: 'Resultados',
    titulo: 'Andes Petrolera informa sus resultados del segundo trimestre de 2026',
    resumen:
      'La Compañía registró ingresos por USD 412,7 millones y un EBITDA ajustado de USD 246,3 millones, con una producción media de 78.412 boe/d.',
    imagen: '/assets/img/prensa-resultados-2t2026.jpg',
    alt: 'Sala de reuniones durante la presentación de resultados trimestrales',
  },
  {
    fecha: '12 de mayo de 2026',
    fechaISO: '2026-05-12',
    categoria: 'Operaciones',
    titulo: 'La producción de Andes Petrolera supera los 78.000 boe/d por primera vez',
    resumen:
      'El hito se alcanzó tras la conexión de ocho pozos horizontales en Loma Chivata Norte y la ampliación de la Batería Central II.',
    imagen: '/assets/img/prensa-hito-produccion.jpg',
    alt: 'Locación de pozo en operación al atardecer en la Cuenca Neuquina',
  },
  {
    fecha: '22 de abril de 2026',
    fechaISO: '2026-04-22',
    categoria: 'Sustentabilidad',
    titulo: 'Andes Petrolera publica su Reporte de Sustentabilidad 2025',
    resumen:
      'El reporte, verificado por un tercero independiente, informa una intensidad de emisiones de 14,7 kgCO2e/boe y un 86,3% de reutilización de agua de retorno.',
    imagen: '/assets/img/prensa-reporte-sustentabilidad.jpg',

  },
  {
    fecha: '11 de febrero de 2026',
    fechaISO: '2026-02-11',
    categoria: 'Gobierno corporativo',
    titulo: 'El Directorio designa a Silvina Ferreyra como directora independiente',
    resumen:
      'Ferreyra se incorpora al Comité de Auditoría y al Comité de Riesgos. Cuenta con 22 años de experiencia en finanzas corporativas y mercado de capitales.',
    imagen: '/assets/img/prensa-designacion-directorio.jpg',
    alt: 'Fachada de la sede corporativa de Andes Petrolera en Buenos Aires',
  },
  {
    fecha: '5 de noviembre de 2025',
    fechaISO: '2025-11-05',
    categoria: 'Financiamiento',
    titulo: 'Andes Petrolera coloca Obligaciones Negociables Clase VII por USD 300 millones',
    resumen:
      'La emisión, con vencimiento en 2032 y un cupón de 8,25% anual, recibió ofertas por USD 714 millones. Los fondos se destinarán al plan de desarrollo 2026-2028.',
    imagen: '/assets/img/prensa-emision-on.jpg',
    alt: 'Pantallas con información de mercado en la mesa de operaciones',
  },
  {
    fecha: '17 de septiembre de 2024',
    fechaISO: '2024-09-17',
    categoria: 'Adquisiciones',
    titulo: 'Andes Petrolera adquiere el 55% del bloque Bajo del Cóndor',
    resumen:
      'La operación, por USD 187 millones, incorpora 84 km² en la ventana de petróleo negro y suma 41,2 MMboe de recursos contingentes al portafolio.',
    imagen: '/assets/img/prensa-adquisicion-bloque.jpg',
    alt: 'Vista aérea de bardas y caminos de acceso en el bloque Bajo del Cóndor',
  },
];

/* --------------------------------------------------------------------------
   Oficinas
   -------------------------------------------------------------------------- */
export const OFICINAS = [
  {
    ciudad: 'Buenos Aires',
    tipo: 'Sede corporativa',
    direccion: ['Av. Leandro N. Alem 855, Piso 12', 'C1001AAD — Ciudad Autónoma de Buenos Aires', 'Argentina'],
    telefono: '+54 11 4318-7400',
    email: 'contacto@andespetrolera.com.ar',
    imagen: '/assets/img/oficina-buenos-aires-fachada.jpg',
    alt: 'Fachada del edificio de la sede corporativa en Buenos Aires',
  },
  {
    ciudad: 'Neuquén',
    tipo: 'Sede operativa',
    direccion: ['Ruta Provincial 7, km 12 — Parque Industrial', 'Q8300 — Neuquén Capital, Provincia del Neuquén', 'Argentina'],
    telefono: '+54 299 449-2100',
    email: 'operaciones@andespetrolera.com.ar',
    imagen: '/assets/img/oficina-neuquen-fachada.jpg',
    alt: 'Edificio de la sede operativa de Neuquén',
  },
  {
    ciudad: 'Houston',
    tipo: 'Oficina comercial',
    direccion: ['1200 Smith Street, Suite 1640', 'Houston, TX 77002', 'Estados Unidos'],
    telefono: '+1 713 555-0148',
    email: 'houston@andespetrolera.com',
    imagen: '/assets/img/oficina-houston-fachada.jpg',

  },
];
