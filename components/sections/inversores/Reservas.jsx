import Seccion from '../../Seccion';
import { RESERVAS } from '../../../lib/finanzas';

export default function Reservas() {
  return (
    <Seccion id="reservas" className="seccion reservas">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Reservas</span>
          <h2>Reservas certificadas al {RESERVAS.fecha}</h2>
          <span className="subrayado-ocre" />
        </div>

        <div className="reservas-grid">
          <div>
            <p>
              Las reservas de la Compañía son certificadas anualmente por una consultora independiente de reservas de
              hidrocarburos, conforme a las definiciones del Sistema de Gestión de Recursos Petroleros (SPE-PRMS) y a
              los requisitos de la Secretaría de Energía de la Nación y de la Securities and Exchange Commission.
            </p>
            <p className="texto-tenue">
              Durante el ejercicio 2025 se incorporaron 47,3 MMboe por extensiones y revisiones positivas, frente a
              una producción anual de 25,3 MMboe, lo que arroja un índice de reposición de reservas del 187%. La
              totalidad de las reservas probadas no desarrolladas cuenta con plan de desarrollo aprobado dentro de
              los próximos cinco años.
            </p>

            <div className="reservas-barras">
              {RESERVAS.categorias.map((categoria) => (
                <div className="reserva-barra" key={categoria.nombre}>
                  <div className="encabezado">
                    <span className="nombre">{categoria.nombre}</span>
                    <span className="valor">{categoria.valor} MMboe</span>
                  </div>
                  <div className="pista">
                    <div className={'relleno ' + categoria.clase} style={{ width: categoria.ancho + '%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <table className="tabla-datos" style={{ minWidth: '0' }}>
              <caption>Indicadores de reservas</caption>
              <tbody>
                {RESERVAS.indicadores.map((indicador) => (
                  <tr key={indicador.etiqueta}>
                    <td>{indicador.etiqueta}</td>
                    <td>{indicador.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ marginTop: '24px' }}>
              <a className="link-mas" href="/assets/docs/Andes_Petrolera_Informe_de_Reservas_2025.pdf">
                Informe de reservas 2025 (PDF)
              </a>
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
