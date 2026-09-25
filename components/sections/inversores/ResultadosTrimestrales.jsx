import Seccion from '../../Seccion';
import { KPIS_TRIMESTRE, ESTADO_RESULTADOS } from '../../../lib/finanzas';

export default function ResultadosTrimestrales() {
  return (
    <Seccion id="resultados-trimestrales" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Resultados del segundo trimestre de 2026</span>
          <h2>Un trimestre con crecimiento de producción y menor apalancamiento</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Período de tres meses finalizado el 30 de junio de 2026. La información se presenta en dólares
            estadounidenses y no se encuentra auditada.
          </p>
        </div>

        <div className="resultados-destacados">
          {KPIS_TRIMESTRE.map((kpi) => (
            <div className="resultado-kpi" key={kpi.etiqueta}>
              <span className="etiqueta-kpi">{kpi.etiqueta}</span>
              <span className="dato-grande">{kpi.valor}</span>
              <span className="unidad"> {kpi.unidad}</span>
              <br />
              <span className={kpi.sube ? 'variacion sube' : 'variacion baja'}>{kpi.variacion}</span>
            </div>
          ))}
        </div>

        <div className="bloque-tabla">
          <table className="tabla-datos">
            <caption>Estado de resultados resumido — USD millones</caption>
            <thead>
              <tr>
                <th scope="col">Concepto</th>
                <th scope="col">2T 2026</th>
                <th scope="col">2T 2025</th>
                <th scope="col">Var. %</th>
              </tr>
            </thead>
            <tbody>
              {ESTADO_RESULTADOS.map((fila) => (
                <tr key={fila.concepto} style={fila.destacar ? { fontWeight: 700 } : undefined}>
                  <td>{fila.concepto}</td>
                  <td>{fila.t2026}</td>
                  <td>{fila.t2025}</td>
                  <td className={fila.signo === 'positivo' ? 'num-positivo' : 'num-negativo'}>{fila.variacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="tabla-nota">
            El EBITDA ajustado es una medida no contemplada por las NIIF. La conciliación con el resultado operativo
            se incluye en la presentación de resultados del trimestre.
          </p>
        </div>

        <p>
          <a className="link-mas" href="/assets/docs/Andes_Petrolera_2T2026_Earnings_Presentation.pdf">
            Descargar la presentación de resultados
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/assets/docs/Andes_Petrolera_2T2026_Earnings_Release_ES.pdf">
            Comunicado de resultados (PDF)
          </a>
        </p>
      </div>
    </Seccion>
  );
}
