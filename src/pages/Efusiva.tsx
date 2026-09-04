import React, { useState } from "react";
import Poem01 from "../assets/images/texts/efusiva001.jpg";
import Poem02 from "../assets/images/texts/efusiva002.jpg";
import Poem03 from "../assets/images/texts/efusiva003.jpg";
import Poem04 from "../assets/images/texts/efusiva004.jpg";
import Poem05 from "../assets/images/texts/efusiva005.jpg";

interface ViewerData {
  img: string;
  i: number;
}

const Efusiva: React.FC = () => {
  const poems: string[] = [Poem01, Poem02, Poem03, Poem04, Poem05];
  const [viewer, setViewer] = useState<ViewerData | null>(null);

  const openViewer = (img: string, i: number) => setViewer({ img, i });

  const navigate = (direction: "prev" | "next") => {
    if (!viewer) return;
    const nextIdx = direction === "next" ? viewer.i + 1 : viewer.i - 1;
    if (poems[nextIdx] !== undefined) {
      setViewer({ img: poems[nextIdx], i: nextIdx });
    } else {
      setViewer(null);
    }
  };

  return (
    <main className="container" role="main">

      {/* Lightbox */}
      {viewer && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de poema"
        >
          <button
            className="lightbox__close button-link button-link--borderless"
            onClick={() => setViewer(null)}
            aria-label="Cerrar visor"
          >
            ✕
          </button>
          <button
            className="lightbox__prev button-link button-link--borderless"
            onClick={() => navigate("prev")}
            aria-label="Poema anterior"
            disabled={viewer.i === 0}
          >
            ←
          </button>
          <img
            className="lightbox__img"
            src={viewer.img}
            alt={`Poema ${viewer.i + 1} de Efusiva Penitente`}
          />
          <button
            className="lightbox__next button-link button-link--borderless"
            onClick={() => navigate("next")}
            aria-label="Poema siguiente"
            disabled={viewer.i === poems.length - 1}
          >
            →
          </button>
        </div>
      )}

      <section className="page-intro" aria-label="Efusiva Penitente – introducción">
        <h1 className="title-massive page-intro__title">Efusiva Penitente</h1>
      </section>

      {/* Sobre el libro */}
      <article className="vanguard-grid" aria-label="Sobre el libro">
        <div
          id="book_001"
          className="img-placeholder img-placeholder--3-4 img-placeholder--bg vanguard-item-img-left"
          role="img"
          aria-label="Portada de Efusiva Penitente"
        />
        <div className="vanguard-item-txt-right">
          <span className="bg-number" aria-hidden="true">01</span>
          <h2 className="title-massive title-massive--4xl">Sobre el libro</h2>
          <p className="body-muted">
            Fuera de la común mojigatería del campo erótico, la poeta halla un camino para
            tratar con su cuerpo en el diálogo con la poesía mística, ya sea guiada por
            Santa Teresa de Ávila u otro, donde encontrará el simbolismo y ritmo propicios.
            El mito de la salvación cristiana, sin precedente, se cumple en el momento de la
            eucaristía carnal. El yo poético se detiene; dialoga con el otro hasta bendecirlo
            cuando se comparte.
          </p>
          <p className="body-muted body-muted--mb2">
            Para la efusiva penitente, el hombre es mendigo, un mendigo invitado, a la
            múltiple gracia de la feminidad.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/publio.helvio.pertinax/?igshid=YmMyMTA2M2Y%3D"
            className="button-link"
            aria-label="Reseña de Juan C. Valdospinos (abre en nueva pestaña)"
          >
            Juan C. Valdospinos
          </a>
        </div>
      </article>

      {/* Reseñas */}
      <article className="vanguard-grid vanguard-grid--mt" aria-label="Reseñas">
        <div className="vanguard-item-txt-left">
          <span className="bg-number" aria-hidden="true">02</span>
          <h2 className="title-massive title-massive--4xl">Reseñas</h2>

          <blockquote className="review-text">
            "Somos presas de las necesidades de la carne, de su delirio interno que cada vez
            necesita ser saciado… Así encuentro justificativo a Efusiva penitente. Un poemario
            que explora lo erótico desde una particularidad sacrílega."
            <br /><br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/marfuzzine"
              className="button-link button-link--upright"
              aria-label="Twitter de Alexis Cuzme (abre en nueva pestaña)"
            >
              Alexis Cuzme
            </a>
          </blockquote>

          <blockquote className="review-text">
            "El poemario Efusiva penitente me trae la voz de una Sor Juana Inés de la Cruz en
            plena epifanía con el amado, en una levitación profana, como los ojos del Ángel
            caído."
            <br /><br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/juancarlos.morales.5477"
              className="button-link button-link--upright"
              aria-label="Facebook de Juan Carlos Morales (abre en nueva pestaña)"
            >
              Juan Carlos Morales
            </a>
          </blockquote>
        </div>
      </article>

      {/* Poemas */}
      <section aria-label="Ilustración – Traducciones">
        <h2 className="title-massive section-heading">ILUSTRACIÓN (TRADUCCIONES)</h2>
        <ul className="poems-grid" role="list">
          {poems.map((poem, i) => (
            <li key={poem} className="poems-grid__item">
              <img
                className="poem-img"
                src={poem}
                alt={`Poema ${i + 1} de Efusiva Penitente`}
                onClick={() => openViewer(poem, i)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openViewer(poem, i); }}
              />
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
};

export default Efusiva;