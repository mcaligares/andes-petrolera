import Seccion from '../../Seccion';
import { EMISIONES } from '../../../lib/esg';

export default function CambioClimatico() {
  return (
    <Seccion id="cambio-climatico" className="seccion">
      <div className="contenedor">
        <div className="cabecera-seccion">
          <span className="volanta">Cambio climático</span>
          <h2>Intensidad de emisiones</h2>
          <span className="subrayado-ocre" />
        </div>

        <div className="clima-grid">
          <div>
            <p>
              Medimos y reportamos las emisiones de alcance 1 y 2 de todas las instalaciones operadas, con
              verificación externa desde el ejercicio 2023. La reducción acumulada desde la línea de base de 2021 es
              del 31,0%, y se explica principalmente por tres frentes: la eliminación progresiva del venteo
              rutinario, el reemplazo de generación con motogeneradores a gasoil por conexión a red en las locaciones
              de Loma Chivata Norte, y la mejora del factor de recuperación de gas en la Batería Central II.
            </p>
            <p className="texto-tenue">
              Durante 2025 las emisiones absolutas de alcance 1 y 2 alcanzaron 372.100 tCO2e, un 2,4% por encima de
              2024 en términos absolutos, en un contexto de crecimiento de la producción del 17,4%. Las emisiones de
              metano representaron el 18,6% del total en términos de CO2 equivalente. Desde 2024 realizamos campañas
              trimestrales de detección de emisiones fugitivas con cámara de imagen óptica de gases sobre el 100% de
              las instalaciones de superficie.
            </p>
            <p className="texto-tenue">
              La Compañía no ha asumido a la fecha un compromiso de neutralidad de carbono. Consideramos que fijar
              una meta de ese alcance requiere certezas sobre la disponibilidad de infraestructura de captura y sobre
              el marco regulatorio que aún no están dadas, y preferimos comprometer objetivos que podamos sostener
              con el plan de inversiones vigente.
            </p>
          </div>

          <div>
            <p className="volanta">kgCO2e por boe — alcance 1 y 2</p>
            <div className="grafico-emisiones">
              {EMISIONES.map((punto) => (
                <div className={punto.meta ? 'barra-anio meta' : 'barra-anio'} key={punto.anio}>
                  <span className="cifra">{String(punto.valor).replace('.', ',')}</span>
                  <div className="columna" style={{ height: punto.altura + '%' }} />
                  <span className="anio">{punto.anio}</span>
                </div>
              ))}
            </div>
            <p className="nota-legal" style={{ marginTop: '16px' }}>
              La columna correspondiente a 2030 representa la meta comprometida, no un valor observado. Alcance 1:
              emisiones directas de las instalaciones operadas. Alcance 2: emisiones indirectas por consumo de
              energía eléctrica adquirida, método basado en el mercado.
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
