import Seccion from '../../Seccion';

export default function HeroOperaciones() {
  return (
    <Seccion id="hero-operaciones" className="hero-pagina">
      <img
        className="hero-pagina-fondo"
        src="/assets/img/operaciones-hero-equipo-perforacion.jpg"
        alt="Equipo de perforación operando de noche en la Cuenca Neuquina"
      />
      <div className="contenedor">
        <p className="miga">
          <a href="/">Inicio</a>
          <span>/</span>
          Operaciones
        </p>
        <span className="volanta">Operaciones</span>
        <h1>Cinco bloques en la Cuenca Neuquina</h1>
        <p className="bajada">
          Desarrollo no convencional de la Formación Vaca Muerta en los departamentos de Añelo y Pehuenches, con
          operación directa sobre el 87% de la producción del portafolio.
        </p>
      </div>
    </Seccion>
  );
}
