# Andes Petrolera S.A. — sitio institucional

Sitio corporativo de una compañía independiente de oil & gas con foco en Vaca Muerta,
Neuquén. Next.js con App Router y **export estático**: el build produce HTML plano en
`out/`, listo para Vercel, Netlify o cualquier hosting de archivos.

> **Andes Petrolera S.A. es una empresa ficticia.** Nombre, marca, cifras, personas,
> CUIT, tickers, bloques y documentos son inventados para este ejercicio.

---

## Puesta en marcha

```bash
npm install
npm run dev              # http://localhost:3000
npm run build            # genera ./out (export estático)
npm start                # sirve ./out en local
```

Scripts auxiliares:

```bash
npm run placeholders     # regenera las imágenes de reemplazo de /assets/img
npm run pdfs             # regenera los PDF de ejemplo de /assets/docs
npm run seed:posthog     # carga datos históricos de demo en PostHog
npm run posthog:dashboard # crea el dashboard del reporte semanal (opcional)
```

Los dos scripts de PostHog aceptan `-- --dry` para ver qué harían sin llamar a la API.

## Estructura

```
app/
  layout.jsx                 header, footer, fuentes, scripts y metadatos comunes
  page.jsx                   → index.html
  inversores/page.jsx        → inversores.html
  operaciones/page.jsx       → operaciones.html
  sustentabilidad/page.jsx   → sustentabilidad.html
components/
  Header.jsx  Footer.jsx  BannerCookies.jsx  Logo.jsx
  Analitica.jsx              integración con PostHog
  Seccion.jsx                envoltorio con la convención <!-- SECTION:x -->
  sections/{home,operaciones,inversores,sustentabilidad}/*.jsx
lib/
  datos.js       navegación, cotización, comunicados, oficinas
  bloques.js     los cinco bloques
  finanzas.js    resultados, reservas, guidance, reportes, gobierno
  esg.js         metas ESG, emisiones, programas, estándares
  analitica.js   taxonomía de eventos y mapa sección → audiencia
public/
  css/styles.css             hoja única, organizada por sección, variables en :root
  js/{andes-ui,animaciones,metricas}.js
  assets/img/                44 imágenes
  assets/docs/               21 PDF
scripts/                     generadores de imágenes, PDF y datos de demo
sections.json                secciones por página: orden, propósito y audiencia
ISSUES.md                    problemas del sitio y cómo detectarlos
```

### Convención de secciones

Cada bloque de contenido se envuelve con `components/Seccion.jsx`, que emite:

```html
<!-- SECTION:cifras-clave START -->
<section id="cifras-clave" data-section="cifras-clave" class="seccion cifras-clave">…</section>
<!-- SECTION:cifras-clave END -->
```

React no puede renderizar nodos comentario, así que cada marca se inyecta con
`dangerouslySetInnerHTML` dentro de un `<div class="section-marker">` que en CSS tiene
`display: contents` y por lo tanto no genera caja ni afecta al layout (ver `DEUDA-01`
en `ISSUES.md`). El atributo `data-section` es además lo que usa la analítica para
medir qué secciones se leen.

`/css/styles.css` sigue la misma división, con un índice numerado arriba del archivo y
un comentario `/* -- 08.11 SECTION:cifras-clave -- */` por bloque.

---

## Analítica (PostHog)

### Qué hace falta

Poné estos valores en `.env.local` (copiá `.env.local.example`):

| Variable | Obligatoria | De dónde sale |
|---|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | sí | PostHog → Settings → Project → **Project API Key** (`phc_…`). Es pública. |
| `NEXT_PUBLIC_POSTHOG_HOST` | sí | `https://us.i.posthog.com` o `https://eu.i.posthog.com` según la región del proyecto. |
| `NEXT_PUBLIC_ANALITICA_HABILITADA` | no | `false` para apagar la analítica sin tocar código. |
| `SEED_DIAS` | no | Días hacia atrás a generar. Por defecto 35. |
| `SEED_VISITANTES` | no | Personas a simular. Por defecto 900. |
| `POSTHOG_PERSONAL_API_KEY` | sólo para el dashboard | Settings → Personal API Keys, con scopes `insight:write` y `dashboard:write`. |
| `POSTHOG_PROJECT_ID` | sólo para el dashboard | Settings → Project → Project ID (numérico). |

