import Seccion from '../../Seccion';
import { ESTANDARES } from '../../../lib/esg';

export default function EstandaresReportes() {
  return (
    <Seccion id="estandares-reportes" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Estándares y reportes</span>
          <h2>Cómo reportamos</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Publicamos un reporte anual de sustentabilidad con verificación limitada de un tercero independiente
            sobre los indicadores ambientales y de seguridad.
          </p>
        </div>

        <div className="estandares-grid">
          {ESTANDARES.map((estandar) => (
            <div className="estandar" key={estandar.sigla}>
              <span className="sigla">{estandar.sigla}</span>
              <p>{estandar.texto}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px' }}>
          <h3>Descargas</h3>
          <ul className="lista-descargas">
            <li>
              <div>
                <a className="archivo-nombre" href="/assets/docs/Andes_Petrolera_Reporte_Sustentabilidad_2025.pdf">
                  Reporte de Sustentabilidad 2025
                </a>
                <span className="archivo-meta">
                  Andes_Petrolera_Reporte_Sustentabilidad_2025.pdf · 9,2 MB · 22/04/2026
                </span>
              </div>
              <span className="icono-pdf">PDF</span>
            </li>
            <li>
              <div>
                <a className="archivo-nombre" href="/assets/docs/Andes_Petrolera_Indice_GRI_SASB_2025.pdf">
                  Índice GRI y SASB 2025
                </a>
                <span className="archivo-meta">Andes_Petrolera_Indice_GRI_SASB_2025.pdf · 1,6 MB · 22/04/2026</span>
              </div>
              <span className="icono-pdf">PDF</span>
            </li>
            <li>
              <div>
                <a className="archivo-nombre" href="/assets/docs/Andes_Petrolera_Reporte_TCFD_2025.pdf">
                  Reporte climático conforme a TCFD 2025
                </a>
                <span className="archivo-meta">Andes_Petrolera_Reporte_TCFD_2025.pdf · 2,1 MB · 22/04/2026</span>
              </div>
              <span className="icono-pdf">PDF</span>
            </li>
            <li>
              <div>
                <a className="archivo-nombre" href="/assets/docs/Andes_Petrolera_Reporte_Sustentabilidad_2024.pdf">
                  Reporte de Sustentabilidad 2024
                </a>
                <span className="archivo-meta">
                  Andes_Petrolera_Reporte_Sustentabilidad_2024.pdf · 8,4 MB · 18/04/2025
                </span>
              </div>
              <span className="icono-pdf">PDF</span>
            </li>
          </ul>
        </div>
      </div>
    </Seccion>
  );
}
