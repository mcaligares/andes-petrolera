import Seccion from '../../Seccion';

const KPIS = [
  { valor: '86,3%', detalle: 'Del agua de retorno se reutiliza en nuevas operaciones de estimulación' },
  { valor: '1,84', detalle: 'Millones de m³ de agua tratada en la planta de flowback durante 2025' },
  { valor: '0,38', detalle: 'm³ de agua dulce consumidos por barril equivalente producido' },
];

export default function GestionAgua() {
  return (
    <Seccion id="gestion-agua" className="seccion agua">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Gestión del agua</span>
            <h2>Un recurso escaso en un territorio árido</h2>
            <span className="subrayado-ocre" />
            <p>
              La Cuenca Neuquina se desarrolla sobre una región de estepa con precipitaciones medias inferiores a los
              200 milímetros anuales. La disponibilidad de agua es, junto con la seguridad, la restricción operativa
              más relevante de nuestra actividad y la tratamos como tal desde el diseño de cada pad.
            </p>
            <p className="texto-tenue">
              La totalidad del agua de retorno de nuestras operaciones de estimulación se recupera y se conduce a la
              planta de tratamiento propia, con capacidad de 14.500 m³ diarios. El agua acondicionada se reutiliza en
              nuevas fracturas; el remanente que no cumple especificación se dispone en pozos sumideros habilitados
              por la autoridad de aplicación provincial. Ninguna de nuestras instalaciones vuelca efluentes a cursos
              de agua superficiales.
            </p>
            <p className="texto-tenue">
              La captación de agua dulce se realiza bajo permiso de la Autoridad Interjurisdiccional de las Cuencas,
              con caudalímetros de registro continuo y reporte mensual. Ninguna de nuestras tomas se ubica en
              subcuencas clasificadas con estrés hídrico alto según la metodología del Aqueduct Water Risk Atlas.
            </p>

            <div className="agua-kpis">
              {KPIS.map((kpi) => (
                <div key={kpi.detalle}>
                  <span className="dato-grande">{kpi.valor}</span>
                  <p>{kpi.detalle}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/assets/img/sustentabilidad-agua-reutilizacion.jpg"
              alt="Piletas de almacenamiento y planta de tratamiento de agua de retorno"
            />
          </div>
        </div>
      </div>
    </Seccion>
  );
}
