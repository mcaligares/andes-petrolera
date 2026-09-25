import Seccion from '../../Seccion';

export default function InnovacionTecnologia() {
  return (
    <Seccion id="innovacion-tecnologia" className="seccion innovacion">
      <div className="contenedor">
        <div className="grid grid-40-60">
          <div>
            <img
              src="/assets/img/home-innovacion-centro-monitoreo.jpg"
              alt="Operadores en el Centro de Monitoreo Integrado de Neuquén"
            />
          </div>

          <div>
            <span className="volanta">Innovación y tecnología</span>
            <h2>Decisiones sobre datos propios</h2>
            <span className="subrayado-ocre" />
            <p>
              El Centro de Monitoreo Integrado de Neuquén concentra la telemetría de la totalidad de nuestros pozos y
              plantas. Opera las 24 horas con dotación propia y es el punto donde convergen la ingeniería de
              producción, el mantenimiento predictivo y la respuesta ante desvíos operativos.
            </p>

            <ul>
              <li>
                <strong>Telemetría en tiempo real sobre 184 pozos activos</strong>
                Medición de presión de boca, caudal y temperatura con frecuencia de un minuto, integrada al modelo de
                declinación de cada pad.
              </li>
              <li>
                <strong>Mantenimiento predictivo en equipos de superficie</strong>
                Desde 2024 aplicamos análisis de vibraciones sobre bombas y compresores. Las intervenciones no
                programadas bajaron un 31% en el último año móvil.
              </li>
              <li>
                <strong>Optimización del diseño de completación</strong>
                Cada nuevo diseño se contrasta contra la producción acumulada a 180 días de los pozos vecinos, con
                ajuste de espaciamiento de clusters e intensidad de arena.
              </li>
              <li>
                <strong>Detección de emisiones fugitivas</strong>
                Campañas trimestrales con cámara de imagen óptica de gases sobre el 100% de las instalaciones de
                superficie.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
