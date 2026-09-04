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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const navigate = (target: string) => {
    setPage(target as PageId);
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
    <>
      <Header setPage={navigate} />
      {renderPage()}
      <Footer setPage={navigate} />
    </>
  );
};

export default App;
