/* ==========================================================================
   Andes Petrolera — andes-ui.js
   Carrusel del hero, megamenú, menú móvil, banner de cookies y filtros.
   Rediseño 2019 · parches 2021 (menú móvil), 2023 (cookies), 2025 (filtros).
   Se carga en el <head> junto con la hoja de estilos.
   ========================================================================== */
(function () {
  'use strict';

  var INTERVALO_CARRUSEL = 4000;

  /* ---------------------------------------------------------------- CARRUSEL
     4 slides institucionales. Rotación automática permanente.
     (2020) Se sacó la pausa al hacer hover: Comunicación pidió que el ciclo
     no se corte para que los 4 mensajes se vean siempre completos.
  -------------------------------------------------------------------------- */
  function iniciarCarrusel() {
    var carrusel = document.querySelector('[data-carrusel]');
    if (!carrusel) { return; }

    var slides = carrusel.querySelectorAll('.hero-slide');
    var puntos = carrusel.querySelectorAll('.hero-punto');
    var actual = 0;
    var temporizador = null;

    if (slides.length < 2) { return; }

    function mostrar(indice) {
      actual = (indice + slides.length) % slides.length;
      for (var i = 0; i < slides.length; i++) {
        if (i === actual) {
          slides[i].className = 'hero-slide activo';
        } else {
          slides[i].className = 'hero-slide';
        }
      }
      for (var p = 0; p < puntos.length; p++) {
        puntos[p].className = p === actual ? 'hero-punto activo' : 'hero-punto';
      }
    }

    function avanzar() { mostrar(actual + 1); }

    function reiniciarTemporizador() {
      window.clearInterval(temporizador);
      temporizador = window.setInterval(avanzar, INTERVALO_CARRUSEL);
    }

    for (var p = 0; p < puntos.length; p++) {
      (function (indice) {
        puntos[indice].onclick = function () {
          mostrar(indice);
          reiniciarTemporizador();
        };
      })(p);
    }

    var anterior = carrusel.querySelector('[data-carrusel-anterior]');
    var siguiente = carrusel.querySelector('[data-carrusel-siguiente]');
    if (anterior) { anterior.onclick = function () { mostrar(actual - 1); reiniciarTemporizador(); }; }
    if (siguiente) { siguiente.onclick = function () { mostrar(actual + 1); reiniciarTemporizador(); }; }

    mostrar(0);
    reiniciarTemporizador();
  }

  /* --------------------------------------------------------------- MEGAMENÚ
     Apertura por hover sobre el ítem de primer nivel.
     Se agrega/quita la clase .abierto en el <li> contenedor.
  -------------------------------------------------------------------------- */
  function iniciarMegamenu() {
    var items = document.querySelectorAll('.nav-principal > ul > li');

    for (var i = 0; i < items.length; i++) {
      (function (li) {
        if (!li.querySelector('.megamenu')) { return; }

        li.onmouseenter = function () { li.className = 'abierto'; };
        li.onmouseleave = function () { li.className = ''; };
      })(items[i]);
    }
  }

  /* ------------------------------------------------------------- MENÚ MÓVIL
     Panel desplegable con acordeones de un nivel.
  -------------------------------------------------------------------------- */
  function iniciarMenuMovil() {
    var boton = document.querySelector('[data-abrir-menu-movil]');
    var panel = document.querySelector('[data-menu-movil]');
    if (!boton || !panel) { return; }

    boton.onclick = function () {
      if (panel.className.indexOf('abierto') > -1) {
        panel.className = 'nav-movil';
      } else {
        panel.className = 'nav-movil abierto';
      }
    };

    var titulos = panel.querySelectorAll('.movil-titulo');
    for (var i = 0; i < titulos.length; i++) {
      (function (titulo) {
        titulo.onclick = function () {
          var li = titulo.parentNode;
          li.className = li.className.indexOf('abierto') > -1 ? '' : 'abierto';
        };
      })(titulos[i]);
    }
  }

  /* ---------------------------------------------------------------- COOKIES
     Banner de consentimiento. Guarda la decisión en localStorage.
     Implementado en 2023 a pedido de Legales.
  -------------------------------------------------------------------------- */
  function iniciarCookies() {
    var banner = document.querySelector('[data-banner-cookies]');
    if (!banner) { return; }

    var decision = null;
    try { decision = window.localStorage.getItem('andes_cookies_v2'); } catch (e) { decision = null; }

    if (decision) { return; }

    banner.hidden = false;

    function guardar(valor) {
      try { window.localStorage.setItem('andes_cookies_v2', valor); } catch (e) {}
      banner.hidden = true;

      // Avisa a la capa de analitica (ver components/Analitica.jsx).
      try {
        window.dispatchEvent(new CustomEvent('andes:cookies', { detail: valor }));
      } catch (e) {
        var evento = document.createEvent('CustomEvent');
        evento.initCustomEvent('andes:cookies', false, false, valor);
        window.dispatchEvent(evento);
      }
    }

    var aceptar = banner.querySelector('[data-cookies-aceptar]');
    var rechazar = banner.querySelector('[data-cookies-rechazar]');
    if (aceptar) { aceptar.onclick = function () { guardar('todas'); }; }
    if (rechazar) { rechazar.onclick = function () { guardar('esenciales'); }; }
  }

  /* --------------------------------------------------------------- FILTROS
     Filtro de reportes descargables por año (inversores.html).
  -------------------------------------------------------------------------- */
  function iniciarFiltroReportes() {
    var filtro = document.querySelector('[data-filtro-reportes]');
    var lista = document.querySelector('[data-lista-reportes]');
    if (!filtro || !lista) { return; }

    var botones = filtro.querySelectorAll('[data-anio]');
    var filas = lista.querySelectorAll('[data-anio-reporte]');

    for (var i = 0; i < botones.length; i++) {
      (function (boton) {
        boton.onclick = function () {
          var anio = boton.getAttribute('data-anio');

          for (var b = 0; b < botones.length; b++) {
            botones[b].className = botones[b] === boton ? 'etiqueta activo' : 'etiqueta';
          }
          for (var f = 0; f < filas.length; f++) {
            var coincide = anio === 'todos' || filas[f].getAttribute('data-anio-reporte') === anio;
            filas[f].style.display = coincide ? '' : 'none';
          }
        };
      })(botones[i]);
    }
  }

  /* ------------------------------------------------------------------ INICIO
     Se engancha a window.load para que el markup ya esté estabilizado.
  -------------------------------------------------------------------------- */
  function iniciar() {
    iniciarCarrusel();
    iniciarMegamenu();
    iniciarMenuMovil();
    iniciarCookies();
    iniciarFiltroReportes();
  }

  if (document.readyState === 'complete') {
    iniciar();
  } else {
    window.addEventListener('load', iniciar);
  }
})();
