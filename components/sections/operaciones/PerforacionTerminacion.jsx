import Seccion from '../../Seccion';

const KPIS = [
  { valor: '3.180', unidad: 'm', detalle: 'Rama lateral promedio de los pozos conectados en 2026' },
  { valor: '62', unidad: 'etapas', detalle: 'Etapas de fractura por pozo (promedio)' },
  { valor: '9,1', unidad: 'etapas/día', detalle: 'Rendimiento por set de fractura' },
  { valor: '17,4', unidad: 'días', detalle: 'Tiempo de perforación spud to TD' },
  { valor: '11,8', unidad: 'USD MM', detalle: 'Costo de pozo perforado y terminado' },
  { valor: '8.940', unidad: 't', detalle: 'Arena bombeada por pozo (promedio)' },
];

export default function PerforacionTerminacion() {
  return (
    <Seccion id="perforacion-terminacion" className="seccion perforacion">
      <div className="contenedor">
        <div className="grid grid-40-60">
          <div>
            <img
              src="/assets/img/operaciones-fractura-hidraulica-set.jpg"
              alt="Set de equipos de fractura hidráulica durante una operación de estimulación"
            />
          </div>

          <div>
            <span className="volanta">Perforación y terminación</span>
            <h2>Una curva de aprendizaje construida sobre nuestros propios pozos</h2>
            <span className="subrayado-ocre" />
            <p>
              Operamos dos equipos de perforación propios bajo contrato de largo plazo y un set de fractura dedicado.
              El diseño de cada completación se define en una mesa técnica semanal que revisa la producción acumulada
              a 180 días de los pozos vecinos antes de fijar el espaciamiento de clusters y la intensidad de arena.
            </p>
            <p className="texto-tenue">
              Desde 2023 utilizamos perforación simultánea de pads con secuencia zipper en las operaciones de
              estimulación, lo que permitió reducir el tiempo entre la finalización de la perforación y la puesta en
              producción de 71 a 44 días promedio. El plan 2026 contempla la conexión de entre 44 y 48 pozos; al 30
              de junio se habían conectado 34.
            </p>

            <div className="perforacion-kpis">
              {KPIS.map((kpi) => (
                <div key={kpi.detalle}>
                  <span className="dato-grande">{kpi.valor}</span>
                  <span className="unidad"> {kpi.unidad}</span>
                  <p>{kpi.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
