# ISSUES.md — problemas conocidos del sitio

Inventario de los defectos presentes en el sitio, con la página y la sección donde
viven y la herramienta o el criterio que debería detectarlos.

Se dividen en dos grupos:

- **Plantados a propósito** (`PERF`, `A11Y`, `UX`, `MOBILE`, `SEO`): son los que el sitio
  tiene que tener. No los corrijas sin avisar: son el objeto del ejercicio.
- **Deuda real del código** (`DEUDA`): cosas que conviene arreglar de verdad.

Referencias de sección: ver `sections.json` para el orden y el propósito de cada una.

---

## 1. Performance

| ID | Página | Sección | Problema | Cómo se detecta |
|---|---|---|---|---|
| PERF-01 | Todas | `<head>` (`app/layout.jsx`) | 5 hojas de estilo de Google Fonts cargadas de forma bloqueante, en 5 requests separados, sin `preconnect` y sin `display=swap`. Dos familias (Roboto Slab, Open Sans) quedaron del rediseño 2019 y se usan en un solo bloque cada una. | PageSpeed / Lighthouse: *Eliminate render-blocking resources*, *Ensure text remains visible during webfont load*, *Preconnect to required origins*. |
| PERF-02 | Todas | `<head>` (`app/layout.jsx`) | `/js/metricas.js`, `/js/andes-ui.js` y `/js/animaciones.js` se cargan en el `<head>` sin `defer` ni `async`. Bloquean el parseo del documento. | PageSpeed: *Eliminate render-blocking resources*. Se ve en la cascada de red y en el panel Performance. |
| PERF-03 | Todas | Todas las que tienen imagen | 44 JPG sin optimizar, entre 300 KB y 1,3 MB cada uno, ~31 MB en total. No hay WebP/AVIF ni `srcset`. Se usa `<img>` crudo, no `next/image`. | PageSpeed: *Properly size images*, *Serve images in next-gen formats*, *Efficiently encode images*. |
| PERF-04 | Todas | Todas las que tienen imagen | Ninguna imagen declara `width`/`height` ni `aspect-ratio`. El layout salta mientras cargan. | PageSpeed: *Image elements do not have explicit width and height* → **CLS**. |
| PERF-05 | Todas | Todas las que tienen imagen | Ninguna imagen usa `loading="lazy"`. Todas las de abajo del fold se descargan en la carga inicial. | PageSpeed: *Defer offscreen images*. |
| PERF-06 | Todas | `<head>` | Como las imágenes se cargan de forma eager, React 19 inyecta un `<link rel="preload" as="image">` por cada una. En la home son 21 preloads que compiten por ancho de banda con el hero. | Cascada de red: 21 preloads en paralelo. PageSpeed: *Avoid chaining critical requests*, LCP degradado. |
| PERF-07 | `index.html` | `hero-carrusel` | Las 4 imágenes del carrusel (1,3 MB cada una) se cargan en el arranque, aunque sólo se ve una. | PageSpeed: **LCP** alto. Cascada de red. |
| PERF-08 | `index.html` | `hero-carrusel` | El carrusel rota cada 4 s de forma permanente: no se pausa al hacer hover, no se detiene al perder el foco y no respeta `prefers-reduced-motion`. | Auditoría manual. WCAG 2.2.2 (Pause, Stop, Hide). |
| PERF-09 | Todas | `animaciones.js` | Los contadores animados corren con `setInterval` a 16 ms escribiendo `innerHTML` en cada tick, 48 veces por contador. | Panel Performance: *long tasks*, *layout thrashing*. |

## 2. Accesibilidad

