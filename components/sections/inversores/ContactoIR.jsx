import Seccion from '../../Seccion';

export default function ContactoIR() {
  return (
    <Seccion id="contacto-ir" className="seccion contacto-ir">
      <div className="contenedor">
        <div className="grid grid-2">
          <div>
            <span className="volanta">Contacto</span>
            <h2>Relaciones con Inversores</h2>
            <span className="subrayado-ocre" />
            <p>
              El equipo de Relaciones con Inversores atiende consultas de analistas, inversores institucionales y
              accionistas minoritarios. Las consultas vinculadas a la tenencia de acciones o al pago de dividendos
              deben dirigirse al agente de registro.
            </p>

            <div className="dato-contacto">
              <span>Responsable</span>
              <strong>Federico Arriaga</strong>
              Director de Relaciones con Inversores
            </div>

            <div className="dato-contacto">
              <span>Correo electrónico</span>
              <strong>
                <a href="mailto:ir@andespetrolera.com.ar">ir@andespetrolera.com.ar</a>
              </strong>
            </div>

            <div className="dato-contacto">
              <span>Teléfono</span>
              <strong>
                <a href="tel:+541143187412">+54 11 4318-7412</a>
              </strong>
            </div>

            <div className="dato-contacto">
              <span>Dirección</span>
              <strong>Av. Leandro N. Alem 855, Piso 12</strong>
              C1001AAD — Ciudad Autónoma de Buenos Aires, Argentina
            </div>
          </div>

          <div>
            <h3>Alertas para inversores</h3>
            <p>
              Recibí por correo electrónico los avisos de publicación de resultados, hechos relevantes y eventos del
              calendario financiero.
            </p>

            <form className="form-alertas" action="/inversores/alertas" method="post">
              <input type="text" name="nombre" placeholder="Nombre y apellido" />
              <input type="email" name="email" placeholder="Correo electrónico" required />
              <input type="text" name="organizacion" placeholder="Organización (opcional)" />

              <label>
                <input type="checkbox" name="consentimiento" value="si" />
                Autorizo el tratamiento de mis datos personales conforme a la Política de Privacidad y a la Ley
                25.326 de Protección de Datos Personales.
              </label>

              <button type="submit" className="boton boton-primario">
                Suscribirme
              </button>
            </form>

            <p className="nota-legal" style={{ marginTop: '24px', color: 'rgba(255,255,255,0.4)' }}>
              Podés darte de baja en cualquier momento desde el enlace incluido al pie de cada envío.
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
