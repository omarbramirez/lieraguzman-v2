// src/bases/Header.tsx
import React, { useState } from "react";

export interface HeaderProps {
  setPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  setPage,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const handleNavigate = (pageId: string): void => {
    setPage(pageId);
    setSubMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="container site-header" role="banner">
      <button
        type="button"
        className="site-header__logo"
        onClick={() => handleNavigate("index")}
        aria-label="Ir a inicio – Valeria Guzmán"
      >
        VALERIA GUZMÁN
      </button>

      <div className="site-header__actions">
        <nav className="site-nav" aria-label="Navegación principal">
          <div className="site-nav__item">
            <span className="site-nav__obra-toggle">
              <button
                type="button"
                className="button-link"
                onClick={() => handleNavigate("bibliography")}
              >
                La Obra
              </button>
              <button
                type="button"
                className="site-nav__obra-arrow"
                aria-expanded={subMenuOpen}
                aria-haspopup="true"
                aria-label="Expandir submenú La Obra"
                onClick={() => setSubMenuOpen((prev) => !prev)}
              >
                {subMenuOpen ? "▲" : "▼"}
              </button>
            </span>

            {subMenuOpen && (
              <div className="site-nav__submenu" role="menu">
                <button
                  type="button"
                  role="menuitem"
                  className="button-link button-link--borderless"
                  onClick={() => handleNavigate("ofidias")}
                >
                  Ofidias
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="button-link button-link--borderless"
                  onClick={() => handleNavigate("efusiva-penitente")}
                >
                  Efusiva Penitente
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="button-link"
            onClick={() => handleNavigate("aboutme")}
          >
            La Autora
          </button>
        </nav>

        {/* Botón hamburguesa siempre presente */}
        <button
          type="button"
          className="site-header__hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="side-navigation"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;