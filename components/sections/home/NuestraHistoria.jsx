import Seccion from '../../Seccion';

const HITOS = [
  { anio: '2017', texto: 'Constitución de Andes Petrolera S.A. Adquisición del 87,5% de la concesión no convencional Loma Chivata Norte.' },
  { anio: '2018', texto: 'Perforación del pozo exploratorio vertical LCHN.x-1 y ejecución del primer ensayo de producción sobre la ventana de petróleo negro.' },
  { anio: '2019', texto: 'Primera terminación horizontal con 24 etapas de fractura. La producción cierra el año en 4.180 boe/d.' },
  { anio: '2020', texto: 'Suspensión parcial de la actividad de perforación entre abril y agosto. Reinicio del piloto de desarrollo en el cuarto trimestre.' },
  { anio: '2021', texto: 'Oferta pública inicial en BYMA. Puesta en marcha de la Batería Central I, con capacidad de tratamiento de 22.000 bbl/d.' },
  { anio: '2022', texto: 'Inicio del programa de ADRs Nivel II en NYSE. La producción supera los 30.000 boe/d en el cuarto trimestre.' },
  { anio: '2023', texto: 'Incorporación del bloque Sierra Colorada Oeste. Primera emisión internacional de Obligaciones Negociables por USD 250 millones.' },
  { anio: '2024', texto: 'Adquisición del 55% de Bajo del Cóndor. Publicación del primer Reporte de Sustentabilidad bajo estándar GRI.' },
  { anio: '2025', texto: 'Habilitación de la Batería Central II y del oleoducto de vinculación Chivata-Añelo. Colocación de las ON Clase VII por USD 300 millones.' },
  { anio: '2026', texto: 'La producción media trimestral supera los 78.000 boe/d. Las reservas probadas alcanzan 412,6 MMboe al cierre del ejercicio anterior.' },
];

export default function NuestraHistoria() {
  return (
    <Seccion id="nuestra-historia" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Nuestra historia</span>
          <h2>Nueve años de construcción sostenida</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            El recorrido de la Compañía desde su constitución en 2017 hasta el plan de desarrollo vigente, con los
            hitos operativos y financieros que marcaron cada etapa.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="linea-tiempo">
            {HITOS.slice(0, 5).map((hito) => (
              <div className="hito" key={hito.anio}>
                <div className="hito-anio">{hito.anio}</div>
                <p>{hito.texto}</p>
              </div>
            ))}
          </div>

          <div className="linea-tiempo">
            {HITOS.slice(5).map((hito) => (
              <div className="hito" key={hito.anio}>
                <div className="hito-anio">{hito.anio}</div>
                <p>{hito.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Seccion>
  );
}
