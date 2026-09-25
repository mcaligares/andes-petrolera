import Seccion from '../../Seccion';

export default function Exploracion() {
  return (
    <Seccion id="exploracion" className="seccion seccion-arena">
      <div className="contenedor">
        <div className="grid grid-60-40">
          <div>
            <span className="volanta">Exploración</span>
            <h2>Una agenda exploratoria acotada y financiada con caja propia</h2>
            <span className="subrayado-ocre" />
            <p>
              La Compañía destina entre el 4% y el 6% de su presupuesto anual de inversiones a actividad
              exploratoria. El criterio es deliberadamente conservador: sólo avanzamos sobre áreas contiguas a
              nuestras operaciones, donde podemos aprovechar la infraestructura y el conocimiento geológico
              existente.
            </p>
            <p className="texto-tenue">
              Durante 2025 se adquirieron 214 km² de sísmica 3D sobre el sector sur del bloque Puesto Aguada Sur, en
              sociedad con el operador. El procesamiento se completó en marzo de 2026 y la interpretación permitió
              identificar dos objetivos en la ventana de petróleo negro. El primer pozo exploratorio horizontal,
              PAS.x-2, está previsto para el primer trimestre de 2027 con un costo estimado de USD 14,6 millones a
              participación de la Compañía.
            </p>
            <p className="texto-tenue">
              En paralelo, el equipo de geociencias mantiene un programa de reevaluación de secciones no
              estimuladas en pozos existentes de Cañadón Mahuida, con dos recompletaciones ejecutadas en 2026 que
              aportaron 1.340 boe/d incrementales.
            </p>
          </div>

          <div>
            <img
              src="/assets/img/operaciones-exploracion-sismica.jpg"
              alt="Tareas de adquisición sísmica en el campo"
            />
          </div>
        </div>
      </div>
    </Seccion>
  );
}
