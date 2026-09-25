/* --------------------------------------------------------------------------
   Genera imágenes de reemplazo para /public/assets/img.
   NO son las fotos definitivas: sirven para que el sitio se vea completo y
   para que los pesos de archivo sean representativos de los JPG de producción.
   Reemplazá cada archivo por la foto real manteniendo el mismo nombre.

   Uso:  npm run placeholders
   -------------------------------------------------------------------------- */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { lienzo, rect, pixel, texto, anchoTexto, aPNG } from './lib-png.mjs';

const DESTINO = path.resolve('public/assets/img');
const TEMPORAL = fs.mkdtempSync(path.join(os.tmpdir(), 'andes-img-'));

/* Paletas por tipo de escena, en línea con la identidad de la marca. */
const PALETAS = {
  campo:     { cielo: [38, 62, 92],  suelo: [96, 74, 52],  acento: [201, 118, 29] },
  atardecer: { cielo: [122, 74, 44], suelo: [52, 40, 40],  acento: [232, 148, 58] },
  planta:    { cielo: [24, 46, 74],  suelo: [58, 66, 74],  acento: [201, 118, 29] },
  interior:  { cielo: [20, 40, 66],  suelo: [38, 52, 68],  acento: [46, 108, 164] },
  gente:     { cielo: [30, 56, 84],  suelo: [72, 68, 66],  acento: [201, 118, 29] },
  estepa:    { cielo: [58, 78, 96],  suelo: [104, 96, 66], acento: [47, 122, 90] },
  edificio:  { cielo: [52, 74, 104], suelo: [70, 78, 88],  acento: [155, 165, 175] },
  mapa:      { cielo: [238, 243, 248], suelo: [214, 224, 234], acento: [201, 118, 29] },
  social:    { cielo: [14, 42, 71],  suelo: [20, 64, 107], acento: [232, 148, 58] },
};

/* ancho x alto pensados como los entregaría un banco de imágenes. */
const CATALOGO = [
  ['hero-pozo-vaca-muerta',                  2400, 1350, 'campo',     'Equipo de perforacion en un pad, Vaca Muerta'],
  ['hero-atardecer-bardas-neuquen',          2400, 1350, 'atardecer', 'Bardas neuquinas al atardecer'],
  ['hero-equipo-operaciones-casco',          2400, 1350, 'gente',     'Personal de operaciones con EPP en planta'],
  ['hero-planta-tratamiento-neuquen',        2400, 1350, 'planta',    'Planta de tratamiento de crudo'],
  ['home-quienes-somos-locacion',            1800, 1350, 'campo',     'Locacion de desarrollo LCHN-14'],
  ['home-presidente-retrato',                1200, 1500, 'gente',     'Retrato del Presidente del Directorio'],
  ['home-comunidad-anelo-escuela',           1600, 1100, 'social',    'Laboratorio de la escuela tecnica de Anelo'],
  ['home-comunidad-agua-segura',             1600, 1100, 'social',    'Sistema de potabilizacion en paraje rural'],
  ['home-comunidad-proveedores-locales',     1600, 1100, 'social',    'Taller de proveedor local'],
  ['home-innovacion-centro-monitoreo',       1800, 1350, 'interior',  'Centro de Monitoreo Integrado'],
  ['home-carreras-jovenes-profesionales',    1600, 1200, 'gente',     'Programa de Jovenes Profesionales'],
  ['mapa-cuenca-neuquina-bloques',           2000, 1000, 'mapa',      'Mapa general de la Cuenca Neuquina'],
  ['mapa-bloques-detalle',                   2000, 1100, 'mapa',      'Mapa detallado de los cinco bloques'],
  ['oficina-buenos-aires-fachada',           1400, 1000, 'edificio',  'Fachada sede corporativa Buenos Aires'],
  ['oficina-neuquen-fachada',                1400, 1000, 'edificio',  'Fachada sede operativa Neuquen'],
  ['oficina-houston-fachada',                1400, 1000, 'edificio',  'Fachada oficina Houston'],
  ['prensa-resultados-2t2026',               1400, 1000, 'interior',  'Sala de reuniones, resultados trimestrales'],
  ['prensa-hito-produccion',                 1400, 1000, 'campo',     'Locacion de pozo al atardecer'],
  ['prensa-reporte-sustentabilidad',         1400, 1000, 'estepa',    'Estepa neuquina, reporte de sustentabilidad'],
  ['prensa-designacion-directorio',          1400, 1000, 'edificio',  'Fachada de la sede corporativa'],
  ['prensa-emision-on',                      1400, 1000, 'interior',  'Pantallas de mesa de operaciones'],
  ['prensa-adquisicion-bloque',              1400, 1000, 'campo',     'Vista aerea de Bajo del Condor'],
  ['inversores-hero-reunion-directorio',       2400, 1350, 'interior',  'Sala del Directorio, sede Buenos Aires'],
  ['operaciones-hero-equipo-perforacion',    2400, 1350, 'campo',     'Equipo de perforacion de noche'],
  ['operaciones-fractura-hidraulica-set',    1800, 1350, 'campo',     'Set de fractura hidraulica'],
  ['operaciones-facilities-bateria',         1400, 1600, 'planta',    'Tanques de la Bateria Central II'],
  ['operaciones-exploracion-sismica',        1400, 1200, 'estepa',    'Adquisicion sismica en el campo'],
  ['operaciones-sala-control',               1400, 1200, 'interior',  'Sala de control operativo'],
  ['bloque-loma-chivata-norte',              1200, 900,  'campo',     'Pad de perforacion Loma Chivata Norte'],
  ['bloque-canadon-mahuida',                 1200, 900,  'planta',    'Instalaciones de Canadon Mahuida'],
  ['bloque-bajo-del-condor',                 1200, 900,  'campo',     'Acceso y locacion Bajo del Condor'],
  ['bloque-sierra-colorada-oeste',           1200, 900,  'planta',    'Bateria de separacion Sierra Colorada'],
  ['bloque-puesto-aguada-sur',               1200, 900,  'estepa',    'Area exploratoria Puesto Aguada Sur'],
  ['sustentabilidad-hero-bardas-flora',      2400, 1350, 'estepa',    'Flora nativa junto a locacion restaurada'],
  ['sustentabilidad-agua-reutilizacion',     1400, 1200, 'planta',    'Planta de tratamiento de agua de retorno'],
  ['sustentabilidad-biodiversidad-estepa',   1600, 1200, 'estepa',    'Relevamiento de flora y fauna'],
  ['sustentabilidad-comunidad-escuela-tecnica', 1200, 900, 'social',  'Laboratorio de automatizacion'],
  ['sustentabilidad-comunidad-agua-segura',  1200, 900,  'social',    'Sistema de potabilizacion comunitario'],
  ['sustentabilidad-comunidad-taller-oficios', 1200, 900, 'social',   'Taller de formacion en soldadura'],
  ['sustentabilidad-proveedores-locales',    1200, 900,  'social',    'Proveedor local en su taller'],
  ['og-andes-petrolera',                     1200, 630,  'campo',     'Open Graph - home'],
  ['og-andes-operaciones',                   1200, 630,  'planta',    'Open Graph - operaciones'],
  ['og-andes-inversores',                    1200, 630,  'interior',  'Open Graph - inversores'],
  ['og-andes-sustentabilidad',               1200, 630,  'estepa',    'Open Graph - sustentabilidad'],
];

