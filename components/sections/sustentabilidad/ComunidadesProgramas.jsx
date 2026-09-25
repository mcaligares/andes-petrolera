import Seccion from '../../Seccion';
import { PROGRAMAS } from '../../../lib/esg';

export default function ComunidadesProgramas() {
  return (
    <Seccion id="comunidades-programas" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Comunidades</span>
          <h2>Programas sostenidos en el tiempo</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            La agenda con cada municipio se acuerda anualmente y se revisa en reuniones trimestrales con las
            autoridades locales. En 2025 la inversión social alcanzó los USD 4,7 millones.
          </p>
        </div>

        {PROGRAMAS.map((programa) => (
          <article className="programa" key={programa.titulo}>
            <img src={programa.imagen} alt={programa.alt} />
            <div>
              <span className="alcance">{programa.alcance}</span>
              <h4 style={{ marginTop: '6px' }}>{programa.titulo}</h4>
              <p>{programa.texto}</p>
            </div>
          </article>
        ))}
      </div>
    </Seccion>
  );
}
