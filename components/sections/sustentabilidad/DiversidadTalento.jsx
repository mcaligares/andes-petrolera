import Seccion from '../../Seccion';

export default function DiversidadTalento() {
  return (
    <Seccion id="diversidad-talento" className="seccion seccion-humo">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Personas</span>
            <h2>Diversidad, equidad y desarrollo</h2>
            <span className="subrayado-ocre" />
            <p>
              La industria de la que formamos parte arrastra una composición históricamente masculina, en particular
              en las posiciones operativas. Reconocerlo es el punto de partida de nuestra política: el 23,1% de la
              dotación propia son mujeres y el 27,4% de las posiciones de liderazgo están ocupadas por mujeres, con
              una meta comprometida del 35% para 2030.
            </p>
            <p className="texto-tenue">
              Desde 2023 realizamos un análisis anual de equidad salarial con metodología de brecha ajustada por
              puesto, antigüedad y desempeño. El último relevamiento arrojó una brecha del 3,2%, que se redujo desde
              el 6,8% de 2023. Las acciones correctivas se aplican en el ciclo de revisión salarial de cada año.
            </p>
            <p className="texto-tenue">
              El 62,8% de la dotación tiene residencia previa en la Provincia del Neuquén. El Programa de Jóvenes
              Profesionales prioriza, a igual mérito, a personas graduadas de universidades de la región. La
              inversión en capacitación fue de 41,2 horas promedio por persona durante 2025.
            </p>
          </div>

          <div>
            <table className="tabla-datos" style={{ minWidth: '0' }}>
              <caption>Composición de la dotación — 2025</caption>
              <tbody>
                <tr>
                  <td>Colaboradores propios</td>
                  <td>1.148</td>
                </tr>
                <tr>
                  <td>Mujeres sobre el total</td>
                  <td>23,1%</td>
                </tr>
                <tr>
                  <td>Mujeres en posiciones de liderazgo</td>
                  <td>27,4%</td>
                </tr>
                <tr>
                  <td>Residencia en Neuquén</td>
                  <td>62,8%</td>
                </tr>
                <tr>
                  <td>Menores de 35 años</td>
                  <td>38,4%</td>
                </tr>
                <tr>
                  <td>Rotación voluntaria</td>
                  <td>6,1%</td>
                </tr>
                <tr>
                  <td>Personal alcanzado por convenio colectivo</td>
                  <td>54,3%</td>
                </tr>
                <tr>
                  <td>Horas de capacitación por persona</td>
                  <td>41,2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
