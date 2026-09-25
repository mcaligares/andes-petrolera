import Seccion from '../../Seccion';

const VALORES = [
  {
    titulo: 'La seguridad no se negocia',
    texto:
      'Cualquier persona, propia o contratista, puede detener una tarea cuando identifica una condición insegura. Esa facultad está escrita en el procedimiento y se ejerce sin consecuencias.',
  },
  {
    titulo: 'Rigor técnico',
    texto:
      'Las decisiones de desarrollo se toman sobre datos de nuestros propios pozos. Cada diseño de completación se revisa contra los resultados de producción de los seis meses anteriores.',
  },
  {
    titulo: 'Palabra cumplida',
    texto:
      'Lo que comprometemos ante el mercado, ante una comunidad o ante un proveedor se cumple en el plazo acordado, o se comunica el desvío antes de que ocurra.',
  },
  {
    titulo: 'Cuidado del entorno',
    texto:
      'Operamos en un territorio con recursos hídricos escasos y usos productivos preexistentes. Reducir la huella de cada locación es una condición de diseño, no una tarea posterior.',
  },
  {
    titulo: 'Equipos que se escuchan',
    texto:
      'La operación integra geología, perforación, producción y HSE en una misma mesa de decisión semanal. Nadie ejecuta un plan que no pudo discutir.',
  },
];

export default function MisionVisionValores() {
  return (
    <Seccion id="mision-vision-valores" className="seccion">
      <div className="contenedor">
        <div className="mision-vision">
          <div>
            <span className="volanta">Misión</span>
            <blockquote>
              Desarrollar los recursos no convencionales que administramos con seguridad, disciplina de capital y
              respeto por el entorno, generando valor sostenido para nuestros accionistas y para las provincias y
              comunidades donde operamos.
            </blockquote>
          </div>

          <div>
            <span className="volanta">Visión</span>
            <blockquote>
              Ser reconocidos como el operador independiente más eficiente y confiable de la Cuenca Neuquina, medido
              por la calidad de nuestras operaciones, la solidez de nuestros números y la consistencia de nuestra
              conducta.
            </blockquote>
          </div>
        </div>

        <div className="cabecera-seccion">
          <h2>Nuestros valores</h2>
          <span className="subrayado-ocre" />
        </div>

        <div className="grid grid-5 valores-grid">
          {VALORES.map((valor) => (
            <div className="valor" key={valor.titulo}>
              <h4>{valor.titulo}</h4>
              <p>{valor.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </Seccion>
  );
}
