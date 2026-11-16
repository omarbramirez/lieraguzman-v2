// App.tsx
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
  
  // 1. Elevación de estado: App controla la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const navigate = (target: string): void => {
    setPage(target as PageId);
    setIsMenuOpen(false); // Garantiza que el menú se cierre al navegar
  };

  const renderPage = (): React.ReactNode => {
    switch (page) {
      case "index":           return <Index setPage={navigate} />;
      case "gallery":         return <Gallery />;
      case "bibliography":    return <Bibliography setPage={navigate} />;
      case "ofidias":         return <Ofidias />;
      case "efusiva-penitente": return <Efusiva />;
      case "aboutme":         return <AboutMe />;
      case "background":      return <Background />;
      case "policy":          return <Policy />;
      default:                return <NotFound />;
    }
  };

  return (
    <div className="app-root">
      {/* 2. Se inyecta el estado y el mutador al Header */}
      <Header 
        setPage={navigate} 
        // isMenuOpen={isMenuOpen} 
        // setIsMenuOpen={setIsMenuOpen} 
      />
      
      {/* 3. Contenedor principal orquestador del desplazamiento */}
      <main 
        className={`layout-main ${isMenuOpen ? "layout-main--shifted" : ""}`}
        aria-hidden={isMenuOpen} // A11y: Oculta el contenido al lector de pantalla si el menú está activo
      >
        {renderPage()}
        <Footer setPage={navigate} />
      </main>
    </div>
  );
};

export default App;