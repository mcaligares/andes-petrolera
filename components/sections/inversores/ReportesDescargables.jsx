import Seccion from '../../Seccion';
import { REPORTES, DOCUMENTOS_GOBIERNO } from '../../../lib/finanzas';

const ANIOS = ['todos', '2026', '2025', '2024'];

export default function ReportesDescargables() {
  return (
    <Seccion id="reportes-descargables" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Documentación</span>
          <h2>Reportes y presentaciones</h2>
          <span className="subrayado-ocre" />
        </div>

        <div className="reportes-columnas">
          <div>
            <h3>Información financiera y reportes</h3>

            <div className="reportes-filtro" data-filtro-reportes>
              {ANIOS.map((anio, indice) => (
                <span className={indice === 0 ? 'etiqueta activo' : 'etiqueta'} data-anio={anio} key={anio}>
                  {anio === 'todos' ? 'Todos' : anio}
                </span>
              ))}
            </div>

            <ul className="lista-descargas" data-lista-reportes>
              {REPORTES.map((reporte) => (
                <li key={reporte.nombre} data-anio-reporte={reporte.anio}>
                  <div>
                    <a className="archivo-nombre" href={'/assets/docs/' + reporte.nombre}>
                      {reporte.descripcion}
                    </a>
                    <span className="archivo-meta">
                      {reporte.nombre} · {reporte.peso} · {reporte.fecha}
                    </span>
                  </div>
                  <span className="icono-pdf">PDF</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Gobierno corporativo y políticas</h3>
            <p className="texto-tenue">
              Documentación societaria y políticas internas aprobadas por el Directorio, vigentes a la fecha de esta
              publicación.
            </p>

            <ul className="lista-descargas">
              {DOCUMENTOS_GOBIERNO.map((documento) => (
                <li key={documento.nombre}>
                  <div>
                    <a className="archivo-nombre" href={'/assets/docs/' + documento.nombre}>
                      {documento.descripcion}
                    </a>
                    <span className="archivo-meta">
                      {documento.nombre} · {documento.peso}
                    </span>
                  </div>
                  <span className="icono-pdf">PDF</span>
                </li>
              ))}
            </ul>

            <p style={{ marginTop: '24px' }}>
              <a className="link-mas-tenue" href="/inversores/archivo-documental">
                Archivo documental completo
              </a>
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
