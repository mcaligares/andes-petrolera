import Seccion from '../../Seccion';
import { EVENTOS } from '../../../lib/finanzas';

export default function CalendarioEventos() {
  return (
    <Seccion id="calendario-eventos" className="seccion calendario">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Calendario financiero</span>
          <h2>Próximos eventos</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Las fechas de publicación de resultados son estimadas y pueden modificarse. Cualquier cambio se informará
            por los canales oficiales de la Compañía.
          </p>
        </div>

        <div>
          {EVENTOS.map((evento) => (
            <div className="evento" key={evento.titulo + evento.dia}>
              <div className="evento-fecha">
                <span className="dia">{evento.dia}</span>
                <span className="mes">
                  {evento.mes} {evento.anio}
                </span>
              </div>

              <div>
                <h4>{evento.titulo}</h4>
                <p>{evento.detalle}</p>
              </div>

              <a className="link-mas" href="/inversores/calendario">
                Agregar al calendario
              </a>
            </div>
          ))}
        </div>
      </div>
    </Seccion>
  );
}
