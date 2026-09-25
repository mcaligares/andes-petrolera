/* Escritor de PNG mínimo (sin dependencias) y fuente de mapa de bits 5x7.
   Se usa sólo para generar las imágenes de reemplazo de /assets/img. */

import zlib from 'node:zlib';

const TABLA_CRC = (() => {
  const tabla = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    tabla[n] = c;
  }
  return tabla;
})();

function crc32(buffer) {
  let c = 0xffffffff;
  for (let i = 0; i < buffer.length; i++) c = TABLA_CRC[(c ^ buffer[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function bloque(tipo, datos) {
  const largo = Buffer.alloc(4);
  largo.writeUInt32BE(datos.length, 0);
  const cuerpo = Buffer.concat([Buffer.from(tipo, 'ascii'), datos]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(cuerpo), 0);
  return Buffer.concat([largo, cuerpo, crc]);
}

/** Crea un lienzo RGB de ancho x alto. */
export function lienzo(ancho, alto) {
  return { ancho, alto, datos: Buffer.alloc(ancho * alto * 3) };
}

export function pixel(img, x, y, r, g, b) {
  if (x < 0 || y < 0 || x >= img.ancho || y >= img.alto) return;
  const i = (y * img.ancho + x) * 3;
  img.datos[i] = r;
  img.datos[i + 1] = g;
  img.datos[i + 2] = b;
}

export function rect(img, x0, y0, ancho, alto, [r, g, b], alfa = 1) {
  for (let y = y0; y < y0 + alto; y++) {
    for (let x = x0; x < x0 + ancho; x++) {
      if (x < 0 || y < 0 || x >= img.ancho || y >= img.alto) continue;
      const i = (y * img.ancho + x) * 3;
      img.datos[i] = Math.round(img.datos[i] * (1 - alfa) + r * alfa);
      img.datos[i + 1] = Math.round(img.datos[i + 1] * (1 - alfa) + g * alfa);
      img.datos[i + 2] = Math.round(img.datos[i + 2] * (1 - alfa) + b * alfa);
    }
  }
}

/** Serializa el lienzo como PNG RGB de 8 bits. */
export function aPNG(img) {
  const cabecera = Buffer.alloc(13);
  cabecera.writeUInt32BE(img.ancho, 0);
  cabecera.writeUInt32BE(img.alto, 4);
  cabecera[8] = 8; // profundidad
  cabecera[9] = 2; // color: RGB
  cabecera[10] = 0;
  cabecera[11] = 0;
  cabecera[12] = 0;

  const filas = Buffer.alloc(img.alto * (img.ancho * 3 + 1));
  for (let y = 0; y < img.alto; y++) {
    const origen = y * img.ancho * 3;
    const destino = y * (img.ancho * 3 + 1);
    filas[destino] = 0; // filtro "none"
    img.datos.copy(filas, destino + 1, origen, origen + img.ancho * 3);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    bloque('IHDR', cabecera),
    bloque('IDAT', zlib.deflateSync(filas, { level: 6 })),
    bloque('IEND', Buffer.alloc(0)),
  ]);
}

/* ------------------------------------------------------------------ TIPOGRAFÍA
   Mapa de bits 5x7. Suficiente para rotular cada archivo. */
export const FUENTE = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  C: ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  G: ['01110', '10001', '10000', '10111', '10001', '10001', '01111'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['01110', '00100', '00100', '00100', '00100', '00100', '01110'],
  J: ['00111', '00010', '00010', '00010', '00010', '10010', '01100'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
  W: ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  0: ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  1: ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  2: ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
  3: ['11111', '00010', '00100', '00010', '00001', '10001', '01110'],
  4: ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  5: ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  6: ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
  7: ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  8: ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  9: ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
  '-': ['00000', '00000', '00000', '01110', '00000', '00000', '00000'],
  '.': ['00000', '00000', '00000', '00000', '00000', '01100', '01100'],
  '/': ['00001', '00010', '00010', '00100', '01000', '01000', '10000'],
  '_': ['00000', '00000', '00000', '00000', '00000', '00000', '11111'],
  ':': ['00000', '01100', '01100', '00000', '01100', '01100', '00000'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
};

export function texto(img, cadena, x0, y0, escala, color) {
  let cursor = x0;
  for (const caracter of cadena.toUpperCase()) {
    const glifo = FUENTE[caracter] || FUENTE[' '];
    for (let fila = 0; fila < 7; fila++) {
      for (let columna = 0; columna < 5; columna++) {
        if (glifo[fila][columna] === '1') {
          rect(img, cursor + columna * escala, y0 + fila * escala, escala, escala, color);
        }
      }
    }
    cursor += 6 * escala;
  }
  return cursor;
}

export function anchoTexto(cadena, escala) {
  return cadena.length * 6 * escala;
}
