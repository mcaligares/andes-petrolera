'use client';

/* ==========================================================================
   Integración con PostHog.
   - Sólo inicializa si hay clave configurada.
   - Arranca con la captura desactivada y se habilita cuando la persona
     acepta todas las cookies en el banner (evento `andes:cookies`).
     Con "solo esenciales" se mantiene desactivada y no se registra nada.
   - Captura: pageviews, visibilidad de secciones (usa data-section),
     descargas de PDF, clicks de CTA, comunicados, Línea Ética y formularios.
   ========================================================================== */

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { CONFIG, EVENTOS, audienciaDe, paginaDe } from '../lib/analitica';

function leerConsentimiento() {
  try {
    return window.localStorage.getItem('andes_cookies_v2');
  } catch (e) {
    return null;
  }
}

export default function Analitica() {
  useEffect(() => {
    if (!CONFIG.clave || !CONFIG.habilitado) {
      return undefined;
    }

    const pagina = paginaDe(window.location.pathname);

    posthog.init(CONFIG.clave, {
      api_host: CONFIG.host,
      defaults: '2025-05-24',
      person_profiles: 'always',
      capture_pageview: false,
      capture_pageleave: true,
      opt_out_capturing_by_default: true,
      persistence: 'localStorage+cookie',
      autocapture: false,
      loaded: function (instancia) {
        instancia.register({ sitio: 'andespetrolera.com.ar', pagina: pagina, plantilla: 'institucional-v2' });
      },
    });

    if (leerConsentimiento() === 'todas') {
      posthog.opt_in_capturing();
      posthog.capture('$pageview');
    }

    /* ----------------------------------------------------- consentimiento */
    function alDecidirCookies(evento) {
      const decision = evento.detail;
      if (decision === 'todas') {
        posthog.opt_in_capturing();
        posthog.capture(EVENTOS.COOKIES_DECISION, { decision: decision });
        posthog.capture('$pageview');
      } else {
        posthog.opt_out_capturing();
      }
    }
    window.addEventListener('andes:cookies', alDecidirCookies);

    /* ------------------------------------------------- visibilidad de secciones */
    let observador = null;
    if ('IntersectionObserver' in window) {
      const vistas = new Set();
      observador = new IntersectionObserver(
        function (entradas) {
          entradas.forEach(function (entrada) {
            if (!entrada.isIntersecting) return;
            const seccion = entrada.target.getAttribute('data-section');
            if (!seccion || vistas.has(seccion)) return;
            vistas.add(seccion);
            posthog.capture(EVENTOS.SECCION_VISTA, {
              seccion: seccion,
              pagina: pagina,
              audiencia: audienciaDe(seccion),
              orden: Array.prototype.indexOf.call(document.querySelectorAll('[data-section]'), entrada.target) + 1,
            });
          });
        },
        { threshold: 0.35 }
      );
      document.querySelectorAll('[data-section]').forEach(function (nodo) {
        observador.observe(nodo);
      });
    }

    /* --------------------------------------------------------- interacciones */
    function alHacerClick(evento) {
      const enlace = evento.target.closest ? evento.target.closest('a') : null;
      if (!enlace) return;

      const href = enlace.getAttribute('href') || '';
      const seccionPadre = enlace.closest('[data-section]');
      const seccion = seccionPadre ? seccionPadre.getAttribute('data-section') : null;
      const base = { pagina: pagina, seccion: seccion, texto: (enlace.textContent || '').trim().slice(0, 80) };

      if (/\.pdf($|\?)/i.test(href)) {
        const nombre = href.split('/').pop();
        posthog.capture(EVENTOS.REPORTE_DESCARGADO, {
          ...base,
          archivo: nombre,
          categoria: /Sustentabilidad|TCFD|GRI/i.test(nombre)
            ? 'sustentabilidad'
            : /Estatuto|Codigo|Politica|Reglamento/i.test(nombre)
              ? 'gobierno'
              : 'financiero',
        });
        return;
      }

      if (href.indexOf('/prensa/') === 0) {
        posthog.capture(EVENTOS.COMUNICADO_ABIERTO, { ...base, comunicado: href.replace('/prensa/', '') });
        return;
      }

      if (href.indexOf('linea-etica') > -1 || href.indexOf('etica-cumplimiento') > -1) {
        posthog.capture(EVENTOS.LINEA_ETICA_CLICK, base);
        return;
      }

      if (href.indexOf('/carreras') === 0) {
        posthog.capture(EVENTOS.BUSQUEDA_LABORAL_CLICK, base);
        return;
      }

      if (href.indexOf('/proveedores') === 0) {
        posthog.capture(EVENTOS.PROVEEDOR_REGISTRO_CLICK, base);
        return;
      }

      if (enlace.closest('.nav-principal, .nav-movil, .topbar')) {
        posthog.capture(EVENTOS.NAVEGACION_CLICK, { ...base, destino: href });
        return;
      }

      if (enlace.className.indexOf('link-mas') > -1 || enlace.className.indexOf('boton') > -1) {
        posthog.capture(EVENTOS.CTA_CLICK, { ...base, destino: href });
      }
    }
    document.addEventListener('click', alHacerClick);

    /* ------------------------------------------------------------ formulario */
    function alEnviarFormulario(evento) {
      if (!evento.target.classList || !evento.target.classList.contains('form-alertas')) return;
      posthog.capture(EVENTOS.ALERTA_SUSCRIPCION, { pagina: pagina, origen: 'contacto-ir' });
    }
    document.addEventListener('submit', alEnviarFormulario);

    return function () {
      window.removeEventListener('andes:cookies', alDecidirCookies);
      document.removeEventListener('click', alHacerClick);
      document.removeEventListener('submit', alEnviarFormulario);
      if (observador) observador.disconnect();
    };
  }, []);

  return null;
}
