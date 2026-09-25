import Seccion from '../../Seccion';
import { COMUNICADOS } from '../../../lib/datos';

export default function PrensaNovedades() {
  return (
    <Seccion id="prensa-novedades" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Sala de prensa</span>
          <h2>Comunicados y novedades</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Comunicados institucionales de la Compañía. Los hechos relevantes informados a la Comisión Nacional de
            Valores se publican en la sección de inversores.
          </p>
        </div>

        <div className="prensa-lista">
          {COMUNICADOS.map((comunicado) => (
            <article className="comunicado" key={comunicado.fechaISO}>
              <img src={comunicado.imagen} alt={comunicado.alt} />
              <span className="etiqueta etiqueta-gris">{comunicado.categoria}</span>
              <time className="fecha" dateTime={comunicado.fechaISO}>
                {comunicado.fecha}
              </time>
              <h4>
                <a href={`/prensa/${comunicado.fechaISO}`}>{comunicado.titulo}</a>
              </h4>
              <p>{comunicado.resumen}</p>
              <a className="link-mas" href={`/prensa/${comunicado.fechaISO}`}>
                Leer el comunicado
              </a>
            </article>
          ))}
        </div>

        <p style={{ marginTop: '40px' }}>
          <a className="link-mas" href="/prensa">
            Ver todos los comunicados
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/prensa/suscripcion">
            Suscribirse a novedades de prensa
          </a>
        </p>
      </div>
    </Seccion>
  );
}
