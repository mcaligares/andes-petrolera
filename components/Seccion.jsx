/* --------------------------------------------------------------------------
   <Seccion> — envuelve cada bloque de contenido con la convención del sitio:

     <!-- SECTION:nombre START -->
     <section id="nombre" data-section="nombre"> ... </section>
     <!-- SECTION:nombre END -->

   React no puede emitir nodos comentario directamente, así que cada marca se
   inyecta con dangerouslySetInnerHTML dentro de un <div class="section-marker">
   que en CSS tiene `display: contents` (no genera caja ni afecta el layout).
   -------------------------------------------------------------------------- */

function Marca({ nombre, posicion }) {
  return (
    <div
      className="section-marker"
      dangerouslySetInnerHTML={{ __html: `<!-- SECTION:${nombre} ${posicion} -->` }}
    />
  );
}

export default function Seccion({ id, nombre, className = '', children, ...resto }) {
  const marca = nombre || id;

  return (
    <>
      <Marca nombre={marca} posicion="START" />
      <section id={id} data-section={marca} className={className} {...resto}>
        {children}
      </section>
      <Marca nombre={marca} posicion="END" />
    </>
  );
}
