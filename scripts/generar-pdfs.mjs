/* --------------------------------------------------------------------------
   Genera PDFs de una página para cada documento enlazado desde el sitio.
   Son marcadores de posición: reemplazá cada archivo por el documento real
   manteniendo el nombre exacto.   Uso: npm run pdfs
   -------------------------------------------------------------------------- */

import fs from 'node:fs';
import path from 'node:path';
import { REPORTES, DOCUMENTOS_GOBIERNO } from '../lib/finanzas.js';

const DESTINO = path.resolve('public/assets/docs');
fs.mkdirSync(DESTINO, { recursive: true });

const EXTRA = [
  { nombre: 'Andes_Petrolera_Indice_GRI_SASB_2025.pdf', descripcion: 'Índice GRI y SASB 2025' },
  { nombre: 'Andes_Petrolera_Reporte_TCFD_2025.pdf', descripcion: 'Reporte climático conforme a TCFD 2025' },
];

function escapar(texto) {
  return texto.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

/* Latin-1 alcanza para los caracteres que usamos en las portadas. */
function pdf(titulo, subtitulo, archivo) {
  const lineas = [
    { y: 660, tam: 20, texto: 'ANDES PETROLERA S.A.' },
    { y: 630, tam: 10, texto: 'CUIT 30-71562348-9  |  BYMA: ANDP  |  NYSE: ANDP' },
    { y: 560, tam: 16, texto: titulo },
    { y: 532, tam: 11, texto: subtitulo },
    { y: 470, tam: 9, texto: 'Archivo: ' + archivo },
    { y: 452, tam: 9, texto: 'Documento de ejemplo generado para el sitio institucional.' },
    { y: 438, tam: 9, texto: 'Reemplazar por el documento definitivo conservando el nombre de archivo.' },
    { y: 120, tam: 8, texto: 'Av. Leandro N. Alem 855, Piso 12 - C1001AAD - Ciudad Autonoma de Buenos Aires - Argentina' },
    { y: 108, tam: 8, texto: 'www.andespetrolera.com.ar  |  ir@andespetrolera.com.ar  |  +54 11 4318-7400' },
  ];

  const contenido =
    '0.055 0.165 0.278 rg\n0 772 612 20 re f\n0.788 0.463 0.114 rg\n0 766 612 6 re f\n0 0 0 rg\n' +
    lineas
      .map((l) => `BT /F1 ${l.tam} Tf 62 ${l.y} Td (${escapar(l.texto)}) Tj ET`)
      .join('\n');

  const objetos = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    `<< /Length ${Buffer.byteLength(contenido, 'latin1')} >>\nstream\n${contenido}\nendstream`,
  ];

  let salida = '%PDF-1.4\n';
  const posiciones = [];
  objetos.forEach((objeto, indice) => {
    posiciones.push(Buffer.byteLength(salida, 'latin1'));
    salida += `${indice + 1} 0 obj\n${objeto}\nendobj\n`;
  });

  const inicioXref = Buffer.byteLength(salida, 'latin1');
  salida += `xref\n0 ${objetos.length + 1}\n0000000000 65535 f \n`;
  posiciones.forEach((posicion) => {
    salida += String(posicion).padStart(10, '0') + ' 00000 n \n';
  });
  salida += `trailer\n<< /Size ${objetos.length + 1} /Root 1 0 R >>\nstartxref\n${inicioXref}\n%%EOF`;

  return Buffer.from(salida, 'latin1');
}

const TODOS = [
  ...REPORTES.map((r) => ({ nombre: r.nombre, descripcion: r.descripcion })),
  ...DOCUMENTOS_GOBIERNO.map((d) => ({ nombre: d.nombre, descripcion: d.descripcion })),
  ...EXTRA,
];

const vistos = new Set();
for (const documento of TODOS) {
  if (vistos.has(documento.nombre)) continue;
  vistos.add(documento.nombre);

  const titulo = documento.nombre.replace(/^Andes_Petrolera_/, '').replace(/\.pdf$/, '').replace(/_/g, ' ');
  fs.writeFileSync(path.join(DESTINO, documento.nombre), pdf(titulo, documento.descripcion, documento.nombre));
  console.log('  ' + documento.nombre);
}

console.log('\n' + vistos.size + ' documentos generados en public/assets/docs/');
