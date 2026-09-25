/* ==========================================================================
   Andes Petrolera — animaciones.js
   Aparición progresiva de bloques al hacer scroll y contadores numéricos.
   Incorporado en el rediseño 2019, revisado en 2022.
   ========================================================================== */
(function () {
  'use strict';

  function animarContadores() {
    var contadores = document.querySelectorAll('[data-contador]');

    for (var i = 0; i < contadores.length; i++) {
      (function (nodo) {
        var destino = parseFloat(nodo.getAttribute('data-contador'));
        var decimales = parseInt(nodo.getAttribute('data-decimales') || '0', 10);
        var separador = nodo.getAttribute('data-separador') || '.';
        var pasos = 48;
        var paso = 0;

        if (isNaN(destino)) { return; }

        var intervalo = window.setInterval(function () {
          paso++;
          var valor = destino * (paso / pasos);
          if (paso >= pasos) {
            valor = destino;
            window.clearInterval(intervalo);
          }
          nodo.innerHTML = formatear(valor, decimales, separador);
        }, 16);
      })(contadores[i]);
    }
  }

  function formatear(valor, decimales, separador) {
    var texto = valor.toFixed(decimales);
    var partes = texto.split('.');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, separador);
    return partes.length > 1 ? partes[0] + ',' + partes[1] : partes[0];
  }

  function revelarAlScroll() {
    var bloques = document.querySelectorAll('[data-revelar]');
    if (!bloques.length) { return; }

    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < bloques.length; i++) { bloques[i].style.opacity = 1; }
      return;
    }

    var observador = new IntersectionObserver(function (entradas) {
      for (var e = 0; e < entradas.length; e++) {
        if (entradas[e].isIntersecting) {
          entradas[e].target.style.transition = 'opacity 620ms ease, transform 620ms ease';
          entradas[e].target.style.opacity = 1;
          entradas[e].target.style.transform = 'none';
          observador.unobserve(entradas[e].target);
        }
      }
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

    for (var b = 0; b < bloques.length; b++) {
      bloques[b].style.opacity = 0;
      bloques[b].style.transform = 'translateY(18px)';
      observador.observe(bloques[b]);
    }
  }

  function iniciar() {
    revelarAlScroll();
    animarContadores();
  }

  if (document.readyState === 'complete') {
    iniciar();
  } else {
    window.addEventListener('load', iniciar);
  }
})();
