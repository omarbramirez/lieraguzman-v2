import React from "react";

export interface BibliographyProps {
  setPage: (page: string) => void;
}

const Bibliography: React.FC<BibliographyProps> = ({ setPage }) => {
  return (
    <main className="container" role="main">
      <section className="page-intro" aria-label="La Obra – introducción">
        <h1 className="title-massive page-intro__title">La Obra</h1>
        <p className="text-xl text-muted">Colección de libros y poemarios publicados.</p>
      </section>

      <div className="books-list">
        {/* Efusiva Penitente */}
        <article className="vanguard-grid" aria-label="Efusiva Penitente">
          <div
            id="book_001"
            className="img-placeholder img-placeholder--3-4 img-placeholder--bg vanguard-item-img-left"
            role="img"
            aria-label="Portada de Efusiva Penitente"
          />
          <div className="vanguard-item-txt-right">
            <span className="bg-number" aria-hidden="true">01</span>
            <h2 className="title-massive title-massive--5xl">EFUSIVA PENITENTE</h2>
            <p className="body-muted body-muted--mb2">
              Libro de poemas publicado por la Casa de la Cultura Ecuatoriana.
            </p>
            <button
              className="button-link"
              onClick={() => setPage("efusiva-penitente")}
              aria-label="Saber más sobre Efusiva Penitente"
            >
              Saber más →
            </button>
          </div>
        </article>

        {/* Ofidias */}
        <article className="vanguard-grid" aria-label="Ofidias">
          <div
            id="book_002"
            className="img-placeholder img-placeholder--3-4 img-placeholder--bg vanguard-item-img-right"
            role="img"
            aria-label="Portada de Ofidias"
          />
          <div className="vanguard-item-txt-left">
            <span className="bg-number" aria-hidden="true">02</span>
            <h2 className="title-massive title-massive--5xl">OFIDIAS</h2>
            <p className="body-muted body-muted--mb2">
              "Como una gota se carga lentamente hasta que ya no aguanta su propio
              peso y rueda, así, cada palabra de Valeria Guzmán ha caído en su libro
              Ofidias. La lucidez, en algunos momentos escalofriante, se ha aliado con
              la belleza y macerado en el tiempo." — Raquel Olvera
            </p>
            <button
              className="button-link"
              onClick={() => setPage("ofidias")}
              aria-label="Saber más sobre Ofidias"
            >
              Saber más →
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Bibliography;