Con la Project API Key alcanza para que el sitio mida y para cargar los datos de demo.
Las dos últimas variables sólo sirven si querés que el script arme el dashboard solo.

### Cómo está integrado

`components/Analitica.jsx` arranca PostHog **con la captura desactivada**
(`opt_out_capturing_by_default: true`). Se activa únicamente cuando alguien elige
*"Aceptar todas"* en el banner de cookies: `public/js/andes-ui.js` dispara un
`CustomEvent('andes:cookies')` y el componente llama a `opt_in_capturing()`. Con
*"Solo esenciales"* no se registra nada. La decisión queda en `localStorage`.

El `autocapture` está apagado a propósito: todos los eventos son explícitos y viven en
`lib/analitica.js`, para que los nombres no cambien solos y los insights guardados no
se rompan.

| Evento | Cuándo |
|---|---|
| `$pageview` / `$pageleave` | Entrada y salida de cada página |
| `seccion_vista` | Una sección entra en viewport al 35%. Propiedades: `seccion`, `pagina`, `audiencia`, `orden` |
| `reporte_descargado` | Click en cualquier enlace `.pdf`. Propiedades: `archivo`, `categoria` |
| `comunicado_abierto` | Click en un comunicado de prensa |
| `cta_click` | Click en un `.link-mas` o `.boton` |
| `navegacion_click` | Click en el menú, el menú móvil o la barra superior |
| `busqueda_laboral_click` | Click hacia `/carreras/*` |
| `proveedor_registro_click` | Click hacia `/proveedores/*` |
| `linea_etica_click` | Click hacia la Línea Ética |
| `alerta_suscripcion` | Envío del formulario de alertas de IR |
| `cookies_decision` | Decisión del banner (`todas` / `esenciales`) |

`seccion_vista` lleva la audiencia objetivo de cada sección tomada de
`AUDIENCIA_POR_SECCION`, que está alineada con `sections.json`. Eso permite preguntar
cosas como *"¿qué proporción del contenido para inversores se lee de verdad?"*.

### Datos de demo

```bash
npm run seed:posthog -- --dry   # resumen, sin enviar nada
npm run seed:posthog            # carga en PostHog
```

Genera personas de seis perfiles (inversor, talento, proveedor, prensa, comunidad,
general), cada una con su canal de adquisición, dispositivo, país y una o varias
sesiones repartidas en la ventana de días. Los días pesan distinto según el día de la
semana —los fines de semana caen fuerte— y hay picos puntuales, entre ellos el
10/09/2026 por la publicación de la presentación corporativa. Las visitas de retorno
se distribuyen con el mismo criterio, así la retención semanal tiene forma.

Con los valores por defecto son unas **900 personas y ~15.000 eventos sobre 35 días**,
suficiente para que el reporte semanal muestre la semana en curso y varias semanas de
comparación. El generador es determinístico: dos corridas producen lo mismo, así que
si lo corrés dos veces vas a duplicar los eventos.

Los eventos se envían al endpoint `/batch/` con `historical_migration: true`, que es la
vía de PostHog para datos con fecha pasada. Todos llevan `origen_datos: "demo_seed"`,
así que se pueden aislar o excluir después con un filtro.

PostHog tarda algunos minutos en procesar ingesta histórica: si el dashboard aparece
vacío, esperá un rato antes de asumir que falló.

### Dashboard del reporte semanal

```bash
npm run posthog:dashboard -- --dry   # lista los 10 insights que crearía
npm run posthog:dashboard            # los crea
```

Crea el dashboard *"Andes Petrolera — Reporte semanal"* con visitantes y páginas vistas
por día, reparto por página, audiencia por tipo de visitante, canales de adquisición,
secciones más vistas, secciones por audiencia objetivo, descargas por archivo,
conversiones de interés, el embudo de inversores y la retención semanal.

Si algún insight falla, el script sigue con los demás y avisa cuál falló: la API de
insights de PostHog cambia de versión en versión, así que puede que alguna consulta
haya que ajustarla contra tu proyecto. El `--dry` sirve como referencia de qué mide
cada uno para armarlos a mano.

---

## Imágenes

Las 44 imágenes de `public/assets/img/` **son marcadores de posición generados**, no
fotografías: cada una lleva impreso su nombre de archivo y la foto que le corresponde.
Reemplazá cada archivo por la foto real **conservando el nombre exacto**; las medidas
de la tabla son las que espera el diseño.

