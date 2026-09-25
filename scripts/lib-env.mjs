/* Lector mínimo de .env.local / .env (sin dependencias). */
import fs from 'node:fs';
import path from 'node:path';

export function cargarEnv(archivos = ['.env.local', '.env']) {
  for (const archivo of archivos) {
    const ruta = path.resolve(archivo);
    if (!fs.existsSync(ruta)) continue;

    for (const linea of fs.readFileSync(ruta, 'utf8').split('\n')) {
      const limpia = linea.trim();
      if (!limpia || limpia.startsWith('#')) continue;

      const corte = limpia.indexOf('=');
      if (corte === -1) continue;

      const clave = limpia.slice(0, corte).trim();
      let valor = limpia.slice(corte + 1).trim();
      if ((valor.startsWith('"') && valor.endsWith('"')) || (valor.startsWith("'") && valor.endsWith("'"))) {
        valor = valor.slice(1, -1);
      }
      if (process.env[clave] === undefined) process.env[clave] = valor;
    }
  }
}