/* Ruido determinístico: da textura y, de paso, peso realista al JPEG. */
let semilla = 20260924;
function azar() {
  semilla = (semilla * 1103515245 + 12345) & 0x7fffffff;
  return semilla / 0x7fffffff;
}

function escena(ancho, alto, paleta, etiqueta, archivo) {
  const img = lienzo(ancho, alto);
  const p = PALETAS[paleta];
  const horizonte = Math.round(alto * (paleta === 'mapa' ? 1 : 0.62));

  // Degradé de cielo
  for (let y = 0; y < horizonte; y++) {
    const t = y / horizonte;
    const r = Math.round(p.cielo[0] + (255 - p.cielo[0]) * t * 0.45);
    const g = Math.round(p.cielo[1] + (255 - p.cielo[1]) * t * 0.42);
    const b = Math.round(p.cielo[2] + (255 - p.cielo[2]) * t * 0.38);
    rect(img, 0, y, ancho, 1, [r, g, b]);
  }

  // Suelo
  for (let y = horizonte; y < alto; y++) {
    const t = (y - horizonte) / Math.max(1, alto - horizonte);
    const r = Math.round(p.suelo[0] * (1 - t * 0.38));
    const g = Math.round(p.suelo[1] * (1 - t * 0.38));
    const b = Math.round(p.suelo[2] * (1 - t * 0.38));
    rect(img, 0, y, ancho, 1, [r, g, b]);
  }

  // Silueta de sierra sobre el horizonte
  if (paleta !== 'mapa' && paleta !== 'interior') {
    const picos = 7;
    for (let i = 0; i < picos; i++) {
      const cx = Math.round((ancho / picos) * (i + 0.5) + (azar() - 0.5) * ancho * 0.06);
      const altura = Math.round(alto * (0.08 + azar() * 0.14));
      const base = Math.round(ancho * (0.09 + azar() * 0.07));
      for (let dx = -base; dx <= base; dx++) {
        const h = Math.round(altura * (1 - Math.abs(dx) / base));
        rect(img, cx + dx, horizonte - h, 1, h + 2, [
          Math.round(p.cielo[0] * 0.62),
          Math.round(p.cielo[1] * 0.62),
          Math.round(p.cielo[2] * 0.66),
        ]);
      }
    }
  }

  // Trama de referencia para los mapas
  if (paleta === 'mapa') {
    const paso = Math.round(ancho / 26);
    for (let x = 0; x < ancho; x += paso) rect(img, x, 0, 1, alto, [186, 198, 210]);
    for (let y = 0; y < alto; y += paso) rect(img, 0, y, ancho, 1, [186, 198, 210]);
    for (let i = 0; i < 5; i++) {
      const bx = Math.round(ancho * (0.12 + azar() * 0.62));
      const by = Math.round(alto * (0.14 + azar() * 0.52));
      const bw = Math.round(ancho * (0.1 + azar() * 0.1));
      const bh = Math.round(alto * (0.12 + azar() * 0.14));
      rect(img, bx, by, bw, bh, p.acento, 0.34);
      rect(img, bx, by, bw, 3, p.acento);
      rect(img, bx, by + bh, bw, 3, p.acento);
      rect(img, bx, by, 3, bh, p.acento);
      rect(img, bx + bw, by, 3, bh + 3, p.acento);
    }
  }

  // Banda diagonal de acento
  const grosor = Math.round(alto * 0.012);
  for (let x = 0; x < ancho; x++) {
    const y = Math.round(alto * 0.78 - x * 0.09);
    rect(img, x, y, 1, grosor, p.acento, 0.5);
  }

  // Grano
  for (let y = 0; y < alto; y++) {
    for (let x = 0; x < ancho; x++) {
      if (azar() > 0.55) continue;
      const i = (y * ancho + x) * 3;
      const d = Math.round((azar() - 0.5) * 34);
      img.datos[i] = Math.min(255, Math.max(0, img.datos[i] + d));
      img.datos[i + 1] = Math.min(255, Math.max(0, img.datos[i + 1] + d));
      img.datos[i + 2] = Math.min(255, Math.max(0, img.datos[i + 2] + d));
    }
  }

  // Cartela con el nombre del archivo y la foto esperada
  const escala = Math.max(2, Math.round(ancho / 420));
  const alturaCartela = escala * 34;
  rect(img, 0, alto - alturaCartela, ancho, alturaCartela, [14, 42, 71], 0.82);
  rect(img, 0, alto - alturaCartela, ancho, Math.max(2, escala), p.acento);

  const linea1 = archivo + '.JPG';
  const linea2 = etiqueta.toUpperCase();
  const margen = escala * 6;
  texto(img, linea1, margen, alto - alturaCartela + escala * 7, escala, [232, 148, 58]);
  const escala2 = Math.max(1, escala - 1);
  if (anchoTexto(linea2, escala2) < ancho - margen * 2) {
    texto(img, linea2, margen, alto - alturaCartela + escala * 19, escala2, [226, 232, 238]);
  }

  // Marco
  const borde = Math.max(2, Math.round(escala / 1.5));
  rect(img, 0, 0, ancho, borde, [255, 255, 255], 0.16);
  rect(img, 0, 0, borde, alto, [255, 255, 255], 0.16);

  return img;
}

