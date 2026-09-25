import Seccion from '../../Seccion';

export default function HeroInversores() {
  return (
    <Seccion id="hero-inversores" className="hero-pagina">
      <img
        className="hero-pagina-fondo"
        src="/assets/img/inversores-hero-reunion-directorio.jpg"
        alt="Sala del Directorio en la sede corporativa de Buenos Aires"
      />
      <div className="contenedor">
        <p className="miga">
          <a href="/">Inicio</a>
          <span>/</span>
          <a href="/#quienes-somos">La Compañía</a>
          <span>/</span>
          Inversores
        </p>
        <span className="volanta">Relaciones con Inversores</span>
        <h1>Centro de inversores</h1>
        <p className="bajada">
          Información financiera, reportes, calendario de eventos y documentación de gobierno corporativo de Andes
          Petrolera S.A. (BYMA: ANDP · NYSE: ANDP).
        </p>
      </div>
    </Seccion>
  );
}
