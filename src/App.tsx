// src/App.tsx
import React, { useState, useEffect } from "react";
import Header from "./bases/Header";
import Footer from "./bases/Footer";
import AboutMe from "./pages/AboutMe";
import Background from "./pages/Background";
import Bibliography from "./pages/Bibliography";
import Efusiva from "./pages/Efusiva";
import Gallery from "./pages/Gallery";
import Index from "./pages/Index";
import Ofidias from "./pages/Ofidias";
import NotFound from "./bases/NotFound";
import Policy from "./bases/Policy";

type PageId =
  | "index"
  | "gallery"
  | "bibliography"
  | "ofidias"
  | "efusiva-penitente"
  | "aboutme"
  | "background"
  | "policy";

const App: React.FC = () => {
  const [page, setPage] = useState<PageId>("index");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Cierre accesible con tecla Escape y bloqueo de scroll del documento
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navigate = (target: string): void => {
    setPage(target as PageId);
    setIsMenuOpen(false);
  };

  const renderPage = (): React.ReactNode => {
    switch (page) {
      case "index":             return <Index setPage={navigate} />;
      case "gallery":           return <Gallery />;
      case "bibliography":      return <Bibliography setPage={navigate} />;
      case "ofidias":           return <Ofidias />;
      case "efusiva-penitente": return <Efusiva />;
      case "aboutme":           return <AboutMe />;
      case "background":        return <Background />;
      case "policy":            return <Policy />;
      default:                  return <NotFound />;
    }
  };

  return (
    <div className="app-root">
      {/* CAPA 1 (Fondo fijo a la derecha): Menú revelado al desplazar la página */}
      <aside
        id="side-navigation"
        className="side-panel"
        aria-label="Menú lateral"
        aria-hidden={!isMenuOpen}
      >
        <nav className="side-panel__nav">
          <button
            type="button"
            className="side-panel__link side-panel__link--primary"
            onClick={() => navigate("index")}
          >
            Inicio
          </button>
          <button
            type="button"
            className="side-panel__link side-panel__link--primary"
            onClick={() => navigate("gallery")}
          >
            Galería
          </button>
          <button
            type="button"
            className="side-panel__link side-panel__link--primary"
            onClick={() => navigate("bibliography")}
          >
            La Obra
          </button>
          <button
            type="button"
            className="side-panel__link side-panel__link--sub"
            onClick={() => navigate("ofidias")}
          >
            Ofidias
          </button>
          <button
            type="button"
            className="side-panel__link side-panel__link--sub"
            onClick={() => navigate("efusiva-penitente")}
          >
            Efusiva Penitente
          </button>
          <button
            type="button"
            className="side-panel__link side-panel__link--primary"
            onClick={() => navigate("aboutme")}
          >
            La Autora
          </button>
          <button
            type="button"
            className="side-panel__link side-panel__link--primary"
            onClick={() => navigate("background")}
          >
            Trayectoria
          </button>
        </nav>
      </aside>

      {/* CAPA 2 (Lienzo principal): Se encoge y desplaza a la izquierda */}
      <div className={`layout-main ${isMenuOpen ? "layout-main--shifted" : ""}`}>
        {/* Botón circular de cierre montado sobre el borde derecho, como en la referencia */}
        {isMenuOpen && (
          <button
            type="button"
            className="layout-main__close-badge"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú lateral"
          >
            ✕
          </button>
        )}

        {/* Capa invisible para cerrar al hacer clic en cualquier parte de la página encogida */}
        {isMenuOpen && (
          <div
            className="layout-main__click-shield"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <Header
          setPage={navigate}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {renderPage()}
        <Footer setPage={navigate} />
      </div>
    </div>
  );
};

export default App;