Criterio general: fotografía documental de locación real, luz natural, sin gente
posando a cámara, sin stock genérico de oficina. Personas siempre con el equipo de
protección puesto (casco, antiparras, ropa ignífuga) en cualquier toma de campo.

| Archivo | Medidas | Peso actual | Dónde se usa | Qué foto va |
|---|---|---|---|---|
| `hero-pozo-vaca-muerta.jpg` | 2400×1350 | 1293 KB | home / hero-carrusel | Equipo de perforacion en un pad, Vaca Muerta |
| `hero-atardecer-bardas-neuquen.jpg` | 2400×1350 | 1294 KB | home / hero-carrusel | Bardas neuquinas al atardecer |
| `hero-equipo-operaciones-casco.jpg` | 2400×1350 | 1298 KB | home / hero-carrusel | Personal de operaciones con EPP en planta |
| `hero-planta-tratamiento-neuquen.jpg` | 2400×1350 | 1296 KB | home / hero-carrusel | Planta de tratamiento de crudo |
| `home-quienes-somos-locacion.jpg` | 1800×1350 | 1007 KB | home | Locacion de desarrollo LCHN-14 |
| `home-presidente-retrato.jpg` | 1200×1500 | 760 KB | home | Retrato del Presidente del Directorio |
| `home-comunidad-anelo-escuela.jpg` | 1600×1100 | 722 KB | home | Laboratorio de la escuela tecnica de Anelo |
| `home-comunidad-agua-segura.jpg` | 1600×1100 | 722 KB | home | Sistema de potabilizacion en paraje rural |
| `home-comunidad-proveedores-locales.jpg` | 1600×1100 | 720 KB | home | Taller de proveedor local |
| `home-innovacion-centro-monitoreo.jpg` | 1800×1350 | 1001 KB | home | Centro de Monitoreo Integrado |
| `home-carreras-jovenes-profesionales.jpg` | 1600×1200 | 789 KB | home | Programa de Jovenes Profesionales |
| `mapa-cuenca-neuquina-bloques.jpg` | 2000×1000 | 814 KB | home / presencia-territorial | Mapa general de la Cuenca Neuquina |
| `mapa-bloques-detalle.jpg` | 2000×1100 | 891 KB | operaciones / mapa-bloques | Mapa detallado de los cinco bloques |
| `oficina-buenos-aires-fachada.jpg` | 1400×1000 | 586 KB | home / contacto-oficinas | Fachada sede corporativa Buenos Aires |
| `oficina-neuquen-fachada.jpg` | 1400×1000 | 582 KB | home / contacto-oficinas | Fachada sede operativa Neuquen |
| `oficina-houston-fachada.jpg` | 1400×1000 | 580 KB | home / contacto-oficinas | Fachada oficina Houston |
| `prensa-resultados-2t2026.jpg` | 1400×1000 | 582 KB | home / prensa-novedades | Sala de reuniones, resultados trimestrales |
| `prensa-hito-produccion.jpg` | 1400×1000 | 587 KB | home / prensa-novedades | Locacion de pozo al atardecer |
| `prensa-reporte-sustentabilidad.jpg` | 1400×1000 | 588 KB | home / prensa-novedades | Estepa neuquina, reporte de sustentabilidad |
| `prensa-designacion-directorio.jpg` | 1400×1000 | 585 KB | home / prensa-novedades | Fachada de la sede corporativa |
| `prensa-emision-on.jpg` | 1400×1000 | 577 KB | home / prensa-novedades | Pantallas de mesa de operaciones |
| `prensa-adquisicion-bloque.jpg` | 1400×1000 | 587 KB | home / prensa-novedades | Vista aerea de Bajo del Condor |
| `inversores-hero-reunion-directorio.jpg` | 2400×1350 | 1291 KB | inversores / hero-inversores | Sala del Directorio, sede Buenos Aires |
| `operaciones-hero-equipo-perforacion.jpg` | 2400×1350 | 1298 KB | operaciones | Equipo de perforacion de noche |
| `operaciones-fractura-hidraulica-set.jpg` | 1800×1350 | 1010 KB | operaciones | Set de fractura hidraulica |
| `operaciones-facilities-bateria.jpg` | 1400×1600 | 947 KB | operaciones | Tanques de la Bateria Central II |
| `operaciones-exploracion-sismica.jpg` | 1400×1200 | 704 KB | operaciones | Adquisicion sismica en el campo |
| `operaciones-sala-control.jpg` | 1400×1200 | 696 KB | operaciones | Sala de control operativo |
| `bloque-loma-chivata-norte.jpg` | 1200×900 | 455 KB | operaciones / bloques-detalle | Pad de perforacion Loma Chivata Norte |
| `bloque-canadon-mahuida.jpg` | 1200×900 | 454 KB | operaciones / bloques-detalle | Instalaciones de Canadon Mahuida |
| `bloque-bajo-del-condor.jpg` | 1200×900 | 454 KB | operaciones / bloques-detalle | Acceso y locacion Bajo del Condor |
| `bloque-sierra-colorada-oeste.jpg` | 1200×900 | 458 KB | operaciones / bloques-detalle | Bateria de separacion Sierra Colorada |
| `bloque-puesto-aguada-sur.jpg` | 1200×900 | 450 KB | operaciones / bloques-detalle | Area exploratoria Puesto Aguada Sur |
| `sustentabilidad-hero-bardas-flora.jpg` | 2400×1350 | 1293 KB | sustentabilidad | Flora nativa junto a locacion restaurada |
| `sustentabilidad-agua-reutilizacion.jpg` | 1400×1200 | 712 KB | sustentabilidad | Planta de tratamiento de agua de retorno |
| `sustentabilidad-biodiversidad-estepa.jpg` | 1600×1200 | 782 KB | sustentabilidad | Relevamiento de flora y fauna |
| `sustentabilidad-comunidad-escuela-tecnica.jpg` | 1200×900 | 462 KB | sustentabilidad | Laboratorio de automatizacion |
| `sustentabilidad-comunidad-agua-segura.jpg` | 1200×900 | 462 KB | sustentabilidad | Sistema de potabilizacion comunitario |
| `sustentabilidad-comunidad-taller-oficios.jpg` | 1200×900 | 461 KB | sustentabilidad | Taller de formacion en soldadura |
| `sustentabilidad-proveedores-locales.jpg` | 1200×900 | 458 KB | sustentabilidad | Proveedor local en su taller |
| `og-andes-petrolera.jpg` | 1200×630 | 310 KB | Open Graph (no visible en página) | Open Graph - home |
| `og-andes-operaciones.jpg` | 1200×630 | 312 KB | Open Graph (no visible en página) | Open Graph - operaciones |
| `og-andes-inversores.jpg` | 1200×630 | 306 KB | Open Graph (no visible en página) | Open Graph - inversores |
| `og-andes-sustentabilidad.jpg` | 1200×630 | 311 KB | Open Graph (no visible en página) | Open Graph - sustentabilidad |
Además: `public/favicon.svg` (isologotipo sobre fondo azul), `public/favicon.ico` y
`public/assets/img/apple-touch-icon.png` (180×180), todos generados por el script.

