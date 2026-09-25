import Seccion from '../../Seccion';

export default function MapaBloques() {
  return (
    <Seccion id="mapa-bloques" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Portafolio</span>
          <h2>Ubicación de nuestros bloques</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            La totalidad de nuestra actividad se desarrolla dentro de la Provincia del Neuquén, en un radio de
            noventa kilómetros alrededor de la localidad de Añelo.
          </p>
        </div>

        <div className="bloques-mapa">
          <img
            src="/assets/img/mapa-bloques-detalle.jpg"
            alt="Mapa detallado con la ubicación y superficie de los cinco bloques"
          />
        </div>

        <div className="bloques-leyenda">
          <span>
            <i className="leyenda-operado" /> Bloques operados
          </span>
          <span>
            <i className="leyenda-no-operado" /> Participación no operada
          </span>
          <span>
            <i className="leyenda-exploratorio" /> Área en evaluación exploratoria
          </span>
        </div>
      </div>
    </Seccion>
  );
}
