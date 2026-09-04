import React, { useState } from "react";

export interface HeaderProps {
  setPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => setSubMenuOpen(prev => !prev);

  return (
    <header className="container site-header" role="banner">
      <button
        className="site-header__logo"
        onClick={() => setPage("index")}
        aria-label="Ir a inicio – Valeria Guzmán"
      >
        VALERIA GUZMÁN
      </button>

      <nav className="site-nav" aria-label="Navegación principal">
        <button className="button-link" onClick={() => setPage("gallery")}>
          Galería
        </button>

        <div className="site-nav__item">
          <span className="site-nav__obra-toggle">
            <button className="button-link" onClick={() => setPage("bibliography")}>
              La Obra
            </button>
            <button
              className="site-nav__obra-arrow"
              aria-expanded={subMenuOpen}
              aria-haspopup="true"
              aria-label="Expandir submenú La Obra"
              onClick={toggleSubMenu}
            >
              {subMenuOpen ? "▲" : "▼"}
            </button>
          </span>

          {subMenuOpen && (
            <div className="site-nav__submenu" role="menu">
              <button
                role="menuitem"
                className="button-link button-link--borderless"
                onClick={() => { setPage("ofidias"); setSubMenuOpen(false); }}
              >
                Ofidias
              </button>
              <button
                role="menuitem"
                className="button-link button-link--borderless"
                onClick={() => { setPage("efusiva-penitente"); setSubMenuOpen(false); }}
              >
                Efusiva Penitente
              </button>
            </div>
          )}
        </div>

        <button className="button-link" onClick={() => setPage("aboutme")}>
          La Autora
        </button>
        <button className="button-link" onClick={() => setPage("background")}>
          Trayectoria
        </button>
      </nav>
    </header>
  );
};

export default Header;