/* ------------------------------------------------------------------ EJECUCIÓN */
fs.mkdirSync(DESTINO, { recursive: true });

let total = 0;
for (const [archivo, ancho, alto, paleta, etiqueta] of CATALOGO) {
  const img = escena(ancho, alto, paleta, etiqueta, archivo);
  const rutaPNG = path.join(TEMPORAL, archivo + '.png');
  fs.writeFileSync(rutaPNG, aPNG(img));

  const rutaJPG = path.join(DESTINO, archivo + '.jpg');
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '86', rutaPNG, '--out', rutaJPG], {
    stdio: 'ignore',
  });

  const peso = fs.statSync(rutaJPG).size;
  total += peso;
  console.log(String(Math.round(peso / 1024)).padStart(6) + ' KB  ' + archivo + '.jpg');
}

/* Ícono para dispositivos Apple */
const icono = lienzo(180, 180);
rect(icono, 0, 0, 180, 180, [14, 42, 71]);
for (let x = -60; x <= 60; x++) {
  const h = Math.round(92 * (1 - Math.abs(x) / 60));
  rect(icono, 90 + x, 128 - h, 1, h, [255, 255, 255]);
}
for (let x = -26; x <= 26; x++) {
  const h = Math.round(40 * (1 - Math.abs(x) / 26));
  rect(icono, 90 + x, 88 - h + 40, 1, h, [201, 118, 29]);
}
rect(icono, 84, 128, 12, 26, [201, 118, 29]);
fs.writeFileSync(path.join(TEMPORAL, 'apple-touch-icon.png'), aPNG(icono));
fs.copyFileSync(path.join(TEMPORAL, 'apple-touch-icon.png'), path.join(DESTINO, 'apple-touch-icon.png'));

/* favicon.ico de respaldo para navegadores sin soporte de SVG */
execFileSync('sips', [
  '-s', 'format', 'png', '-z', '32', '32',
  path.join(TEMPORAL, 'apple-touch-icon.png'),
  '--out', path.resolve('public/favicon.ico'),
], { stdio: 'ignore' });

console.log('\n' + CATALOGO.length + ' imágenes generadas · ' + (total / 1048576).toFixed(1) + ' MB en total');
console.log('Destino: public/assets/img/');
