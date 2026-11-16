import React from "react";

export interface IndexProps {
  setPage: (page: string) => void;
}

interface BookEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  isExternal: boolean;
  linkUrl?: string;
  linkAction?: () => void;
}

const Index: React.FC<IndexProps> = ({ setPage }) => {
  const books: BookEntry[] = [
    {
      id: "ofidias",
      title: "OFIDIAS",
      subtitle: "En otra piel serán las mismas marcas",
      description:
        "Premio Nacional de Poesía Tijuana, 2019. Candidata al Premio RAE, 2020. ¡E-book de Ofidias disponible en más de 700 tiendas digitales del mundo!",
      imageUrl: "/images/ofidias.jpg",
      isExternal: false,
      linkAction: () => setPage("ofidias"),
    },
    {
      id: "animalemas",
      title: "ANIMALEMAS",
      subtitle: "",
      description:
        "Animalemas es un libro de poemas y caligramas para niños lleno de musicalidad y sorpresas. Un juego visual y sonoro que les permitirá descubrir las vocales y conocer algunos animales que se esconden en ellas mientras se divierten y se familiarizan con la poesía.",
      imageUrl: "/images/img_004_alternative.png",
      isExternal: true,
      linkUrl: "https://www.instagram.com/osadanteojos/",
    },
    {
      id: "historia-azul",
      title: "UNA HISTORIA DEL AZUL",
      subtitle: "",
      description:
        "Una historia del azul de Jean-Michel Maulpoix premio de Goncourt de la poésie 2022 en traducción de la poeta Valeria Guzmán Pérez.",
      imageUrl: "/images/img_003_alternative.png",
      isExternal: true,
      linkUrl: "https://circulodepoesia.com/libreria/una-historia-del-azul/",
    },
    {
      id: "diccionario",
      title: "DICCIONARIO DE ECUATORIANISMOS CON CITAS",
      subtitle: "",
      description:
        "Diccionario de ecuatorianismos con citas de Elking Araujo constituye una obra muy importante en el panorama de la lexicografía ecuatoriana y tuve la fortuna de prologarlo.",
      imageUrl: "/images/img_002.jpg",
      isExternal: true,
      linkUrl:
        "https://latam.casadellibro.com/ebook-diccionario-de-ecuatorianismos-con-citas-ebook/9789978775592/12646507",
    },
  ];

  return (
    <main className="container" role="main">
      <section className="hero" aria-label="Introducción">
        <h1 className="title-massive hero__title">
          Valeria
          <br />
          Guzmán
        </h1>
        <p className="text-xl text-muted">
          Poeta, traductora y lingüista. Explora las obras destacadas y proyectos recientes.
        </p>
      </section>

<div className="books-list">
  {books.map((book, index) => {
    const isLeft = index % 2 === 0;

    // Elemento de imagen abstraído para reutilizarlo limpiamente
    const imageElement = (
      <div
        key={`img-${book.id}`}
        className={`img-container-wrapper ${
          isLeft ? "vanguard-item-img-left" : "vanguard-item-img-right"
        }`}
      >
        <img
          src={book.imageUrl}
          alt={`Portada del libro ${book.title}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="vanguard-img-native"
        />
      </div>
    );

    // Elemento de texto abstraído
    const textElement = (
      <div
        key={`txt-${book.id}`}
        className={
          isLeft ? "vanguard-item-txt-right" : "vanguard-item-txt-left"
        }
      >
        <h2 className="title-massive title-massive--5xl">{book.title}</h2>

        {book.subtitle && (
          <h3 className="text-xl">{book.subtitle}</h3>
        )}

        <p className="body-muted body-muted--mb2">{book.description}</p>

        {book.isExternal ? (
          <a
            href={book.linkUrl}
            target="_blank"
            rel="noreferrer"
            className="button-link"
            aria-label={`Saber más sobre ${book.title} (abre en nueva pestaña)`}
          >
            Saber más →
          </a>
        ) : (
          <button
            className="button-link"
            onClick={book.linkAction}
            aria-label={`Saber más sobre ${book.title}`}
          >
            Saber más →
          </button>
        )}
      </div>
    );

    return (
      <article key={book.id} className="vanguard-grid" aria-label={book.title}>
        {/* Si es par (isLeft), la imagen va primero. Si es impar, el texto va primero en el DOM */}
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

export default Index;