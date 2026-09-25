import Seccion from '../../Seccion';

const KPIS = [
  { valor: '0,42', detalle: 'TRIR — índice de frecuencia total registrable, últimos doce meses' },
  { valor: '0,11', detalle: 'LTIF — frecuencia de accidentes con días perdidos' },
  { valor: '9,84', detalle: 'Millones de horas trabajadas en 2025 (propias y contratistas)' },
];

export default function SeguridadOperacional() {
  return (
    <Seccion id="seguridad-operacional" className="seccion seguridad-op">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Seguridad operacional</span>
            <h2>La seguridad como condición de la operación</h2>
            <span className="subrayado-ocre" />
            <p>
              Todo el personal, propio y contratista, tiene la facultad de detener una tarea cuando identifica una
              condición insegura. En 2025 se registraron 1.847 detenciones preventivas, de las cuales el 62% fueron
              iniciadas por personal de empresas contratistas.
            </p>
            <p>
              Aplicamos el esquema de seguridad de procesos con clasificación de eventos por severidad. Durante 2025
              no se registraron incidentes Tier 1 y se registraron dos incidentes Tier 2, ambos con investigación
              cerrada y acciones correctivas verificadas. La Compañía no registra accidentes fatales desde su
              constitución en 2017.
            </p>

            <div className="seguridad-op-kpis">
              {KPIS.map((kpi) => (
                <div key={kpi.detalle}>
                  <span className="dato-grande">{kpi.valor}</span>
                  <p>{kpi.detalle}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '32px' }}>
              <a className="link-mas" href="/sustentabilidad#seguridad-salud">
                Ver indicadores completos de seguridad y salud
              </a>
            </p>
          </div>

          <div>
            <img src="/assets/img/operaciones-sala-control.jpg" alt="" />
          </div>
        </div>
      </div>
    </Seccion>
  );
}
