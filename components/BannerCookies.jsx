/* --------------------------------------------------------------------------
   Banner de consentimiento de cookies (Legales, 2023).
   Arranca oculto con [hidden]; /js/andes-ui.js lo muestra si no hay decisión
   previa guardada en localStorage.
   -------------------------------------------------------------------------- */

export default function BannerCookies() {
  return (
    <div className="banner-cookies" data-banner-cookies hidden>
      <div className="contenedor">
        <p>
          Utilizamos cookies propias y de terceros para el funcionamiento del sitio, analizar el tráfico y mejorar
          nuestros contenidos institucionales. Podés aceptarlas todas o continuar únicamente con las esenciales.
          Más información en nuestra <a href="/legales/cookies">Política de cookies</a>.
        </p>

        <div className="acciones-cookies">
          <a className="link-cookies-config" href="/legales/cookies">Configurar</a>
          <button type="button" className="boton boton-secundario" data-cookies-rechazar>
            Solo esenciales
          </button>
          <button type="button" className="boton boton-primario" data-cookies-aceptar>
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
