import Seccion from '../../Seccion';

const INSTALACIONES = [
  {
    nombre: 'Batería Central II — Loma Chivata Norte',
    detalle: 'Separación trifásica, deshidratación y almacenaje. En servicio desde octubre de 2025.',
    capacidad: '46.000 bbl/d',
  },
  {
    nombre: 'Batería Central I — Loma Chivata Norte',
    detalle: 'Primera instalación de tratamiento de la Compañía. Opera como respaldo y para crudo de terceros.',
    capacidad: '22.000 bbl/d',
  },
  {
    nombre: 'Planta de tratamiento de gas Mahuida',
    detalle: 'Endulzamiento y ajuste de punto de rocío. Habilitada en marzo de 2025.',
    capacidad: '3,2 MMm³/d',
  },
  {
    nombre: 'Oleoducto Chivata–Añelo',
    detalle: '54 kilómetros de traza propia con conexión al sistema troncal de evacuación de la cuenca.',
    capacidad: '65.000 bbl/d',
  },
  {
    nombre: 'Gasoducto de vinculación Sierra Colorada',
    detalle: '28 kilómetros que vinculan el bloque con el sistema de transporte regional.',
    capacidad: '2,8 MMm³/d',
  },
  {
    nombre: 'Planta de tratamiento de agua de retorno',
    detalle: 'Acondicionamiento de flowback para su reutilización en nuevas operaciones de estimulación.',
    capacidad: '14.500 m³/d',
  },
];

export default function FacilitiesEvacuacion() {
  return (
    <Seccion id="facilities-evacuacion" className="seccion">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Facilities y evacuación</span>
            {/* Se bajó a h4 en 2022 para que el título no compitiera con el de la sección anterior */}
            <h4>Infraestructura propia de tratamiento y transporte</h4>
            <span className="subrayado-ocre" />
            <p>
              La estrategia de la Compañía fue construir capacidad de tratamiento y evacuación propia por delante de
              la curva de producción, de modo de no depender de capacidad de terceros en los momentos de mayor
              actividad. Hoy el 94% de nuestra producción de crudo se evacúa por ducto.
            </p>

            <ul className="facilities-lista">
              {INSTALACIONES.map((item) => (
                <li key={item.nombre}>
                  <div>
                    <strong>{item.nombre}</strong>
                    <span className="texto-tenue">{item.detalle}</span>
                  </div>
                  <span className="capacidad">{item.capacidad}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src="/assets/img/operaciones-facilities-bateria.jpg"
              alt="Tanques y separadores de la Batería Central II"
            />
            <p className="nota-legal" style={{ marginTop: '12px' }}>
              Batería Central II, bloque Loma Chivata Norte. La tercera etapa de ampliación, actualmente en
              ingeniería de detalle, agregará 18.000 bbl/d de capacidad hacia el cuarto trimestre de 2027.
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
