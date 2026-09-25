import Seccion from '../../Seccion';

export default function QuienesSomos() {
  return (
    <Seccion id="quienes-somos" className="seccion quienes-somos">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Perfil corporativo</span>
            <h2>Una compañía argentina enfocada en el desarrollo no convencional</h2>
            <span className="subrayado-ocre" />

            <div className="texto-largo">
              <p>
                Andes Petrolera S.A. es una compañía independiente de exploración y producción de hidrocarburos
                constituida en la Ciudad Autónoma de Buenos Aires en marzo de 2017, con foco exclusivo en el
                desarrollo de los recursos no convencionales de la Formación Vaca Muerta, en la Cuenca Neuquina. La
                Compañía surgió de la asociación entre un grupo de profesionales con trayectoria en la industria
                energética argentina y un conjunto de inversores institucionales que acompañaron la etapa inicial de
                adquisición de áreas y de definición del plan de desarrollo. Desde entonces, la estrategia se mantuvo
                deliberadamente concentrada: pocos bloques, alta participación operativa y una curva de aprendizaje
                construida sobre nuestras propias locaciones.
              </p>

              <p>
                Al 30 de junio de 2026 operamos o participamos en cinco bloques con una superficie neta de 684 km²,
                de los cuales cuatro se encuentran en etapa de desarrollo y uno en evaluación exploratoria. La
                producción media del segundo trimestre alcanzó los 78.412 barriles equivalentes de petróleo por día,
                con una participación del petróleo del 78% sobre el total. El plan de desarrollo vigente contempla la
                perforación de entre 44 y 48 pozos horizontales por año hasta 2028, sostenido con generación de caja
                propia y con un perfil de vencimientos de deuda extendido tras la colocación de las Obligaciones
                Negociables Clase VII en noviembre de 2025.
              </p>

              <p>
                El equipo está integrado por 1.148 colaboradores propios y alrededor de 3.400 personas de empresas
                contratistas que trabajan en forma permanente en nuestras locaciones. La conducción de la operación
                se realiza desde la sede de Neuquén, donde funciona el Centro de Monitoreo Integrado, mientras que la
                administración central, las finanzas corporativas y la relación con el mercado de capitales se
                coordinan desde Buenos Aires. La oficina de Houston concentra la relación con proveedores de
                tecnología y con inversores internacionales.
              </p>

              <p>
                Las acciones ordinarias Clase B de la Compañía cotizan en Bolsas y Mercados Argentinos (BYMA) desde
                agosto de 2021 bajo el símbolo ANDP y, desde marzo de 2022, a través de un programa de American
                Depositary Receipts Nivel II en la Bolsa de Nueva York, bajo el mismo símbolo. Andes Petrolera está
                sujeta al régimen de oferta pública de la Comisión Nacional de Valores y al reporte periódico ante la
                Securities and Exchange Commission de los Estados Unidos.
              </p>
            </div>

            <p>
              <a className="link-mas" href="#nuestra-historia">
                Ver nuestra historia
              </a>
            </p>
          </div>

          <figure>
            <img
              src="/assets/img/home-quienes-somos-locacion.jpg"
              alt="Locación de desarrollo en el bloque Loma Chivata Norte"
            />
            <figcaption>
              Locación de desarrollo LCHN-14, bloque Loma Chivata Norte, Provincia del Neuquén. Marzo de 2026.
            </figcaption>
          </figure>
        </div>
      </div>
    </Seccion>
  );
}
