import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Img01 from "../assets/images/gallery/maríajosé_jeanjuárez_001.jpg";
import Img02 from "../assets/images/gallery/maríajosé_jeanjuárez_002.jpg";
import Img03 from "../assets/images/gallery/maríajosé_jeanjuárez_003.jpg";
import Img04 from "../assets/images/gallery/maríajosé_jeanjuárez_004.jpg";
import Img05 from "../assets/images/gallery/maríajosé_jeanjuárez_005.jpg";
import Img06 from "../assets/images/gallery/maríajosé_jeanjuárez_006.jpg";
import Img07 from "../assets/images/gallery/maríajosé_jeanjuárez_007.jpg";
import Img08 from "../assets/images/gallery/maríajosé_jeanjuárez_008.jpg";
import Img09 from "../assets/images/gallery/maríajosé_jeanjuárez_009.jpg";
import Img10 from "../assets/images/gallery/juancarlos_moralesmejia_012.jpg";
import Img11 from "../assets/images/gallery/juancarlos_moralesmejia_013.jpg";
import Img12 from "../assets/images/gallery/juancarlos_moralesmejia_014.jpg";
import Img13 from "../assets/images/gallery/juancarlos_moralesmejia_015.jpg";
import Img14 from "../assets/images/gallery/juancarlos_moralesmejia_016.jpg";

interface GalleryData {
  img: string;
  i: number;
}

const Gallery: React.FC = () => {
  const images: string[] = useMemo(
    () => [
      Img01, Img02, Img03, Img04, Img05, Img06, Img07,
      Img08, Img09, Img10, Img11, Img12, Img13, Img14,
    ],
    []
  );

  const [viewer, setViewer] = useState<GalleryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const openViewer = (img: string, i: number): void => {
    setViewer({ img, i });
  };

  const closeViewer = useCallback((): void => {
    setViewer(null);
  }, []);

  const navigate = useCallback(
    (direction: "prev" | "next"): void => {
      setViewer((prev) => {
        if (!prev) return null;
        const nextIdx = direction === "next" ? prev.i + 1 : prev.i - 1;
        if (images[nextIdx] !== undefined) {
          return { img: images[nextIdx], i: nextIdx };
        }
        return null;
      });
    },
    [images]
  );

  // Precarga resiliente de imágenes de la galería
  useEffect(() => {
    const loadImage = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Error al cargar: ${src}`));
      });

    Promise.allSettled(images.map(loadImage)).then((results) => {
      const failed = results.filter(
        (res): res is PromiseRejectedResult => res.status === "rejected"
      );
      if (failed.length > 0) {
        console.warn("Algunas imágenes de la galería no cargaron:", failed);
      }
      setLoading(false);
    });
  }, [images]);

  // Bloqueo de scroll y controles de teclado mientras el visor está abierto
  useEffect(() => {
    if (!viewer) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewer, closeViewer, navigate]);

  const loadingNode = loading
    ? createPortal(
        <div
          className="loading-overlay"
          role="status"
          aria-live="polite"
          aria-label="Cargando galería"
        >
          <p className="title-massive">CARGANDO…</p>
        </div>,
        document.body
      )
    : null;

  const lightboxNode = viewer
    ? createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de fotografía"
          onClick={closeViewer}
        >
          <button
            type="button"
            className="lightbox__close button-link button-link--borderless"
            onClick={(e) => {
              e.stopPropagation();
              closeViewer();
            }}
            aria-label="Cerrar visor"
          >
            ✕
          </button>

          <button
            type="button"
            className="lightbox__prev button-link button-link--borderless"
            onClick={(e) => {
              e.stopPropagation();
              navigate("prev");
            }}
            aria-label="Fotografía anterior"
            disabled={viewer.i === 0}
          >
            ←
          </button>

          <img
            className="lightbox__img"
            src={viewer.img}
            alt={`Fotografía ${viewer.i + 1} de la galería`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="lightbox__next button-link button-link--borderless"
            onClick={(e) => {
              e.stopPropagation();
              navigate("next");
            }}
            aria-label="Fotografía siguiente"
            disabled={viewer.i === images.length - 1}
          >
            →
          </button>
        </div>,
        document.body
      )
    : null;

  return (
    <main className="container" role="main">
      {loadingNode}
      {lightboxNode}

      <section className="page-intro" aria-label="Galería – introducción">
        <h1 className="title-massive page-intro__title title-wrap">Galería</h1>
        <p className="text-xl text-muted">Registro visual y eventos de Valeria Guzmán.</p>
      </section>

      <div
        className={`gallery-content ${
          loading ? "gallery-content--hidden" : "gallery-content--visible"
        }`}
        aria-busy={loading}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="2rem">
            {images.map((image, i) => (
              <img
                key={image}
                className="gallery-img"
                src={image}
                alt={`Fotografía ${i + 1} de la galería de Valeria Guzmán`}
                loading="lazy"
                decoding="async"
                onClick={() => openViewer(image, i)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openViewer(image, i);
                  }
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </main>
  );
};

export default Gallery;