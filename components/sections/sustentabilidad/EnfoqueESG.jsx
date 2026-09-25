import Seccion from '../../Seccion';

export default function EnfoqueESG() {
  return (
    <Seccion id="enfoque-esg" className="seccion enfoque-esg">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Nuestro enfoque</span>
          {/* Cambiado a h4 en 2023 por pedido de Comunicación, para no repetir el peso del h1 */}
          <h4>Tres pilares y un comité del Directorio que los monitorea</h4>
          <span className="subrayado-ocre" />
          <p className="bajada">
            La agenda de sustentabilidad de la Compañía se organiza en tres pilares con metas cuantificadas y año
            objetivo. El avance se revisa trimestralmente en el Comité de HSE y Sustentabilidad, integrado por tres
            directores, y se reporta anualmente con verificación de un tercero independiente.
          </p>
        </div>

        <div className="grid grid-3">
          <div className="pilar-esg">
            <h3>Ambiente</h3>
            <p>
              Reducción de la intensidad de emisiones, eliminación del venteo rutinario, gestión del agua y
              restauración de las locaciones que salen de servicio.
            </p>
            <ul>
              <li>14,7 kgCO2e/boe de intensidad de emisiones (alcance 1 y 2)</li>
              <li>86,3% de reutilización de agua de retorno</li>
              <li>89% de locaciones con plan de restauración aprobado</li>
            </ul>
          </div>

          <div className="pilar-esg pilar-social">
            <h3>Social</h3>
            <p>
              Seguridad de las personas, desarrollo del empleo y de los proveedores neuquinos, y programas
              sostenidos con las comunidades de nuestra área de influencia.
            </p>
            <ul>
              <li>TRIR de 0,42 en los últimos doce meses</li>
              <li>41,7% de las compras a proveedores de la provincia</li>
              <li>27,4% de mujeres en posiciones de liderazgo</li>
            </ul>
          </div>

          <div className="pilar-esg pilar-gobernanza">
            <h3>Gobernanza</h3>
            <p>
              Integridad, transparencia en el reporte y un canal de denuncias gestionado por un tercero
              independiente, con protección efectiva de quien reporta.
            </p>
            <ul>
              <li>98,6% de la dotación capacitada en el Código de Ética</li>
              <li>31 reportes recibidos por la Línea Ética en 2025</li>
              <li>Tres directores independientes sobre nueve</li>
            </ul>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
