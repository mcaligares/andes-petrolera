import Seccion from '../../Seccion';

const RESUMEN = [
  { valor: '78.412', unidad: 'boe/d', detalle: 'Producción media del 2T 2026' },
  { valor: '241', unidad: 'pozos', detalle: 'Pozos horizontales en producción' },
  { valor: '684', unidad: 'km²', detalle: 'Superficie neta bajo concesión' },
  { valor: '87%', unidad: '', detalle: 'De la producción bajo operación propia' },
];

export default function ResumenOperativo() {
  return (
    <Seccion id="operaciones-resumen" className="seccion-compacta op-resumen">
      <div className="contenedor">
        <div className="op-resumen-grid">
          {RESUMEN.map((item) => (
            <div className="op-resumen-item" key={item.detalle}>
              <span className="dato-grande">{item.valor}</span>
              {item.unidad && <span className="unidad"> {item.unidad}</span>}
              <p>{item.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </Seccion>
  );
}
