import Seccion from '../../Seccion';
import { BLOQUES } from '../../../lib/bloques';

export default function BloquesDetalle() {
  return (
    <Seccion id="bloques-detalle" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Nuestros bloques</span>
          <h2>Detalle del portafolio</h2>
          <span className="subrayado-ocre" />
        </div>

        {BLOQUES.map((bloque) => (
          <article className="bloque-ficha" key={bloque.nombre}>
            <img src={bloque.imagen} alt={bloque.alt} />

            <div>
              <span className={bloque.rol === 'Operado' ? 'etiqueta etiqueta-ocre' : 'etiqueta'}>
                {bloque.rol} · {bloque.etapa}
              </span>
              <h3>{bloque.nombre}</h3>
              <p className="texto-tenue" style={{ marginTop: '-8px' }}>
                {bloque.provincia} · Vencimiento de la concesión: {bloque.vencimiento}
              </p>
              <p>{bloque.texto}</p>

              <dl className="bloque-metricas">
                <div>
                  <dt>Participación</dt>
                  <dd>{bloque.wi}</dd>
                </div>
                <div>
                  <dt>Superficie bruta</dt>
                  <dd>{bloque.superficie}</dd>
                </div>
                <div>
                  <dt>Pozos en producción</dt>
                  <dd>{bloque.pozos}</dd>
                </div>
                <div>
                  <dt>Producción neta</dt>
                  <dd>{bloque.produccion} boe/d</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}

        {/* Tabla comparativa — pedido de la Gerencia de Reservorios (2023) */}
        <div className="bloque-tabla" style={{ marginTop: '48px' }}>
          <table className="tabla-datos">
            <caption>Producción y superficie por bloque — 2T 2026</caption>
            <thead>
              <tr>
                <th scope="col">Bloque</th>
                <th scope="col">Rol</th>
                <th scope="col">WI</th>
                <th scope="col">Sup. bruta (km²)</th>
                <th scope="col">Sup. neta (km²)</th>
                <th scope="col">Pozos</th>
                <th scope="col">Prod. neta (boe/d)</th>
                <th scope="col">% del total</th>
              </tr>
            </thead>
            <tbody>
              {BLOQUES.map((bloque) => (
                <tr key={'fila-' + bloque.nombre}>
                  <td>{bloque.nombre}</td>
                  <td>{bloque.rol}</td>
                  <td>{bloque.wi}</td>
                  <td>{bloque.superficie.replace(' km²', '')}</td>
                  <td>{bloque.superficieNeta.replace(' km²', '')}</td>
                  <td>{bloque.pozos}</td>
                  <td>{bloque.produccion}</td>
                  <td>
                    {(
                      (parseFloat(bloque.produccion.replace('.', '')) / 78412) *
                      100
                    )
                      .toFixed(1)
                      .replace('.', ',')}
                    %
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>—</td>
                <td>—</td>
                <td>1.231</td>
                <td>684,4</td>
                <td>241</td>
                <td>78.412</td>
                <td>100,0%</td>
              </tr>
            </tfoot>
          </table>
          <p className="tabla-nota">
            Los pozos informados corresponden a pozos horizontales en producción al 30 de junio de 2026. La
            producción neta considera la participación de la Compañía en cada bloque, neta de regalías.
          </p>
        </div>
      </div>
    </Seccion>
  );
}
