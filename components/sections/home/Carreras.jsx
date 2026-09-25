import Seccion from '../../Seccion';

export default function Carreras() {
  return (
    <Seccion id="carreras" className="seccion carreras">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Carreras</span>
            <h2>Trabajar en Andes Petrolera</h2>
            <span className="subrayado-ocre" />
            <p>
              Buscamos personas con formación técnica sólida y disposición para trabajar en un entorno operativo
              exigente. La mayor parte de nuestras posiciones se desempeñan en la Provincia del Neuquén, con esquemas
              de diagrama para los puestos de campo y modalidad mixta para las áreas corporativas.
            </p>
            <p className="texto-tenue">
              El Programa de Jóvenes Profesionales abre su convocatoria todos los años en septiembre y está dirigido
              a personas graduadas de carreras de ingeniería, geología, geofísica, administración y abogacía con
              hasta dos años de experiencia. La cohorte 2026 incorporó a 28 profesionales, de los cuales 19 tienen
              residencia previa en la Provincia del Neuquén.
            </p>

            <div className="carreras-datos">
              <div>
                <div className="dato-grande">1.148</div>
                <p>colaboradores propios</p>
              </div>
              <div>
                <div className="dato-grande">27,4%</div>
                <p>de mujeres en posiciones de liderazgo</p>
              </div>
              <div>
                <div className="dato-grande">31</div>
                <p>búsquedas abiertas al 24/09/2026</p>
              </div>
              <div>
                <div className="dato-grande">62,8%</div>
                <p>de la dotación con residencia en Neuquén</p>
              </div>
            </div>

            <p style={{ marginTop: '28px' }}>
              <a className="link-mas" href="/carreras/busquedas">
                Ver búsquedas abiertas
              </a>
              <span style={{ display: 'inline-block', width: '24px' }} />
              <a className="link-mas-tenue" href="/carreras/jovenes-profesionales">
                Programa de Jóvenes Profesionales
              </a>
            </p>
          </div>

          <div>
            <img
              src="/assets/img/home-carreras-jovenes-profesionales.jpg"
              alt="Integrantes del Programa de Jóvenes Profesionales en la sede de Neuquén"
            />
          </div>
        </div>
      </div>
    </Seccion>
  );
}
