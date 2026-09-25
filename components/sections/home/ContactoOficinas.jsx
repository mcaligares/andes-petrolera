import Seccion from '../../Seccion';
import { OFICINAS } from '../../../lib/datos';

export default function ContactoOficinas() {
  return (
    <Seccion id="contacto-oficinas" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Contacto</span>
          <h2>Nuestras oficinas</h2>
          <span className="subrayado-ocre" />
          <p className="bajada">
            Consultas generales, prensa, proveedores e inversores. Para reportes al canal de denuncias, utilizá la
            Línea Ética.
          </p>
        </div>

        <div className="oficinas-grid">
          {OFICINAS.map((oficina) => (
            <div className="oficina" key={oficina.ciudad}>
              <img src={oficina.imagen} alt={oficina.alt} />
              <span className="etiqueta">{oficina.tipo}</span>
              <h4 style={{ marginTop: '12px' }}>{oficina.ciudad}</h4>
              <address>
                {oficina.direccion.map((linea) => (
                  <span key={linea}>
                    {linea}
                    <br />
                  </span>
                ))}
                <a href={`tel:${oficina.telefono.replace(/[^+\d]/g, '')}`}>{oficina.telefono}</a>
                <br />
                <a href={`mailto:${oficina.email}`}>{oficina.email}</a>
              </address>
            </div>
          ))}
        </div>

        <div className="mapa-oficinas">
          <div className="mapa-oficinas-fallback">
            Mapa interactivo de oficinas.
            <br />
            Requiere aceptar las cookies de terceros para visualizarse.
          </div>
        </div>

        <p style={{ marginTop: '28px' }}>
          <a className="link-mas" href="mailto:contacto@andespetrolera.com.ar">
            Escribinos
          </a>
          <span style={{ display: 'inline-block', width: '24px' }} />
          <a className="link-mas-tenue" href="/sustentabilidad#etica-cumplimiento">
            Línea Ética / canal de denuncias
          </a>
        </p>
      </div>
    </Seccion>
  );
}
