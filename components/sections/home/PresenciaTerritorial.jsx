import Seccion from '../../Seccion';

export default function PresenciaTerritorial() {
  return (
    <Seccion id="presencia-territorial" className="seccion presencia">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Dónde estamos</span>
          <h2>Presencia territorial</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Nuestra actividad se concentra en los departamentos de Añelo y Pehuenches, en la Provincia del Neuquén,
            con áreas de apoyo logístico en Neuquén Capital y Cutral Có.
          </p>
        </div>

        <div className="mapa-presencia">
          <img
            src="/assets/img/mapa-cuenca-neuquina-bloques.jpg"
            alt="Mapa de la Cuenca Neuquina con la ubicación de los cinco bloques de la Compañía"
          />
        </div>

        <div className="presencia-datos">
          <div className="presencia-dato">
            <div className="dato-grande">684</div>
            <p>km² de superficie neta bajo concesión</p>
          </div>
          <div className="presencia-dato">
            <div className="dato-grande">5</div>
            <p>bloques operados o con participación</p>
          </div>
          <div className="presencia-dato">
            <div className="dato-grande">3</div>
            <p>oficinas: Buenos Aires, Neuquén y Houston</p>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          <a className="link-mas" href="/operaciones#mapa-bloques">
            Ver el detalle de cada bloque
          </a>
        </p>
      </div>
    </Seccion>
  );
}