| ID | Página | Sección | Problema | Cómo se detecta |
|---|---|---|---|---|
| A11Y-01 | Todas | Header (`components/Header.jsx`) | **El menú principal no es navegable por teclado.** Los ítems de primer nivel son `<span class="nav-item-titulo">`: no son enlaces ni botones, no reciben foco y no tienen `role`. Los megamenús se abren sólo por `mouseenter` (`andes-ui.js`), así que con `display: none` sus enlaces no son alcanzables con Tab. Toda la navegación de segundo y tercer nivel es inaccesible sin mouse. | Navegar con Tab desde la barra de dirección. Lighthouse no lo marca; axe DevTools sí reporta la falta de nombre accesible. WCAG 2.1.1 (Keyboard). |
| A11Y-02 | Todas | Header, `hero-carrusel` | Botones de sólo ícono sin nombre accesible: buscador, selector de idioma global, hamburguesa y los controles del carrusel (4 puntos + 2 flechas). 9 en la home. | Lighthouse: *Buttons do not have an accessible name*. axe: `button-name`. |
| A11Y-03 | Varias | Ver detalle | Imágenes sin atributo `alt`: `hero-atardecer-bardas-neuquen.jpg` (home / `hero-carrusel`), `prensa-reporte-sustentabilidad.jpg` (home / `prensa-novedades`), `oficina-houston-fachada.jpg` (home / `contacto-oficinas`) y `operaciones-sala-control.jpg` (operaciones / `seguridad-operacional`). | Lighthouse: *Image elements do not have `[alt]` attributes*. axe: `image-alt`. |
| A11Y-04 | `sustentabilidad.html` | `enfoque-esg` | Salto de jerarquía **h1 → h4**: después del `<h1>` de la página, el título de la primera sección es `<h4>`. | Lighthouse: *Heading elements are not in a sequentially-descending order*. |
| A11Y-05 | Todas | Ver detalle | Más saltos **h2 → h4**: home `mision-vision-valores` (valores), operaciones `facilities-evacuacion`, inversores `guidance` y `reportes-descargables`, sustentabilidad `seguridad-salud`. | Igual que A11Y-04. |
| A11Y-06 | `inversores.html` | `hechos-relevantes` | La sección encabeza con `<h3>` mientras el resto de la página usa `<h2>`: quedó del rediseño anterior. El outline del documento no refleja la estructura real. | Auditoría manual del outline. Lectores de pantalla. |
| A11Y-07 | Todas | Header (megamenús) | Los títulos de columna de los megamenús son `<h5>` y, al estar en el `<header>`, son los primeros 14 encabezados del documento, antes del `<h1>`. | Auditoría manual del outline. |
| A11Y-08 | Todas | Varias | Texto gris claro sobre blanco con contraste insuficiente: `--c-texto-tenue: #a8b2bb` sobre `#ffffff` da **2,2:1**, menos de la mitad del mínimo AA (4,5:1). Se usa en `.texto-tenue`, `.nota-legal` y `.link-mas-tenue`, y por lo tanto en los párrafos secundarios y las notas al pie de casi todas las secciones. `.link-mas-tenue` es además un enlace: un enlace de 12 px a 2,2:1. | Lighthouse: *Background and foreground colors do not have a sufficient contrast ratio*. axe: `color-contrast`. |
| A11Y-09 | Todas | `hero-carrusel`, heros de página | Texto blanco al 78-82% de opacidad sobre fotografía. El contraste depende de la imagen que se cargue detrás. | Auditoría visual. axe no lo detecta sobre imágenes. |
| A11Y-10 | Todas | Header (menú móvil) | El panel móvil se abre con un `<button>` sin `aria-expanded` ni `aria-controls`; los acordeones son `<div class="movil-titulo">` sin rol ni foco. El `+` es sólo decorativo y no cambia de estado. | axe: `aria-required-attr`. Navegación con teclado y lector de pantalla. |
| A11Y-11 | `inversores.html` | `contacto-ir` | El formulario de alertas usa `placeholder` en lugar de `<label>` en los tres campos de texto. | Lighthouse: *Form elements do not have associated labels*. axe: `label`. |
| A11Y-12 | `inversores.html` | `reportes-descargables` | El filtro por año son `<span class="etiqueta">` con `onclick`: no reciben foco, no responden a Enter y no comunican cuál está activo. | Navegación con teclado. axe: elementos interactivos sin rol. |
| A11Y-13 | Todas | Todas | No hay enlace *saltar al contenido*. Con teclado hay que recorrer el header entero en cada página. | Auditoría manual. WCAG 2.4.1 (Bypass Blocks). |

## 3. UX, arquitectura de información y contenido

