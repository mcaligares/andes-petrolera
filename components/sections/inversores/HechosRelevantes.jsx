import Seccion from '../../Seccion';
import { HECHOS_RELEVANTES } from '../../../lib/finanzas';

export default function HechosRelevantes() {
  return (
    <Seccion id="hechos-relevantes" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Régimen informativo</span>
          {/* Quedó en h3 del rediseño anterior; el resto de la página usa h2 */}
          <h3>Hechos relevantes informados a la CNV</h3>
          <span className="subrayado-ocre" />
          <p className="bajada texto-tenue">
            Publicaciones efectuadas en la Autopista de la Información Financiera de la Comisión Nacional de
            Valores. Se reproducen aquí de manera resumida y a título informativo.
          </p>
        </div>

        <ul className="hechos-lista">
          {HECHOS_RELEVANTES.map((hecho) => (
            <li key={hecho.fecha + hecho.texto.slice(0, 20)}>
              <span className="fecha">{hecho.fecha}</span>
              <span>{hecho.texto}</span>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: '32px' }}>
          <a className="link-mas-tenue" href="/inversores/hechos-relevantes">
            Ver el listado completo
          </a>
        </p>
      </div>
    </Seccion>
  );
}
