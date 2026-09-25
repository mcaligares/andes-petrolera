import Seccion from '../../Seccion';

export default function InversoresTeaser() {
  return (
    <Seccion id="inversores-teaser" className="seccion-compacta inversores-teaser">
      <div className="contenedor">
        <div>
          <h3>Información para inversores</h3>
          <p>
            Resultados trimestrales, reportes descargables, calendario financiero, hechos relevantes y documentación
            de gobierno corporativo.
          </p>
        </div>

        <div>
          <a className="link-mas" href="/inversores">
            Ir al centro de inversores
          </a>
        </div>
      </div>
    </Seccion>
  );
}