| ID | Página | Sección | Problema | Cómo se detecta |
|---|---|---|---|---|
| UX-01 | Todas | Header | Menú de **8 ítems de primer nivel** con megamenús de hasta 3 columnas y submenús de 2 niveles. Demasiadas opciones para decidir de un vistazo. | Auditoría de arquitectura de información. Analytics: dispersión de clicks en `navegacion_click`. |
| UX-02 | Todas | Header | **"Inversores" está enterrado dentro de "La Compañía"**, a dos niveles de profundidad, pese a ser el destino de mayor valor del sitio. En la home sólo se llega por `inversores-teaser`, en el penúltimo lugar. | Analytics: comparar sesiones que llegan a `/inversores` vs. las que lo buscan. Test con usuarios. |
| UX-03 | `index.html` | `hero-carrusel` | 4 slides que rotan cada 4 s con mensajes institucionales vagos ("Energía que nace en el sur", "Construimos valor sostenible en el tiempo"). Ninguno dice qué hace la empresa ni ofrece una acción concreta. Los slides 2 a 4 casi no se leen. | Analytics: `seccion_vista` con `orden: 1` vs. clicks en el CTA del hero. Mapas de calor. |
| UX-04 | `index.html` | `cifras-clave`, `inversores-teaser` | **Los datos que más importan están al final**: producción, EBITDA, reservas y capex aparecen en la posición 11 de 13, después de historia, valores, la carta del Presidente y comunidad. | Analytics: `seccion_vista` por `orden` — caída de alcance hacia el final de la página. Scroll depth. |
| UX-05 | `index.html` | `quienes-somos`, `mensaje-presidente` | Párrafos densos y justificados: 4 párrafos de 90-120 palabras en perfil corporativo y 4 más en la carta del Presidente, sin subtítulos ni listas que permitan barrer el texto. | Auditoría de contenido. Analytics: tiempo en página alto con baja interacción. |
| UX-06 | Todas | Varias | **Los CTA son links de texto chicos**, no botones: `.link-mas` mide 12 px con un subrayado gris de 1 px. Los únicos botones reales del sitio están en el banner de cookies y en el formulario de alertas. | Auditoría visual. Analytics: tasa de click de `cta_click` sobre `seccion_vista`. |
| UX-07 | `index.html` | `contacto-oficinas` | El mapa interactivo no carga nunca: el bloque muestra siempre el texto de reemplazo *"Requiere aceptar las cookies de terceros"*, aun después de aceptarlas. | Auditoría manual. Aceptar cookies y recargar. |
| UX-08 | Todas | Header | El selector de idioma apunta a `/en/`, que no existe. Todo el contenido en inglés está sin hacer. | Rastreo de enlaces rotos (Screaming Frog, `wget --spider`). |
| UX-09 | Todas | Header, footer, varias | Enlaces a rutas inexistentes: `/prensa`, `/prensa/{fecha}`, `/carreras/busquedas`, `/proveedores/registro`, `/legales/*`, `/mapa-del-sitio`, `/inversores/archivo-de-resultados`, `/linea-etica/formulario`. Sólo existen las 4 páginas y los PDF de `/assets/docs/`. | Rastreo de enlaces rotos. Lighthouse SEO no lo cubre. |
| UX-10 | Todas | Banner de cookies | El banner tapa el contenido en la primera visita y en móvil ocupa casi media pantalla. "Configurar" lleva a una página estática, no abre un panel de preferencias. | Auditoría visual en 375 px. |

## 4. Mobile

