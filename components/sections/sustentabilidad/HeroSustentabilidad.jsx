import Seccion from '../../Seccion';

export default function HeroSustentabilidad() {
  return (
    <Seccion id="hero-sustentabilidad" className="hero-pagina">
      <img
        className="hero-pagina-fondo"
        src="/assets/img/sustentabilidad-hero-bardas-flora.jpg"
        alt="Vegetación nativa de la estepa neuquina junto a una locación restaurada"
      />
      <div className="contenedor">
        <p className="miga">
          <a href="/">Inicio</a>
          <span>/</span>
          Sustentabilidad
        </p>
        <span className="volanta">Sustentabilidad</span>
        <h1>Metas públicas, avance verificable</h1>
        <p className="bajada">
          Ocho compromisos con año objetivo y línea de base declarada, reportados anualmente bajo estándares GRI,
          SASB y TCFD.
        </p>
      </div>
    </Seccion>
  );
}
