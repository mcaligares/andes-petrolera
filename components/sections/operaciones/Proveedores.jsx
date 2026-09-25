import Seccion from '../../Seccion';

const PASOS = [
  {
    titulo: 'Registro',
    texto:
      'Alta en el portal de proveedores con documentación societaria, impositiva y previsional vigente. El alta se resuelve en un plazo máximo de diez días hábiles.',
  },
  {
    titulo: 'Evaluación HSE',
    texto:
      'Las empresas que prestan servicios en locación atraviesan una evaluación de seguridad, salud y ambiente con auditoría documental y, según el rubro, visita a planta.',
  },
  {
    titulo: 'Homologación',
    texto:
      'Se verifican antecedentes técnicos, capacidad operativa y cumplimiento del Código de Ética y de la Política de Anticorrupción de la Compañía.',
  },
  {
    titulo: 'Contratación',
    texto:
      'Los procesos de compra superiores a USD 250.000 se adjudican por concurso de precios con participación del área usuaria y de Abastecimiento.',
  },
];

export default function Proveedores() {
  return (
    <Seccion id="proveedores" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Proveedores</span>
          <h2>Cómo trabajar con nosotros</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            En 2025 contratamos bienes y servicios por USD 513 millones a 486 proveedores, de los cuales el 41,7% del
            monto total correspondió a empresas radicadas en la Provincia del Neuquén.
          </p>
        </div>

        <div className="proveedores-pasos">
          {PASOS.map((paso) => (
            <div className="paso" key={paso.titulo}>
              <h4>{paso.titulo}</h4>
              <p>{paso.texto}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '40px' }}>
          <a className="link-mas" href="/proveedores/registro">
            Registro de proveedores
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/proveedores/condiciones-generales-de-compra.pdf">
            Condiciones generales de compra (PDF)
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/proveedores/facturacion">
            Consultas de facturación
          </a>
        </p>
      </div>
    </Seccion>
  );
}
