"use client";

import { useState } from "react";

const filters = [
  { id: "all", label: "Todos", title: "Todo empieza con un tomo.", description: "Tus mangas aparecerán aquí, ordenados por autor. Una estantería para lo que te gusta, incluso lo más extraño." },
  { id: "reading", label: "Leyendo", title: "Ninguna historia a medias.", description: "Aquí encontrarás los mangas que hayas empezado a leer y el tomo por el que vas." },
  { id: "missing", label: "Incompletos", title: "Las piezas que faltan.", description: "Aquí verás las ediciones a las que les falten tomos para completar tu colección." },
] as const;

export function CollectionPreview() {
  const [selected, setSelected] = useState<(typeof filters)[number]["id"]>("all");
  const current = filters.find((filter) => filter.id === selected)!;

  return (
    <section className="collection-section" aria-labelledby="collection-title">
      <div className="collection-heading">
        <div><p className="section-kicker">01 / LA COLECCIÓN</p><h2 id="collection-title" tabIndex={-1}>En la estantería<span className="red-period">.</span></h2></div>
        <span className="count-stamp" aria-label="0 mangas">00</span>
      </div>
      <div className="collection-toolbar">
        <div className="filter-group" role="group" aria-label="Filtrar colección">
          {filters.map((filter) => (
            <button key={filter.id} type="button" aria-pressed={selected === filter.id} onClick={() => setSelected(filter.id)}>{filter.label}</button>
          ))}
        </div>
        <span className="sort-caption">POR AUTOR <span aria-hidden="true">↓</span></span>
      </div>
      <div className="empty-panel" aria-live="polite" aria-atomic="true">
        <div className="empty-panel-art" aria-hidden="true"><span className="book-outline book-one" /><span className="book-outline book-two" /><span className="book-outline book-three" /><span className="empty-panel-cross">+</span></div>
        <div><p className="empty-panel-label">ARCHIVO SIN ENTRADAS</p><h3>{current.title}</h3><p className="empty-description">{current.description}</p></div>
      </div>
      <p className="collection-bottom"><span>El orden es tuyo.</span><span aria-hidden="true">[ A — Z ]</span></p>
    </section>
  );
}
