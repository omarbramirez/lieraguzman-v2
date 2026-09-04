import React, { useState } from "react";
import Poem01 from "../assets/images/texts/ofidias001.jpg";
import Poem02 from "../assets/images/texts/ofidias002.jpg";
import Poem03 from "../assets/images/texts/ofidias003.jpg";
import Poem04 from "../assets/images/texts/ofidias004.jpg";
import Poem05 from "../assets/images/texts/ofidias005.jpg";
import Poem06 from "../assets/images/texts/translation001.png";
import Poem07 from "../assets/images/texts/translation002.png";
import Poem08 from "../assets/images/texts/translation003.png";
import Poem09 from "../assets/images/texts/translation004.png";
import Poem10 from "../assets/images/texts/translation005.png";
import Illus01 from "../assets/images/illustrations/illustration001.jpg";
import Illus03 from "../assets/images/illustrations/illustration003.jpg";
import Video from "../assets/video.mp4";

interface ViewerData {
  img: string;
  i: number;
  list: string[];
}

const Ofidias: React.FC = () => {
  const poems: string[]   = [Poem01, Poem02, Poem03, Poem04, Poem05];
  const poems002: string[] = [Poem06, Poem07, Poem08, Poem09, Poem10];
  const illustrations: string[] = [Illus01, Illus03];

  const [viewer, setViewer] = useState<ViewerData | null>(null);

  const openViewer = (img: string, i: number, list: string[]) =>
    setViewer({ img, i, list });

  const navigate = (direction: "prev" | "next") => {
    if (!viewer) return;
    const nextIdx = direction === "next" ? viewer.i + 1 : viewer.i - 1;
    if (viewer.list[nextIdx] !== undefined) {
      setViewer({ img: viewer.list[nextIdx], i: nextIdx, list: viewer.list });
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
          aria-label="Visor de imagen"
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
            aria-label="Imagen anterior"
            disabled={viewer.i === 0}
          >
            ←
          </button>
          <img
            className="lightbox__img"
            src={viewer.img}
            alt={`Vista ampliada de imagen ${viewer.i + 1}`}
          />
          <button
            className="lightbox__next button-link button-link--borderless"
            onClick={() => navigate("next")}
            aria-label="Imagen siguiente"
            disabled={viewer.i === viewer.list.length - 1}
          >
            →
          </button>
        </div>
      )}

      <section className="page-intro" aria-label="Ofidias – introducción">
        <h1 className="title-massive page-intro__title">Ofidias</h1>
      </section>

      {/* Sobre el libro */}
      <article className="vanguard-grid" aria-label="Sobre el libro Ofidias">
        <div
          id="book_002"
          className="img-placeholder img-placeholder--3-4 img-placeholder--bg vanguard-item-img-left"
          role="img"
          aria-label="Portada de Ofidias"
        />
        <div className="vanguard-item-txt-right">
          <span className="bg-number" aria-hidden="true">01</span>
          <h2 className="title-massive title-massive--4xl">Sobre el libro</h2>
          <blockquote className="review-text body-muted--mb2">
            "Pocos libros son reptiles. Todo libro de poemas, necesariamente, nace de un
            huevo del tamaño de un puño, medida de la angustia, pero no todos tienen la
            particularidad de ser una serpiente que muda su dermis en menos de cien páginas.
            Pocos muestran la gota de un veneno atávico en la punta de sus colmillos… Tal es
            el caso de Ofidias, de Valeria Guzmán Pérez, libro ganador del Premio Nacional de
            Poesía Tijuana 2019."
            <br /><br />
            <span className="quote-author">— Francisco Trejo</span>
          </blockquote>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.amazon.com.mx/dp/B09ZC2PVJT/ref=cm_sw_em_r_mt_dp_3ST22GKW93TE65AT8ACX"
            className="button-link"
            aria-label="Comprar Ofidias en Amazon (abre en nueva pestaña)"
          >
            Comprar en Amazon →
          </a>
        </div>
      </article>

      {/* Selección de Poemas */}
      <section aria-label="Selección de poemas">
        <h2 className="title-massive section-heading">SELECCIÓN DE POEMAS</h2>
        <ul className="poems-grid" role="list">
          {poems.map((poem, i) => (
            <li key={poem} className="poems-grid__item">
              <img
                className="poem-img"
                src={poem}
                alt={`Poema ${i + 1} de Ofidias`}
                onClick={() => openViewer(poem, i, poems)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openViewer(poem, i, poems); }}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Tríptico de Gatas */}
      <section aria-label="Tríptico de Gatas – Traducciones">
        <h2 className="title-massive section-heading">TRÍPTICO DE GATAS (TRADUCCIONES)</h2>
        <ul className="poems-grid" role="list">
          {poems002.map((poem, i) => (
            <li key={poem} className="poems-grid__item">
              <img
                className="poem-img"
                src={poem}
                alt={`Traducción ${i + 1}`}
                onClick={() => openViewer(poem, i, poems002)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openViewer(poem, i, poems002); }}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Ilustraciones */}
      <section aria-label="Ilustraciones">
        <h2 className="title-massive section-heading">ILUSTRACIONES</h2>
        <ul className="illus-grid" role="list">
          {illustrations.map((illus, i) => (
            <li key={illus} className="illus-grid__item">
              <img
                className="poem-img"
                src={illus}
                alt={`Ilustración ${i + 1} de Ofidias`}
                onClick={() => openViewer(illus, i, illustrations)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openViewer(illus, i, illustrations); }}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Video */}
      <div className="video-wrapper">
        <video
          className="video-player"
          controls
          autoPlay
          muted
          aria-label="Video presentación de Ofidias"
        >
          <source src={Video} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

    </main>
  );
};

export default Ofidias;