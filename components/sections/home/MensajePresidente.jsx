import Seccion from '../../Seccion';

export default function MensajePresidente() {
  return (
    <Seccion id="mensaje-presidente" className="seccion mensaje-presidente">
      <div className="contenedor">
        <div className="grid grid-40-60">
          <div>
            <img
              src="/assets/img/home-presidente-retrato.jpg"
              alt="Retrato de Eduardo M. Bassani, Presidente del Directorio"
            />
          </div>

          <div>
            <span className="volanta">Mensaje del Presidente</span>
            <h2>Sobre el ejercicio 2025 y lo que viene</h2>
            <span className="subrayado-ocre" />

            <div className="texto-largo">
              <p>
                El ejercicio cerrado el 31 de diciembre de 2025 fue el primero en el que la Compañía financió la
                totalidad de su plan de inversiones con generación de caja operativa, sin recurrir a aportes de
                capital. No es un dato menor para una empresa de nuestra edad: significa que el ciclo que iniciamos
                en 2017 con un solo bloque y un equipo de veintitrés personas alcanzó una escala que se sostiene a sí
                misma. La producción media anual fue de 69.634 boe/d, un 18,6% por encima de 2024, y el EBITDA
                ajustado del ejercicio ascendió a USD 894,1 millones.
              </p>

              <p>
                Quiero detenerme, sin embargo, en algo que no aparece en los estados contables. En febrero de 2025
                tuvimos un incidente con pérdida de días en la locación SCO-07. Nadie sufrió lesiones permanentes,
                pero la investigación mostró que un procedimiento de bloqueo de energía había sido aplicado de manera
                incompleta bajo presión de cronograma. Revisamos el programa completo de intervención de pozos,
                extendimos la capacitación a las tres contratistas involucradas y modificamos el esquema de
                incentivos de la supervisión de campo, que hasta entonces ponderaba los días de ejecución por encima
                de las verificaciones de seguridad. El índice de frecuencia total registrable cerró 2025 en 0,48 y en
                lo que va de 2026 se ubica en 0,42, pero el aprendizaje que nos dejó ese episodio vale más que el
                indicador.
              </p>

              <p>
                De cara a 2027 mantenemos el plan de perforación en el rango de 44 a 48 pozos anuales y avanzamos con
                la ingeniería de la tercera etapa de la Batería Central II, que agregará 18.000 bbl/d de capacidad de
                tratamiento hacia el cuarto trimestre de 2027. Seguimos trabajando para reducir la intensidad de
                emisiones, que bajó de 21,3 a 14,7 kgCO2e/boe desde nuestra línea de base de 2021, con la meta de
                alcanzar 9,5 kgCO2e/boe en 2030. Son objetivos exigentes y los asumimos públicamente porque creemos
                que una compañía que cotiza en dos mercados debe ser medida por lo que promete.
              </p>

              <p>
                Agradezco la confianza de nuestros accionistas, el acompañamiento de las autoridades provinciales y
                municipales, y muy especialmente el trabajo de las personas que cada día sostienen esta operación en
                el campo.
              </p>
            </div>

            <p className="firma">Eduardo M. Bassani</p>
            <p className="cargo">Presidente del Directorio</p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
