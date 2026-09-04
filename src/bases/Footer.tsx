import React from "react";

export interface FooterProps {
  setPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="container site-footer" role="contentinfo">
      <nav className="site-footer__social" aria-label="Redes sociales y contacto">
        <a
          target="_blank"
          rel="noreferrer"
          className="button-link"
          href="https://www.linkedin.com/in/valeria-guzm%C3%A1n-p%C3%A9rez-5715a4242/"
          aria-label="LinkedIn de Valeria Guzmán (abre en nueva pestaña)"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="button-link"
          href="https://www.facebook.com/leriaguzmanperez"
          aria-label="Facebook de Valeria Guzmán (abre en nueva pestaña)"
        >
          Facebook
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="button-link"
          href="https://www.instagram.com/lieraguzmanvz/"
          aria-label="Instagram de Valeria Guzmán (abre en nueva pestaña)"
        >
          Instagram
        </a>
        <button
          className="button-link"
          onClick={() => setPage("policy")}
          aria-label="Ver términos de privacidad"
        >
          Privacidad
        </button>
      </nav>

      <div className="site-footer__meta">
        <a className="button-link" href="mailto:valeria_guzman@hotmail.com">
          valeria_guzman@hotmail.com
        </a>
        <p className="site-footer__copyright">
          © {currentYear} Valeria Guzmán Pérez{" "}
          <span aria-hidden="true">|</span>{" "}
          Creada por{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.omarbramirez.com"
            className="site-footer__credit-link"
            aria-label="Sitio de Omar B Ramírez (abre en nueva pestaña)"
          >
            Omar B Ramírez
          </a>
        </p>
        <button
          className="button-link"
          onClick={scrollToTop}
          aria-label="Volver al inicio de la página"
        >
          ↑ Volver arriba
        </button>
      </div>
    </footer>
  );
};

export default Footer;