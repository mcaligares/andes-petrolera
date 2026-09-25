import Seccion from '../../Seccion';

const KPIS = [
  { valor: '0,42', detalle: 'TRIR — frecuencia total registrable', comparativo: 'vs. 0,48 en 2025 y 0,71 en 2022' },
  { valor: '0,11', detalle: 'LTIF — frecuencia con días perdidos', comparativo: 'vs. 0,14 en 2025' },
  { valor: '0', detalle: 'Accidentes fatales desde 2017', comparativo: 'Propios y contratistas' },
  { valor: '1.847', detalle: 'Detenciones preventivas de tareas en 2025', comparativo: '62% iniciadas por contratistas' },
];

export default function SeguridadSalud() {
  return (
    <Seccion id="seguridad-salud" className="seccion seccion-gris">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Seguridad y salud</span>
          <h2>Indicadores de desempeño</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Los índices se calculan sobre 200.000 horas trabajadas e incluyen personal propio y de empresas
            contratistas. Durante 2025 se registraron 9,84 millones de horas trabajadas.
          </p>
        </div>

        <div className="seguridad-salud-kpis">
          {KPIS.map((kpi) => (
            <div className="kpi-seguridad" key={kpi.detalle}>
              <span className="dato-grande">{kpi.valor}</span>
              <p>{kpi.detalle}</p>
              <span className="comparativo">{kpi.comparativo}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-2" style={{ marginTop: '56px' }}>
          <div>
            <h3>Seguridad de procesos</h3>
            <p className="texto-tenue">
              Clasificamos los eventos de seguridad de procesos según severidad. Durante 2025 no se registraron
              incidentes Tier 1 y se registraron dos incidentes Tier 2, ambos con investigación cerrada y acciones
              correctivas verificadas por el área de HSE. El programa de integridad mecánica alcanza a 682 equipos
              críticos con inspección según plan basado en riesgo.
            </p>
          </div>

          <div>
            <h3>Salud ocupacional</h3>
            <p className="texto-tenue">
              El programa de vigilancia médica cubre al 100% de la dotación propia con exámenes periódicos según
              exposición. Desde 2024 funciona en la sede de Neuquén un consultorio de atención primaria con
              cobertura durante los turnos de campo, y se sostiene un programa de acompañamiento en salud mental de
              acceso voluntario y confidencial, utilizado por 148 personas en 2025.
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
