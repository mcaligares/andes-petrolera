import Seccion from '../../Seccion';

export default function Biodiversidad() {
  return (
    <Seccion id="biodiversidad" className="seccion">
      <div className="contenedor">
        <div className="grid grid-40-60">
          <div>
            <img src="/assets/img/sustentabilidad-biodiversidad-estepa.jpg" alt="" />
          </div>

          <div>
            <span className="volanta">Biodiversidad y suelo</span>
            <h2>Reducir la huella de cada locación</h2>
            <span className="subrayado-ocre" />
            <p>
              Desde 2022 mantenemos un convenio con la Facultad de Ciencias del Ambiente y la Salud de la Universidad
              Nacional del Comahue para el relevamiento de flora y fauna en nuestras áreas de concesión. El último
              informe, de octubre de 2025, registró 214 especies, de las cuales nueve se encuentran en alguna
              categoría de conservación.
            </p>
            <p className="texto-tenue">
              El diseño de pads múltiples permitió reducir la superficie intervenida por pozo de 1,8 a 0,7 hectáreas
              entre 2019 y 2026. Al cierre del primer semestre de 2026, el 89% de las locaciones cuenta con plan de
              restauración aprobado por la autoridad provincial y 68 hectáreas fueron efectivamente restauradas con
              especies nativas provenientes de nuestro vivero en el Parque Industrial de Añelo.
            </p>
            <p className="texto-tenue">
              Los caminos de acceso se trazan siguiendo huellas preexistentes siempre que es técnicamente viable, y
              los tendidos eléctricos aéreos en zonas identificadas como corredores de avifauna incorporan
              dispositivos de señalización y aislación desde 2024.
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
