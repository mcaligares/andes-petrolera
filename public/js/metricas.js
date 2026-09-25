/* ==========================================================================
   Andes Petrolera — metricas.js
   Capa de datos para la herramienta de analítica corporativa.
   Se dispara en cada vista de página. NO ELIMINAR (pedido de Marketing 2022).
   ========================================================================== */
(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  function seccionDesdeRuta() {
    var ruta = window.location.pathname.replace(/\.html$/, '').replace(/^\//, '');
    return ruta === '' ? 'home' : ruta;
  }

  window.dataLayer.push({
    event: 'vista_pagina',
    sitio: 'andespetrolera.com.ar',
    idioma: document.documentElement.lang || 'es',
    seccion: seccionDesdeRuta(),
    plantilla: 'institucional-v2',
    marcaTemporal: new Date().toISOString()
  });

  window.andesTrack = function (categoria, accion, etiqueta) {
    window.dataLayer.push({
      event: 'interaccion',
      categoria: categoria,
      accion: accion,
      etiqueta: etiqueta || null
    });
  };
})();
