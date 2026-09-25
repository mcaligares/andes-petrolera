import Seccion from '../../Seccion';
import { METAS } from '../../../lib/esg';

export default function MetasESG() {
  return (
    <Seccion id="metas-esg" className="seccion metas">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Metas ESG</span>
          <h2>Compromisos, línea de base y avance</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            El avance se calcula sobre la distancia entre la línea de base declarada y el valor objetivo. Datos al 30
            de junio de 2026, salvo los indicadores de reporte anual, que corresponden al ejercicio 2025.
          </p>
        </div>

        <div className="bloque-tabla">
          <table className="tabla-metas">
            <thead>
              <tr>
                <th scope="col">Meta</th>
                <th scope="col">Pilar</th>
                <th scope="col">Línea de base</th>
                <th scope="col">Valor actual</th>
                <th scope="col">Año objetivo</th>
                <th scope="col">Avance</th>
              </tr>
            </thead>
            <tbody>
              {METAS.map((meta) => (
                <tr key={meta.meta}>
                  <td className="col-meta">{meta.meta}</td>
                  <td>
                    <span className="etiqueta etiqueta-verde">{meta.pilar}</span>
                  </td>
                  <td className="col-base">{meta.base}</td>
                  <td className="col-base">{meta.actual}</td>
                  <td className="col-anio">{meta.anio}</td>
                  <td className="col-avance">
                    <span className="avance-num">{meta.avance}%</span>
                    <div className="barra-avance">
                      <span style={{ width: meta.avance + '%' }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="tabla-nota">
            La metodología de cálculo de cada indicador se detalla en el capítulo &laquo;Acerca de este reporte&raquo;
            del Reporte de Sustentabilidad 2025.
          </p>
        </div>

        <p>
          <a className="link-mas" href="/assets/docs/Andes_Petrolera_Reporte_Sustentabilidad_2025.pdf">
            Descargar el Reporte de Sustentabilidad 2025
          </a>
        </p>
      </div>
    </Seccion>
  );
}
