import Logo from './Logo';
import { NAVEGACION, COTIZACION } from '../lib/datos';

/* --------------------------------------------------------------------------
   Cabecera institucional — idéntica en las cuatro páginas.
   Compuesta por: barra superior (cotización, accesos rápidos, selector de
   idioma), barra principal (logo + navegación de 8 ítems con megamenús) y
   panel de navegación móvil.
   -------------------------------------------------------------------------- */

function EnlaceMegamenu({ enlace }) {
  return (
    <li>
      <a href={enlace.href}>{enlace.texto}</a>
      {enlace.hijos && (
        <ul className="submenu-n2">
          {enlace.hijos.map((hijo) => (
            <li key={hijo.texto + hijo.href}>
              <a href={hijo.href}>{hijo.texto}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const { byma, nyse } = COTIZACION;

  return (
    <header className="cabecera">
      {/* ---------------------------------------------------- barra superior */}
      <div className="topbar">
        <div className="contenedor">
          <div className="cotizacion-mini">
            <span className="cotiz-mercado">
              <b className="ticker">BYMA: ANDP</b>
              <span className="valor">ARS {byma.precio}</span>
              <em className={byma.sube ? 'sube' : 'baja'}>{byma.variacion}</em>
            </span>
            <span className="cotiz-mercado">
              <b className="ticker">NYSE: ANDP</b>
              <span className="valor">USD {nyse.precio}</span>
              <em className={nyse.sube ? 'sube' : 'baja'}>{nyse.variacion}</em>
            </span>
            <span className="sello-demora">Cotización demorada · {COTIZACION.fecha}</span>
          </div>

          <a href="/#contacto-oficinas">Contacto</a>
          <a href="/sustentabilidad#etica-cumplimiento">Línea Ética</a>
          <a href="/operaciones#proveedores">Proveedores</a>

          <span className="topbar-sep" />

          <div className="selector-idioma">
            <a href="/" className="activo" lang="es">ES</a>
            <a href="/en/" lang="en">EN</a>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------- barra principal */}
      <div className="barra-principal">
        <div className="contenedor">
          <a href="/" className="logo">
            <Logo />
          </a>

          <nav className="nav-principal" id="navegacion-principal">
            <ul>
              {NAVEGACION.map((item) => (
                <li key={item.titulo}>
                  <span className="nav-item-titulo">
                    {item.titulo}
                    <i className="flecha" />
                  </span>

                  <div className={item.ancho ? 'megamenu megamenu-ancho' : 'megamenu'}>
                    <div className="megamenu-columnas">
                      {item.columnas.map((columna) => (
                        <div className="megamenu-col" key={columna.titulo}>
                          <h5>{columna.titulo}</h5>
                          <ul>
                            {columna.enlaces.map((enlace) => (
                              <EnlaceMegamenu enlace={enlace} key={enlace.texto + enlace.href} />
                            ))}
                          </ul>
                        </div>
                      ))}

                      {item.destacado && (
                        <div className="megamenu-destacado">
                          <h5>{item.destacado.titulo}</h5>
                          <p>{item.destacado.texto}</p>
                          <a className="link-mas" href={item.destacado.enlace.href}>
                            {item.destacado.enlace.texto}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="acciones-header">
            <button type="button" className="boton-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4.2-4.2" />
              </svg>
            </button>
            <button type="button" className="boton-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18" />
              </svg>
            </button>
          </div>

          <button type="button" className="boton-hamburguesa" data-abrir-menu-movil>
            <i />
            <i />
            <i />
          </button>
        </div>

        {/* ------------------------------------------------ navegación móvil */}
        <div className="nav-movil" data-menu-movil>
          <ul>
            {NAVEGACION.map((item) => (
              <li key={'movil-' + item.titulo}>
                <div className="movil-titulo">
                  {item.titulo}
                  <span aria-hidden="true">+</span>
                </div>
                <div className="movil-sub">
                  {item.columnas.map((columna) => (
                    <div key={'movil-col-' + columna.titulo}>
                      <p className="movil-sub-titulo">{columna.titulo}</p>
                      {columna.enlaces.map((enlace) => (
                        <div key={'movil-' + enlace.texto + enlace.href}>
                          <a href={enlace.href}>{enlace.texto}</a>
                          {enlace.hijos && (
                            <ul className="submenu-n2">
                              {enlace.hijos.map((hijo) => (
                                <li key={'movil-h-' + hijo.texto + hijo.href}>
                                  <a href={hijo.href}>{hijo.texto}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </li>
            ))}
            <li>
              <div className="movil-titulo">
                <a href="/en/" lang="en">English version</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
