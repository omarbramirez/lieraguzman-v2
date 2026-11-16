import React from "react";

export interface BibliographyProps {
  setPage: (page: string) => void;
}

interface BookEntry {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetPage: string;
}

const Bibliography: React.FC<BibliographyProps> = ({ setPage }) => {
  const bibliographyBooks: BookEntry[] = [
    {
      id: "book_001",
      title: "EFUSIVA PENITENTE",
      description: "Libro de poemas publicado por la Casa de la Cultura Ecuatoriana.",
      imageUrl: "/images/efusiva.jpg", // Asegúrate de tener la ruta correcta en public/images/
      targetPage: "efusiva-penitente",
    },
    {
      id: "book_002",
      title: "OFIDIAS",
      description:
        '"Como una gota se carga lentamente hasta que ya no aguanta su propio peso y rueda, así, cada palabra de Valeria Guzmán ha caído en su libro Ofidias. La lucidez, en algunos momentos escalofriante, se ha aliado con la belleza y macerado en el tiempo." — Raquel Olvera',
      imageUrl: "/images/ofidias.jpg",
      targetPage: "ofidias",
    },
  ];

  return (
    <main className="container" role="main">
      <section className="page-intro" aria-label="La Obra – introducción">
        <h1 className="title-massive page-intro__title">La Obra</h1>
        <p className="text-xl text-muted">Colección de libros y poemarios publicados.</p>
      </section>

      <div className="books-list">
        {bibliographyBooks.map((book, index) => {
          const isLeft = index % 2 === 0;

          // Elemento de imagen optimizado para Vite con etiqueta nativa
          const imageElement = (
            <div
              key={`img-${book.id}`}
              className={`img-container-wrapper ${
                isLeft ? "vanguard-item-img-left" : "vanguard-item-img-right"
              }`}
            >
              <img
                id={book.id}
                src={book.imageUrl}
                alt={`Portada de ${book.title}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="vanguard-img-native"
              />
            </div>
          );

          // Elemento de contenido textual
          const textElement = (
            <div
              key={`txt-${book.id}`}
              className={
                isLeft ? "vanguard-item-txt-right" : "vanguard-item-txt-left"
              }
            >
              <h2 className="title-massive title-massive--5xl">{book.title}</h2>
              <p className="body-muted body-muted--mb2">{book.description}</p>
              <button
                className="button-link"
                onClick={() => setPage(book.targetPage)}
                aria-label={`Saber más sobre ${book.title}`}
              >
                Saber más →
              </button>
            </div>
          );

          return (
            <article key={book.id} className="vanguard-grid" aria-label={book.title}>
              {/* Si es par, imagen izquierda / texto derecha. Si es impar, texto izquierda / imagen derecha en el DOM */}
              {isLeft ? (
                <>
                  {imageElement}
                  {textElement}
                </>
              ) : (
                <>
                  {textElement}
                  {imageElement}
                </>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Bibliography;