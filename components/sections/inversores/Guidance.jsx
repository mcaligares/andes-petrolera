import Seccion from '../../Seccion';
import { GUIDANCE } from '../../../lib/finanzas';

export default function Guidance() {
  return (
    <Seccion id="guidance" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Guidance</span>
          <h2>Objetivos para el ejercicio 2026</h2>
          <span className="subrayado-ocre" />
          <p className="bajada texto-tenue">
            Los objetivos fueron confirmados el 6 de agosto de 2026 junto con la presentación de los resultados del
            segundo trimestre y no han sido modificados desde entonces.
          </p>
        </div>

        <div className="guidance-grid">
          {GUIDANCE.map((item) => (
            <div className="guidance-item" key={item.titulo}>
              <h4>{item.titulo}</h4>
              <span className="rango">{item.rango}</span>
              <p>{item.nota}</p>
            </div>
          ))}
        </div>

        <p className="nota-legal" style={{ marginTop: '32px' }}>
          Las manifestaciones sobre hechos futuros contenidas en esta sección reflejan estimaciones de la Dirección a
          la fecha indicada y están sujetas a riesgos e incertidumbres, entre ellos la evolución de los precios
          internacionales de los hidrocarburos, las condiciones macroeconómicas de la República Argentina, el marco
          regulatorio aplicable y la disponibilidad de equipos y servicios. Los resultados efectivos pueden diferir
          significativamente. Andes Petrolera S.A. no asume obligación alguna de actualizar estas estimaciones.
        </p>
      </div>
    </Seccion>
  );
}
