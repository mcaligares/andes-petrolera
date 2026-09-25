import Seccion from '../../Seccion';
import { COTIZACION } from '../../../lib/datos';

export default function CotizacionAccion() {
  const { byma, nyse } = COTIZACION;

  return (
    <Seccion id="cotizacion-accion" className="seccion-compacta cotizacion-panel">
      <div className="contenedor">
        <div className="cotizacion-grid">
          <div className="cotizacion-item">
            <span className="mercado">BYMA · Acciones ordinarias Clase B</span>
            <span className="precio">ARS {byma.precio}</span>
            <span className={byma.sube ? 'var-dia sube' : 'var-dia baja'}>{byma.variacion}</span>
            <p className="detalle">Volumen: {byma.volumen} acciones · Símbolo: {byma.simbolo}</p>
          </div>

          <div className="cotizacion-item">
            <span className="mercado">NYSE · American Depositary Receipts</span>
            <span className="precio">USD {nyse.precio}</span>
            <span className={nyse.sube ? 'var-dia sube' : 'var-dia baja'}>{nyse.variacion}</span>
            <p className="detalle">Volumen: {nyse.volumen} ADRs · {COTIZACION.ratioAdr}</p>
          </div>

          <div className="cotizacion-item">
            <span className="mercado">Capitalización bursátil</span>
            <span className="precio">{COTIZACION.marketCap}</span>
            <p className="detalle">Acciones en circulación: {COTIZACION.acciones}</p>
          </div>

          <div className="cotizacion-item">
            <span className="mercado">Cierre</span>
            <span className="precio">{COTIZACION.fecha}</span>
            <p className="detalle">Última actualización: {COTIZACION.hora}</p>
          </div>
        </div>

        <p className="cotizacion-aviso">
          Los precios se muestran con una demora de al menos veinte minutos y se publican únicamente a título
          informativo. Andes Petrolera S.A. no garantiza su exactitud ni actualización, y no deben ser utilizados
          como base para decisiones de inversión.
        </p>
      </div>
    </Seccion>
  );
}
