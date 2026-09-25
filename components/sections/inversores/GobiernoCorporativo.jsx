import Seccion from '../../Seccion';
import { DIRECTORIO, COMITES } from '../../../lib/finanzas';

export default function GobiernoCorporativo() {
  return (
    <Seccion id="gobierno-corporativo" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Gobierno corporativo</span>
          <h2>Directorio y comités</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            El Directorio está compuesto por nueve directores titulares, de los cuales tres revisten la condición de
            independientes conforme a las Normas de la Comisión Nacional de Valores. El mandato es de tres
            ejercicios con renovación por tercios.
          </p>
        </div>

        <div className="directorio-lista">
          {DIRECTORIO.map((director) => (
            <div className="director" key={director.nombre}>
              <span className="nombre">{director.nombre}</span>
              <span className="cargo">
                {director.cargo} · desde {director.desde}
              </span>
              {director.independiente && <span className="indep"> · Independiente</span>}
            </div>
          ))}
        </div>

        <div className="comites-grid">
          {COMITES.map((comite) => (
            <div className="comite" key={comite.nombre}>
              <h4>{comite.nombre}</h4>
              <p>{comite.texto}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '40px' }}>
          <a className="link-mas" href="/assets/docs/Estatuto_Social_Andes_Petrolera.pdf">
            Estatuto Social (PDF)
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/assets/docs/Codigo_de_Etica_y_Conducta_2025.pdf">
            Código de Ética y Conducta (PDF)
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/inversores/estructura-accionaria">
            Estructura accionaria
          </a>
        </p>
      </div>
    </Seccion>
  );
}