| ID | Página | Sección | Problema | Cómo se detecta |
|---|---|---|---|---|
| MOBILE-01 | `inversores.html`, `operaciones.html`, `sustentabilidad.html` | `resultados-trimestrales`, `indicadores-financieros`, `reservas`, `bloques-detalle`, `metas-esg`, `diversidad-talento` | **Las tablas de datos desbordan.** `.tabla-datos` tiene `min-width: 720px` y `.tabla-metas` `860px`, y el contenedor `.bloque-tabla` no tiene `overflow-x`. El resultado es scroll horizontal de toda la página: en un viewport de 500 px, `scrollWidth` llega a 736 px. La tabla de indicadores es la peor: 7 columnas. | PageSpeed móvil: *Content is not sized correctly for the viewport*. Comparar `document.documentElement.scrollWidth` con `clientWidth`. |
| MOBILE-02 | Todas | Header | **Menú hamburguesa torpe**: no se cierra al tocar fuera ni al navegar, no bloquea el scroll del fondo, no anima, y el acordeón abre por sección de megamenú (hasta 3 sublistas por ítem), así que llegar a "Contacto IR" son 3 toques y bastante scroll dentro de un panel limitado a `62vh`. | Prueba manual en 375 px. |
| MOBILE-03 | Todas | Header | La barra superior necesita scroll horizontal para ver la cotización completa, sin ninguna señal visual de que se puede desplazar. | Prueba manual en 375 px. |
| MOBILE-04 | `index.html` | `hero-carrusel` | El hero mantiene 420 px de alto en móvil y el título de 31 px ocupa casi todo el espacio: el CTA queda pegado al borde inferior, cerca del banner de cookies. | Prueba manual en 375 px. |
| MOBILE-05 | Todas | Varias | Los `.link-mas` son objetivos táctiles de ~16 px de alto, por debajo de los 44 px recomendados. | PageSpeed móvil: *Tap targets are not sized appropriately*. |

## 5. SEO y metadatos

| ID | Página | Sección | Problema | Cómo se detecta |
|---|---|---|---|---|
| SEO-01 | Todas | — | No hay `sitemap.xml` ni `robots.txt`. | Lighthouse SEO. Google Search Console. |
| SEO-02 | Todas | — | No hay datos estructurados (`Organization`, `BreadcrumbList`, `NewsArticle` para los comunicados). | Rich Results Test. Lighthouse SEO. |
| SEO-03 | Todas | Header | El `<link rel="alternate" hreflang="en">` no existe, pero el selector ofrece inglés. | Search Console: errores de segmentación internacional. |
| SEO-04 | `index.html` | `prensa-novedades` | Los comunicados enlazan a `/prensa/{fecha}` sin página de destino: seis enlaces internos rotos en la home. | Rastreo de enlaces rotos. |

## 6. Deuda real del código

Esto no es parte del ejercicio: conviene arreglarlo.

| ID | Dónde | Problema |
|---|---|---|
| DEUDA-01 | `components/Seccion.jsx` | React no puede emitir nodos comentario, así que cada marca `<!-- SECTION:x START -->` se inyecta con `dangerouslySetInnerHTML` dentro de un `<div class="section-marker">` con `display: contents`. El comentario queda *dentro* de ese div, no como hermano suelto del `<section>`. Funciona y no afecta al layout, pero es una diferencia respecto de un HTML escrito a mano. |
| DEUDA-02 | `public/js/andes-ui.js` | Usa `elemento.onclick = ...` y sobrescribe `className` completo en lugar de `addEventListener` y `classList`. Cualquier clase agregada por otro script se pierde. Viene del código de 2019. |
| DEUDA-03 | `public/js/andes-ui.js` | Todo se inicializa en `window.load` (no en `DOMContentLoaded`) para no chocar con la hidratación de React. Es frágil: si en el futuro alguna sección pasa a ser un componente con estado, el script vanilla y React van a pelear por el mismo DOM. |
| DEUDA-04 | `public/assets/img/` | Las 44 imágenes son marcadores de posición generados por `scripts/generar-placeholders.mjs`, no fotografías. Ver la tabla de `README.md` para saber qué foto va en cada archivo. |
| DEUDA-05 | `public/assets/docs/` | Los 21 PDF son de una página y dicen que son de ejemplo. Reemplazar por los documentos reales conservando el nombre exacto: los nombres están referenciados desde `lib/finanzas.js` y desde el HTML. |
| DEUDA-06 | `lib/datos.js`, `lib/finanzas.js` | La cotización, los resultados y el calendario son constantes en el código: cada actualización trimestral es un deploy. Si el sitio va a vivir, esto debería salir de un CMS o de un endpoint. |
| DEUDA-07 | `components/Analitica.jsx` | La captura depende de `localStorage`; en navegación privada con almacenamiento bloqueado el banner reaparece en cada visita y nunca se activa la analítica. Es el comportamiento seguro, pero conviene que sea una decisión explícita y no un efecto colateral. |
