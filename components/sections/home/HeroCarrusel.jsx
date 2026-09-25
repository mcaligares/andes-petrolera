import Seccion from '../../Seccion';

/* Carrusel institucional. 4 slides, rotación cada 4 s (ver /js/andes-ui.js). */

const SLIDES = [
  {
    volanta: 'Andes Petrolera S.A.',
    titulo: 'Energía que nace en el sur',
    texto:
      'Desde 2017 trabajamos en el desarrollo responsable de los recursos no convencionales de la Cuenca Neuquina, con una mirada de largo plazo.',
    enlace: { texto: 'Consultar por servicios', href: '#quienes-somos' },
    imagen: '/assets/img/hero-pozo-vaca-muerta.jpg',
    alt: 'Equipo de perforación en operación en un pad de Vaca Muerta',
  },
  {
    volanta: 'Nuestro compromiso',
    titulo: 'Crecer junto a las comunidades donde operamos',
    texto:
      'Nuestra presencia en el Neuquén se construye con diálogo permanente, empleo local y programas sostenidos en el tiempo.',
    enlace: { texto: 'Ver nuestro compromiso', href: '#compromiso-comunidades' },
    imagen: '/assets/img/hero-atardecer-bardas-neuquen.jpg',
  },
  {
    volanta: 'Personas y tecnología',
    titulo: 'Rigor técnico en cada etapa del proceso',
    texto:
      'Integramos geociencias, ingeniería de reservorios y analítica de datos para operar con estándares internacionales de seguridad y eficiencia.',
    enlace: { texto: 'Conocer nuestras operaciones', href: '/operaciones' },
    imagen: '/assets/img/hero-equipo-operaciones-casco.jpg',
    alt: 'Personal de operaciones con equipo de protección en planta',
  },
  {
    volanta: 'Visión de largo plazo',
    titulo: 'Construimos valor sostenible en el tiempo',
    texto:
      'Un plan de desarrollo disciplinado, una estructura de capital sólida y una política de transparencia hacia el mercado.',
    enlace: { texto: 'Información para inversores', href: '/inversores' },
    imagen: '/assets/img/hero-planta-tratamiento-neuquen.jpg',
    alt: 'Planta de tratamiento de crudo al atardecer',
  },
];

export default function HeroCarrusel() {
  return (
    <Seccion id="hero-carrusel" className="hero-carrusel" data-carrusel>
      {SLIDES.map((slide, indice) => (
        <div className={indice === 0 ? 'hero-slide activo' : 'hero-slide'} key={slide.titulo}>
          <img src={slide.imagen} alt={slide.alt} />

          <div className="contenedor hero-slide-contenido">
            <span className="volanta">{slide.volanta}</span>
            {indice === 0 ? <h1>{slide.titulo}</h1> : <h2>{slide.titulo}</h2>}
            <p>{slide.texto}</p>
            <a className="link-mas" href={slide.enlace.href}>
              {slide.enlace.texto}
            </a>
          </div>
        </div>
      ))}

      <div className="hero-controles">
        <div className="contenedor">
          {SLIDES.map((slide, indice) => (
            <button
              type="button"
              className={indice === 0 ? 'hero-punto activo' : 'hero-punto'}
              key={'punto-' + slide.titulo}
            />
          ))}

          <div className="hero-flechas">
            <button type="button" className="hero-flecha" data-carrusel-anterior>
              ‹
            </button>
            <button type="button" className="hero-flecha" data-carrusel-siguiente>
              ›
            </button>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