Las cuatro `og-*.jpg` son las imágenes de Open Graph: no se ven en el sitio, aparecen
al compartir cada página. Conviene que lleven el logo y algo de texto.

## Documentos

Los 21 PDF de `public/assets/docs/` son de una página y dicen que son de ejemplo.
Reemplazalos por los documentos reales conservando el nombre exacto: los nombres están
referenciados desde `lib/finanzas.js` y desde los componentes de sustentabilidad.

## Deploy

El export es estático, sin runtime de servidor.

- **Vercel**: detecta Next automáticamente. Con `output: 'export'` publica `out/`.
- **Netlify**: build `npm run build`, directorio de publicación `out`.
- **Cualquier otro**: servir `out/` como archivos. Las rutas son `index.html`,
  `inversores.html`, `operaciones.html` y `sustentabilidad.html`.

Acordate de cargar `NEXT_PUBLIC_POSTHOG_KEY` y `NEXT_PUBLIC_POSTHOG_HOST` en las
variables de entorno del hosting: se leen en tiempo de build.

## Estado del sitio

`ISSUES.md` tiene el inventario completo de problemas: los que están puestos a
propósito (performance, accesibilidad, arquitectura de información, mobile) y la deuda
real del código. Antes de "arreglar" algo, fijate en qué grupo está.
