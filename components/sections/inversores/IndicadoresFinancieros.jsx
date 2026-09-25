import Seccion from '../../Seccion';
import { SERIE_TRIMESTRAL } from '../../../lib/finanzas';

export default function IndicadoresFinancieros() {
  return (
    <Seccion id="indicadores-financieros" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Serie histórica</span>
          <h2>Indicadores operativos y financieros por trimestre</h2>
          <span className="subrayado-ocre" />
        </div>

        <div className="bloque-tabla">
          <table className="tabla-datos">
            <caption>Últimos seis trimestres</caption>
            <thead>
              <tr>
                <th scope="col">Indicador</th>
                {SERIE_TRIMESTRAL.columnas.map((columna) => (
                  <th scope="col" key={columna}>
                    {columna}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SERIE_TRIMESTRAL.filas.map((fila) => (
                <tr key={fila.concepto}>
                  <td>{fila.concepto}</td>
                  {fila.valores.map((valor, indice) => (
                    <td key={fila.concepto + indice}>{valor}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="tabla-nota">
            Los datos de producción corresponden a producción neta de la Compañía, neta de regalías. La serie
            completa desde 2021 está disponible en el archivo de resultados.
          </p>
        </div>

        <p>
          <a className="link-mas-tenue" href="/inversores/archivo-de-resultados">
            Ver el archivo histórico completo
          </a>
        </p>
      </div>
    </Seccion>
  );
}
