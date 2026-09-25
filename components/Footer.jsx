import Logo from './Logo';
import { EMPRESA } from '../lib/datos';

/* --------------------------------------------------------------------------
   Pie institucional — idéntico en las cuatro páginas.
   -------------------------------------------------------------------------- */

const COLUMNAS = [
  {
    titulo: 'La Compañía',
    enlaces: [
      { texto: 'Perfil corporativo', href: '/#quienes-somos' },
      { texto: 'Nuestra historia', href: '/#nuestra-historia' },
      { texto: 'Misión, visión y valores', href: '/#mision-vision-valores' },
      { texto: 'Cifras clave', href: '/#cifras-clave' },
      { texto: 'Oficinas', href: '/#contacto-oficinas' },
    ],
  },
  {
    titulo: 'Inversores',
    enlaces: [
      { texto: 'Resultados 2T 2026', href: '/inversores#resultados-trimestrales' },
      { texto: 'Reservas', href: '/inversores#reservas' },
      { texto: 'Reportes y presentaciones', href: '/inversores#reportes-descargables' },
      { texto: 'Gobierno corporativo', href: '/inversores#gobierno-corporativo' },
      { texto: 'Calendario financiero', href: '/inversores#calendario-eventos' },
      { texto: 'Contacto IR', href: '/inversores#contacto-ir' },
    ],
  },
  {
    titulo: 'Operaciones',
    enlaces: [
      { texto: 'Nuestros bloques', href: '/operaciones#bloques-detalle' },
      { texto: 'Perforación y terminación', href: '/operaciones#perforacion-terminacion' },
      { texto: 'Facilities y evacuación', href: '/operaciones#facilities-evacuacion' },
      { texto: 'Exploración', href: '/operaciones#exploracion' },
      { texto: 'Proveedores', href: '/operaciones#proveedores' },
    ],
  },
  {
    titulo: 'Sustentabilidad',
    enlaces: [
      { texto: 'Metas ESG', href: '/sustentabilidad#metas-esg' },
      { texto: 'Cambio climático', href: '/sustentabilidad#cambio-climatico' },
      { texto: 'Gestión del agua', href: '/sustentabilidad#gestion-agua' },
      { texto: 'Comunidades', href: '/sustentabilidad#comunidades-programas' },
      { texto: 'Ética y cumplimiento', href: '/sustentabilidad#etica-cumplimiento' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div className="pie-logo">
            <Logo variante="claro" />
            <p className="pie-direccion">
              Av. Leandro N. Alem 855, Piso 12
              <br />
              C1001AAD — Ciudad Autónoma de Buenos Aires
              <br />
              Argentina
              <br />
              <a href="tel:+541143187400">+54 11 4318-7400</a>
            </p>

            <div className="pie-redes">
              <a href="https://www.linkedin.com/company/andes-petrolera" aria-label="Andes Petrolera en LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21H9z" />
                </svg>
              </a>
              <a href="https://x.com/andespetrolera" aria-label="Andes Petrolera en X">
                <svg viewBox="0 0 24 24">
                  <path d="M17.3 3h3.3l-7.2 8.24L21.8 21h-6.4l-4.6-6.02L5.5 21H2.2l7.7-8.8L2.4 3h6.56l4.16 5.5zm-1.15 16h1.83L7.94 4.9H5.98z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@andespetrolera" aria-label="Andes Petrolera en YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M21.6 7.2s-.2-1.4-.8-2c-.75-.8-1.6-.8-2-.85C16 4.2 12 4.2 12 4.2h-.02s-4 0-6.8.2c-.4.05-1.25.05-2 .85-.6.6-.8 2-.8 2S2.2 8.85 2.2 10.5v1.54c0 1.65.2 3.3.2 3.3s.2 1.4.8 2c.75.8 1.74.78 2.2.86 1.6.15 6.8.2 6.8.2s4 0 6.8-.21c.4-.05 1.25-.05 2-.85.6-.6.8-2 .8-2s.2-1.65.2-3.3V10.5c0-1.65-.2-3.3-.2-3.3zM9.9 14.2V8.6l5.35 2.82z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/andespetrolera" aria-label="Andes Petrolera en Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.72a6.12 6.12 0 100 12.24 6.12 6.12 0 000-12.24zm0 10.1a3.98 3.98 0 110-7.96 3.98 3.98 0 010 7.96zm7.79-10.34a1.43 1.43 0 11-2.86 0 1.43 1.43 0 012.86 0z" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNAS.map((columna) => (
            <div key={columna.titulo}>
              <h4>{columna.titulo}</h4>
              <ul>
                {columna.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    <a href={enlace.href}>{enlace.texto}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4>Línea Ética</h4>
            <div className="pie-linea-etica">
              <strong>Canal de denuncias</strong>
              Gestionado por un tercero independiente. Admite reportes anónimos, 24 horas, los 365 días.
              <br />
              <br />
              <a href="tel:08003451187">0800-345-1187</a>
              <br />
              <a href="mailto:lineaetica@andespetrolera.com.ar">lineaetica@andespetrolera.com.ar</a>
              <br />
              <a href="/sustentabilidad#etica-cumplimiento">Formulario web</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pie-legal">
        <div className="contenedor">
          <p className="pie-razon-social">
            © {EMPRESA.anio} {EMPRESA.razonSocial} — Todos los derechos reservados.
            <br />
            CUIT {EMPRESA.cuit} · {EMPRESA.igj} · Domicilio legal: {EMPRESA.domicilioLegal}
          </p>

          <div className="pie-legal-links">
            <a href="/legales/terminos">Términos y condiciones</a>
            <a href="/legales/privacidad">Política de privacidad</a>
            <a href="/legales/cookies">Política de cookies</a>
            <a href="/legales/accesibilidad">Accesibilidad</a>
            <a href="/mapa-del-sitio">Mapa del sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
