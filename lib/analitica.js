/* ==========================================================================
   Taxonomía de eventos de analítica (PostHog).
   Incorporada en septiembre de 2026 junto con el rediseño del centro de
   inversores. Los nombres de evento son estables: si cambian, se rompen los
   insights guardados y el reporte semanal.
   ========================================================================== */

export const EVENTOS = {
  // Navegación y contenido
  SECCION_VISTA: 'seccion_vista',
  CTA_CLICK: 'cta_click',
  NAVEGACION_CLICK: 'navegacion_click',

  // Inversores
  REPORTE_DESCARGADO: 'reporte_descargado',
  ALERTA_SUSCRIPCION: 'alerta_suscripcion',
  COTIZACION_VISTA: 'cotizacion_vista',

  // Prensa
  COMUNICADO_ABIERTO: 'comunicado_abierto',

  // Talento y proveedores
  BUSQUEDA_LABORAL_CLICK: 'busqueda_laboral_click',
  PROVEEDOR_REGISTRO_CLICK: 'proveedor_registro_click',

  // Gobernanza
  LINEA_ETICA_CLICK: 'linea_etica_click',

  // Consentimiento
  COOKIES_DECISION: 'cookies_decision',
};

/* Audiencia principal de cada sección. Se envía como propiedad del evento
   `seccion_vista` para poder segmentar el reporte semanal por audiencia.
   Debe mantenerse alineado con sections.json. */
export const AUDIENCIA_POR_SECCION = {
  'hero-carrusel': 'general',
  'quienes-somos': 'general',
  'nuestra-historia': 'general',
  'mision-vision-valores': 'talento',
  'mensaje-presidente': 'inversor',
  'presencia-territorial': 'comunidad',
  'compromiso-comunidades': 'comunidad',
  'innovacion-tecnologia': 'talento',
  'prensa-novedades': 'prensa',
  carreras: 'talento',
  'cifras-clave': 'inversor',
  'inversores-teaser': 'inversor',
  'contacto-oficinas': 'general',

  'hero-operaciones': 'general',
  'operaciones-resumen': 'inversor',
  'mapa-bloques': 'inversor',
  'bloques-detalle': 'inversor',
  'perforacion-terminacion': 'proveedor',
  'facilities-evacuacion': 'proveedor',
  exploracion: 'inversor',
  'seguridad-operacional': 'proveedor',
  proveedores: 'proveedor',

  'hero-inversores': 'inversor',
  'cotizacion-accion': 'inversor',
  'resultados-trimestrales': 'inversor',
  'indicadores-financieros': 'inversor',
  reservas: 'inversor',
  guidance: 'inversor',
  'reportes-descargables': 'inversor',
  'calendario-eventos': 'inversor',
  'gobierno-corporativo': 'inversor',
  'hechos-relevantes': 'inversor',
  'contacto-ir': 'inversor',

  'hero-sustentabilidad': 'comunidad',
  'enfoque-esg': 'inversor',
  'metas-esg': 'inversor',
  'cambio-climatico': 'inversor',
  'gestion-agua': 'comunidad',
  biodiversidad: 'comunidad',
  'seguridad-salud': 'talento',
  'comunidades-programas': 'comunidad',
  'diversidad-talento': 'talento',
  'etica-cumplimiento': 'general',
  'estandares-reportes': 'inversor',
};

export function audienciaDe(seccion) {
  return AUDIENCIA_POR_SECCION[seccion] || 'general';
}

export function paginaDe(rutaCruda) {
  const ruta = (rutaCruda || '/').replace(/\.html$/, '').replace(/\/$/, '');
  if (ruta === '' || ruta === '/index') return 'home';
  return ruta.replace(/^\//, '');
}

export const CONFIG = {
  clave: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  habilitado: process.env.NEXT_PUBLIC_ANALITICA_HABILITADA !== 'false',
};
