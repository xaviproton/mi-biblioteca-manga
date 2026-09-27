import Image from "next/image";
import { CollectionPreview } from "@/components/collection-preview";
import { EyeMark } from "@/components/eye-mark";

export default function LibraryPage() {
  return (
    <>
      <header className="masthead">
        <a className="brand" href="#contenido" aria-label="Mi biblioteca, inicio">
          <EyeMark />
          <span>MANGA<span className="brand-caption">ARCHIVO PERSONAL</span></span>
        </a>
        <a className="issue-link" href="#sobre-la-biblioteca" aria-label="Sobre esta primera edición">
          <span>EDICIÓN</span><strong>001</strong>
        </a>
      </header>
      <main id="contenido">
        <section className="cover-story" aria-labelledby="library-title">
          <div className="section-kicker"><span>EL ARCHIVO DE TUS OBSESIONES</span><span aria-hidden="true">↙</span></div>
          <div className="title-composition">
            <h1 id="library-title" aria-label="Mi biblioteca">MI BIBLIO<span>TECA<span className="red-period">.</span></span></h1>
            <span className="vertical-note" aria-hidden="true">ENTRE TINTA Y PAPEL</span>
          </div>
          <div className="cover-panel">
            <Image src="/images/impossible-library.png" alt="Una biblioteca imposible: las estanterías de manga se curvan hacia un ojo en el centro de un remolino." fill sizes="(max-width: 480px) calc(100vw - 40px), 440px" preload className="cover-art" />
            <span className="panel-index" aria-hidden="true">FIG. 01 — EL OTRO LADO</span>
            <span className="panel-caption">Hay historias que<br />no te dejan salir.</span>
          </div>
          <div className="cover-footnote"><span>TUS MANGAS. TU PEQUEÑO UNIVERSO.</span><span className="tiny-cross" aria-hidden="true">✳</span></div>
        </section>
        <div className="archive-strip" aria-label="Organización de la biblioteca">
          <span>COLECCIONAR</span><span aria-hidden="true">✳</span><span>LEER</span><span aria-hidden="true">✳</span><span>VOLVER</span>
        </div>
        <CollectionPreview />
        <section id="sobre-la-biblioteca" className="edition-note" aria-label="Estado de esta edición">
          <details>
            <summary><span className="status-dot" aria-hidden="true" /><span>Una biblioteca en construcción</span><span className="details-plus" aria-hidden="true">+</span></summary>
            <div className="edition-body">
              <p>Este es el primer diseño de tu archivo personal. Todavía no puedes añadir ni guardar mangas.</p>
              <p>Próximamente: búsqueda por título, ediciones, control de tomos y copias de tu colección.</p>
            </div>
          </details>
        </section>
      </main>
      <footer className="archive-footer"><EyeMark /><span>CONTINUARÁ<span aria-hidden="true">...</span></span><span className="footer-number">01 / ∞</span></footer>
    </>
  );
}
