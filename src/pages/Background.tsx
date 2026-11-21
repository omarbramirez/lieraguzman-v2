import React from "react";

const Background: React.FC = () => {
  return (
    <main className="container" role="main">
      <section className="page-intro" aria-label="Trayectoria – introducción">
        <h1 className="title-massive page-intro__title title-wrap">Trayectoria</h1>
        <p className="text-xl text-muted">
          Perfil académico, reconocimientos y experiencia profesional.
        </p>
      </section>

      {/* Perfil narrativo */}
      <article className="vanguard-grid" aria-label="Perfil profesional">
        <div className="vanguard-item-txt-left">
          <h2 className="title-massive title-massive--4xl title-wrap">Perfil</h2>
          <p className="body-muted">
            Poeta, traductora, docente y lexicógrafa. Directora del proyecto{" "}
            <b>Mujeres al oído</b>, audios de escritoras ecuatorianas contemporáneas.
          </p>
          <p className="body-muted">
            Trabaja para la <b>Academia Ecuatoriana de la Lengua</b> y trabajó para la{" "}
            <b>Academia Mexicana de la Lengua</b> (2016-2020). Ha impartido clases de
            lexicografía, semántica y teorías lingüísticas en la{" "}
            <b>Benemérita Universidad Autónoma de Puebla</b> y clases de lingüística
            para psicoanalistas en la <b>Escuela de la Letra Psicoanalítica</b>.
          </p>
          <p className="body-muted">
            Tradujo al español <b>Une histoire de Bleu</b> de Jean-Michel Maulpoix
            (ganador del Premio Goncourt de Poesía) publicado por el{" "}
            <b>Círculo de Poesía</b> y el <b>Mercure de France</b> (2022). Ha sido
            curadora del <b>Salón de Poesía</b> de la <b>FILQUITO 2020 y 2021</b>.
          </p>
        </div>
        
        {/* Contenedor adaptado para imagen nativa en la sección de trayectoria */}
        <div className="img-container-wrapper img-container-wrapper--framed vanguard-item-img-right">
          <img
            src="/images/img_005.jpg"
            alt="Fotografía de perfil de trayectoria"
            loading="lazy"
            decoding="async"
            className="vanguard-img-native"
          />
        </div>
      </article>

      {/* Curriculum en columnas */}
      <div className="cv-grid">
        {/* Formación */}
        <section aria-label="Formación académica">
          <h3 className="cv-section__title title-wrap">FORMACIÓN</h3>
          <ul className="cv-list">
            <li className="cv-list__item">
              Licenciada en Lingüística y Literatura Hispánica por la Benemérita
              Universidad Autónoma de Puebla.
            </li>
            <li className="cv-list__item">
              Maestría en Lingüística Hispánica por la Universidad Nacional Autónoma de
              México.
            </li>
            <li className="cv-list__item">
              Máster en Lexicografía Hispánica por la Real Academia de la Lengua Española
              y la Universidad de León.
            </li>
          </ul>
        </section>

        {/* Publicaciones */}
        <section aria-label="Publicaciones">
          <h3 className="cv-section__title title-wrap">PUBLICACIONES</h3>
          <ul className="cv-list">
            <li className="cv-list__item">
              <b>2010:</b> "Efusiva penitente", libro de poemas publicado por la Casa de
              la Cultura Ecuatoriana.
            </li>
            <li className="cv-list__item">
              <b>2019:</b> "Ofidias", libro de poemas publicado por el Instituto
              Municipal de Arte y Cultura de Tijuana.
            </li>
            <li className="cv-list__item">
              <b>2022:</b> "Animalemas", libro interactivo de poemas para niños
              publicado por editorial Osa de anteojos y el Ministerio de Cultura y
              Patrimonio del Ecuador.
            </li>
          </ul>
        </section>

        {/* Reconocimientos */}
        <section aria-label="Reconocimientos obtenidos">
          <h3 className="cv-section__title title-wrap">RECONOCIMIENTOS</h3>
          <ul className="cv-list">
            <li className="cv-list__item">
              <b>2009:</b> Ganadora del X Premio Filosofía y Letras (BUAP) con
              "Constelada".
            </li>
            <li className="cv-list__item">
              <b>2010:</b> Ganadora del XI Premio Filosofía y Letras (BUAP) con ensayo
              lexicográfico.
            </li>
            <li className="cv-list__item">
              <b>2012:</b> Examen profesional aprobado Cum Laude.
            </li>
          </ul>
        </section>

        {/* Idiomas */}
        <section aria-label="Idiomas">
          <h3 className="cv-section__title title-wrap">IDIOMAS</h3>
          <ul className="tag-list" aria-label="Lista de idiomas">
            {["Latín", "Inglés", "Francés", "Ruso"].map((lang) => (
              <li key={lang} className="tag">{lang}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Background;