import Seccion from '../../Seccion';

export default function EticaCumplimiento() {
  return (
    <Seccion id="etica-cumplimiento" className="seccion etica">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Ética y cumplimiento</span>
            <h2>Programa de integridad</h2>
            <span className="subrayado-ocre" />
            <p>
              Contamos con un Programa de Integridad conforme a la Ley 27.401 de Responsabilidad Penal Empresaria,
              aprobado por el Directorio y supervisado por el Comité de Auditoría. Alcanza a directores,
              colaboradores, empresas contratistas y proveedores, y su aceptación es condición del vínculo
              contractual.
            </p>
            <p className="texto-tenue">
              Durante 2025 el 98,6% de la dotación completó la capacitación anual obligatoria en el Código de Ética y
              Conducta, y 486 proveedores suscribieron la declaración de cumplimiento de la Política de
              Anticorrupción. Las operaciones con partes relacionadas se aprueban conforme a la política específica y
              se informan en los estados financieros.
            </p>
            <p className="texto-tenue">
              La Línea Ética recibió 31 reportes durante 2025. Al cierre del ejercicio, 24 se encontraban cerrados y
              7 en investigación. De los casos cerrados, cuatro derivaron en medidas disciplinarias y dos en la
              rescisión de contratos con empresas proveedoras. No se registraron denuncias por hechos de corrupción
              que involucraran a funcionarios públicos.
            </p>
          </div>

          <div className="canal-etico">
            <h3>Línea Ética</h3>
            <p className="texto-tenue">
              Canal de denuncias gestionado por un tercero independiente. Admite reportes anónimos y está disponible
              las 24 horas, los 365 días del año, para personal propio, contratistas, proveedores y terceros.
            </p>

            <ul>
              <li>
                <strong>Teléfono gratuito (Argentina)</strong>
                <a href="tel:08003451187">0800-345-1187</a>
              </li>
              <li>
                <strong>Correo electrónico</strong>
                <a href="mailto:lineaetica@andespetrolera.com.ar">lineaetica@andespetrolera.com.ar</a>
              </li>
              <li>
                <strong>Formulario web</strong>
                <a href="/linea-etica/formulario">Enviar un reporte en línea</a>
              </li>
              <li>
                <strong>Correo postal</strong>
                Casilla de correo 1855, C1000WAA, CABA
              </li>
            </ul>

            <p className="aclaracion">
              Los reportes son recibidos y clasificados por el proveedor externo, que los deriva al Comité de Ética
              sin revelar la identidad de quien reporta, salvo autorización expresa. La Compañía no tolera
              represalias contra quienes efectúen un reporte de buena fe, y ese principio se encuentra expresamente
              incorporado al Código de Ética y Conducta.
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
