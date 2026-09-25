/* Metas e indicadores ESG. Fuente: Reporte de Sustentabilidad 2025 y
   seguimiento interno del Comité de HSE y Sustentabilidad al 30/06/2026. */

export const METAS = [
  {
    meta: 'Reducir la intensidad de emisiones de alcance 1 y 2 a 9,5 kgCO2e/boe',
    base: '21,3 kgCO2e/boe (2021)',
    actual: '14,7 kgCO2e/boe',
    anio: '2030',
    avance: 56,
    pilar: 'Ambiente',
  },
  {
    meta: 'Eliminar el venteo rutinario de gas en todas las instalaciones operadas',
    base: 'Línea de base 2021',
    actual: '71% de las instalaciones sin venteo rutinario',
    anio: '2028',
    avance: 71,
    pilar: 'Ambiente',
  },
  {
    meta: 'Alcanzar el 92% de reutilización de agua de retorno en operaciones de estimulación',
    base: '68,4% (2022)',
    actual: '86,3%',
    anio: '2028',
    avance: 76,
    pilar: 'Ambiente',
  },
  {
    meta: 'Contar con plan de restauración aprobado en el 100% de las locaciones',
    base: '38% (2022)',
    actual: '89% de las locaciones',
    anio: '2028',
    avance: 83,
    pilar: 'Ambiente',
  },
  {
    meta: 'Reducir el índice de frecuencia total registrable (TRIR) a 0,30',
    base: '0,71 (2022)',
    actual: '0,42',
    anio: '2027',
    avance: 71,
    pilar: 'Social',
  },
  {
    meta: 'Alcanzar el 35% de mujeres en posiciones de liderazgo',
    base: '19,2% (2021)',
    actual: '27,4%',
    anio: '2030',
    avance: 52,
    pilar: 'Social',
  },
  {
    meta: 'Contratar el 50% de bienes y servicios a proveedores de la Provincia del Neuquén',
    base: '28,6% (2021)',
    actual: '41,7%',
    anio: '2029',
    avance: 61,
    pilar: 'Social',
  },
  {
    meta: 'Eliminar la disposición final de residuos peligrosos sin tratamiento previo',
    base: 'Línea de base 2023',
    actual: '44% del volumen con tratamiento previo',
    anio: '2027',
    avance: 44,
    pilar: 'Gobernanza',
  },
];

export const EMISIONES = [
  { anio: '2021', valor: 21.3, altura: 100 },
  { anio: '2022', valor: 19.8, altura: 93 },
  { anio: '2023', valor: 17.9, altura: 84 },
  { anio: '2024', valor: 16.7, altura: 78 },
  { anio: '2025', valor: 14.7, altura: 69 },
  { anio: '2030', valor: 9.5, altura: 45, meta: true },
];

export const PROGRAMAS = [
  {
    titulo: 'Escuela Técnica N.º 7 de Añelo',
    alcance: '64 estudiantes en 2026',
    texto:
      'Sostenemos el equipamiento del laboratorio de automatización y electrónica, y un programa de prácticas profesionalizantes de 120 horas en nuestras instalaciones. Desde 2022 se incorporaron a la Compañía once egresados del programa.',
    imagen: '/assets/img/sustentabilidad-comunidad-escuela-tecnica.jpg',
    alt: 'Estudiantes trabajando en el laboratorio de automatización',
  },
  {
    titulo: 'Agua segura en parajes rurales',
    alcance: '212 familias',
    texto:
      'Instalación y mantenimiento de siete sistemas de potabilización en parajes sin conexión a red del departamento de Añelo, con monitoreo bacteriológico trimestral a cargo de un laboratorio habilitado.',
    imagen: '/assets/img/sustentabilidad-comunidad-agua-segura.jpg',
    alt: 'Sistema de potabilización comunitario en un paraje rural',
  },
  {
    titulo: 'Formación en oficios',
    alcance: '287 personas capacitadas desde 2023',
    texto:
      'Cursos de soldadura, electricidad industrial y operación de autoelevadores dictados junto a la Unión Obrera de la Construcción y al municipio. El 38% de las personas egresadas se insertó en empresas de la cadena de valor.',
    imagen: '/assets/img/sustentabilidad-comunidad-taller-oficios.jpg',
    alt: 'Taller de formación en soldadura',
  },
  {
    titulo: 'Desarrollo de proveedores neuquinos',
    alcance: 'USD 214 MM contratados en 2025',
    texto:
      'Programa de acompañamiento técnico y financiero para pequeñas y medianas empresas de la provincia que buscan homologarse como proveedoras de la industria, con asistencia en gestión de calidad y seguridad.',
    imagen: '/assets/img/sustentabilidad-proveedores-locales.jpg',
    alt: 'Personal de una empresa proveedora local en su taller',
  },
];

export const ESTANDARES = [
  { sigla: 'GRI', texto: 'Reportamos conforme a los Estándares GRI, incluido el suplemento sectorial GRI 11: Sector de Petróleo y Gas 2021.' },
  { sigla: 'SASB', texto: 'Publicamos el índice SASB correspondiente al estándar Exploration & Production (EM-EP) con las métricas aplicables.' },
  { sigla: 'TCFD', texto: 'El reporte incorpora las recomendaciones del TCFD en gobernanza, estrategia, gestión de riesgos y métricas climáticas.' },
  { sigla: 'ODS', texto: 'Priorizamos los Objetivos de Desarrollo Sostenible 6, 7, 8 y 13, con indicadores asociados en cada capítulo del reporte.' },
];
