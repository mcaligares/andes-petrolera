import Seccion from '../../Seccion';

/* Cifras operativas y financieras del 2T 2026.
   Bloque reubicado al pie de la home en la reorganización de contenidos 2021. */

const CIFRAS = [
  { valor: '78.412', unidad: 'boe/d', detalle: 'Producción media del 2T 2026', variacion: '+14,3% i.a.', sube: true },
  { valor: '412,6', unidad: 'MMboe', detalle: 'Reservas probadas (P1) al 31/12/2025', variacion: 'RRR 187%', sube: true },
  { valor: '246,3', unidad: 'USD MM', detalle: 'EBITDA ajustado del 2T 2026', variacion: '+11,8% i.a.', sube: true },
  { valor: '178,6', unidad: 'USD MM', detalle: 'Capex del 2T 2026', variacion: '+6,2% i.a.', sube: true },
  { valor: '6,84', unidad: 'USD/boe', detalle: 'Lifting cost del 2T 2026', variacion: '-4,1% i.a.', sube: true },
  { valor: '0,79', unidad: 'x', detalle: 'Deuda neta / EBITDA ajustado LTM', variacion: 'vs. 0,94x en 2T 2025', sube: true },
  { valor: '14,7', unidad: 'kgCO2e/boe', detalle: 'Intensidad de emisiones alcance 1 y 2 (2025)', variacion: '-12,0% vs. 2024', sube: true },
  { valor: '0,42', unidad: '', detalle: 'TRIR — últimos doce meses al 30/06/2026', variacion: 'vs. 0,48 en 2025', sube: true },
];

export default function CifrasClave() {
  return (
    <Seccion id="cifras-clave" className="seccion cifras-clave">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Cifras clave</span>
          <h2>Principales indicadores</h2>
          <span className="subrayado-ocre" />
          <p className="bajada texto-tenue">
            Datos correspondientes al segundo trimestre finalizado el 30 de junio de 2026, salvo indicación en
            contrario. La información financiera se presenta en dólares estadounidenses y no está auditada.
          </p>
        </div>

        <div className="cifras-grid">
          {CIFRAS.map((cifra) => (
            <div className="cifra" key={cifra.detalle}>
              <div>
                <span className="dato-grande">{cifra.valor}</span>
                {cifra.unidad && <span className="unidad">{cifra.unidad}</span>}
              </div>
              <p>{cifra.detalle}</p>
              <span className={cifra.sube ? 'variacion sube' : 'variacion baja'}>{cifra.variacion}</span>
            </div>
          ))}
        </div>

        <p className="nota-legal" style={{ marginTop: '32px' }}>
          El EBITDA ajustado es una medida no contemplada por las Normas Internacionales de Información Financiera.
          La Compañía lo define como el resultado operativo antes de depreciaciones, amortizaciones y desvalorización
          de activos, excluyendo resultados por participación en negocios conjuntos y partidas no recurrentes. La
          conciliación con el resultado operativo se incluye en la presentación de resultados del trimestre.
        </p>
      </div>
    </Seccion>
  );
}
