import Seccion from '../../Seccion';

const INICIATIVAS = [
  {
    titulo: 'Escuela Técnica de Añelo',
    texto:
      'Desde 2022 sostenemos el equipamiento del laboratorio de automatización y un programa de prácticas profesionalizantes que este año alcanzó a 64 estudiantes de sexto año.',
    imagen: '/assets/img/home-comunidad-anelo-escuela.jpg',
    alt: 'Estudiantes en el laboratorio de la escuela técnica de Añelo',
  },
  {
    titulo: 'Agua segura en parajes rurales',
    texto:
      'Junto al municipio de Añelo instalamos y mantenemos siete sistemas de potabilización en parajes sin conexión a red, que abastecen a 212 familias de forma permanente.',
    imagen: '/assets/img/home-comunidad-agua-segura.jpg',
    alt: 'Sistema de potabilización instalado en un paraje rural',
  },
  {
    titulo: 'Proveedores neuquinos',
    texto:
      'El 41,7% de nuestras compras de bienes y servicios de 2025 se contrató con empresas radicadas en la Provincia del Neuquén, por un total de USD 214 millones.',
    imagen: '/assets/img/home-comunidad-proveedores-locales.jpg',
    alt: 'Taller de una empresa proveedora local en el parque industrial',
  },
];

export default function CompromisoComunidades() {
  return (
    <Seccion id="compromiso-comunidades" className="seccion seccion-gris comunidades">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Comunidades</span>
          <h2>Nuestro compromiso con el territorio</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Trabajamos con una agenda acordada con cada municipio y revisada anualmente. Estas son tres de las
            iniciativas que sostenemos de manera continua.
          </p>
        </div>

        <div className="grid grid-3">
          {INICIATIVAS.map((item) => (
            <article className="tarjeta tarjeta-imagen tarjeta-sombra" key={item.titulo}>
              <img src={item.imagen} alt={item.alt} />
              <div className="tarjeta-cuerpo">
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            </article>
          ))}
        </div>

        <p style={{ marginTop: '32px' }}>
          <a className="link-mas" href="/sustentabilidad#comunidades-programas">
            Conocer todos los programas
          </a>
        </p>
      </div>
    </Seccion>
  );
}
