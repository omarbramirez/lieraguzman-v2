import React from "react";
import Collab01 from "../assets/images/collabs/collab_001.png";
import Collab02 from "../assets/images/collabs/collab_002.png";
import Collab03 from "../assets/images/collabs/collab_003.png";
import Collab04 from "../assets/images/collabs/collab_004.png";
import Collab05 from "../assets/images/collabs/collab_005.png";
import Collab06 from "../assets/images/collabs/collab_006.png";
import Collab07 from "../assets/images/collabs/collab_007.png";

interface CollabItem {
  id: string;
  logo: string;
  name: string;
  role: string;
}

const collabs: CollabItem[] = [
  { id: "mujeres", logo: Collab02, name: "Mujeres al Oído", role: "Directora, Locutora y Curadora" },
  { id: "parada", logo: Collab04, name: "La Parada Producciones", role: "Locutora y Gestora cultural" },
  { id: "acad-ec", logo: Collab03, name: "Academia Ecuatoriana de la Lengua", role: "Lexicógrafa (2018 – actual)" },
  { id: "acad-mx", logo: Collab05, name: "Academia Mexicana de la Lengua", role: "Lexicógrafa (2016–2021)" },
  { id: "osa", logo: Collab01, name: "Osa de Anteojos: Grado Cero", role: "Editora" },
  { id: "buap", logo: Collab06, name: "Colegio de Lingüística (BUAP)", role: "Teorías Lingüísticas y Lexicografía" },
  { id: "letra", logo: Collab07, name: "Escuela de la Letra Psicoanalítica", role: "Lingüística para psicoanalistas" },
];

const topics: string[] = [
  "Lenguaje inclusivo",
  "Traducción",
  "Medios alternativos de difusión de la literatura: espacios sonoros, audiolibros, libros digitales, libros interactivos",
  "Diccionarios",
  "Literatura escrita por mujeres",
  "Feminismo",
  "Escritores ecuatorianos y mexicanos",
  "Creación literaria: autoría, escritura, enseñanza",
  "Docencia: lingüística y lingüística para psicoanalistas",
  "Ecuatorianismos y Mexicanismos",
  "Gramáticas antiguas",
];

const AboutMe: React.FC = () => {
  return (
    <main className="container" role="main">
      {/* Sección 01 – Bio (Imagen izquierda, texto derecha) */}
      <article className="vanguard-grid" aria-label="Perfil biográfico">
        <div className="img-container-wrapper img-container-wrapper--framed vanguard-item-img-left">
          <img
            id="profile_img"
            src="/images/img_profile.jpg"
            alt="Fotografía de Valeria Guzmán"
            loading="eager"
            decoding="async"
            className="vanguard-img-native"
          />
        </div>
        <div className="vanguard-item-txt-right">
          <h1 className="title-massive title-wrap">LA AUTORA</h1>
          <p className="text-xl">
            Poeta, traductora, docente y lexicógrafa, nacida en Rusia, de madre nicaragüense y
            padre ecuatoriano; es residente mexicana. Dirige el proyecto Mujeres al oído, audios
            de escritoras ecuatorianas contemporáneas. Actualmente trabaja para la Academia
            Ecuatoriana de la Lengua y trabajó para la Academia Mexicana de la Lengua. Las
            obsesiones recurrentes en su escritura son el lenguaje, el feminismo, los animales y
            la memoria. Su poética es sucinta y profunda.
          </p>
        </div>
      </article>

      {/* Sección 02 – Docencia (Texto izquierda, pila de imágenes derecha) */}
      <article className="vanguard-grid vanguard-grid--mt" aria-label="Filosofía docente">
        <div className="vanguard-item-txt-left">
          <h2 className="title-massive title-massive--4xl title-wrap">
            Yo he aprendido mucho, muchísimo impartiendo clase.
          </h2>
          <p className="body-muted">
            Me siento muy orgullosa cuando veo a mis alumnos cumpliendo sus sueños en todo su
            esplendor y recuerdo que tuve la fortuna de conocerlos y, con suerte, de legarles
            algo. Los trato siempre con respeto y considero que la enseñanza es sobre todo un
            acto de amor. Se transfiere la pasión.
          </p>
          <p className="body-muted">
            Y, siguiendo a Lacán, "El maestro no enseña ex cátedra una ciencia ya construida, da
            la respuesta cuando los alumnos están a punto de encontrarla".
          </p>
        </div>

        <div className="vanguard-item-img-right img-stack">
          <div className="img-container-wrapper img-container-wrapper--framed">
            <img
              id="img_002"
              src="/images/img_002.jpg"
              alt="Fotografía en docencia 1"
              loading="lazy"
              decoding="async"
              className="vanguard-img-native"
            />
          </div>
          <div className="img-container-wrapper img-container-wrapper--framed img-placeholder--bg-top">
            <img
              id="img_003"
              src="/images/img_003.jpg"
              alt="Fotografía en docencia 2"
              loading="lazy"
              decoding="async"
              className="vanguard-img-native"
            />
          </div>
        </div>
      </article>

      {/* Temas de interés */}
      <section aria-label="Temas de interés profesional">
        <h2 className="title-massive section-heading title-wrap">TEMAS DE INTERÉS</h2>
        <ul className="topics-grid">
          {topics.map((topic) => (
            <li key={topic} className="topics-grid__item text-base">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {/* Colaboraciones */}
      <section aria-label="Colaboraciones">
        <h2 className="title-massive section-heading title-wrap">COLABORACIONES</h2>
        <ul className="collabs-grid">
          {collabs.map((c) => (
            <li key={c.id} className="collab-card">
              <img className="collab-card__logo" src={c.logo} alt={`Logo de ${c.name}`} />
              <p className="collab-card__title">{c.name}</p>
              <p className="uppercase-tracking">{c.role}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AboutMe;