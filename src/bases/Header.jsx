import { useState } from "react";



function Header ({setPage,setActiveMenu, activeMenu}) {

  const [activeSubMenu, setActiveSubMenu] = useState('');

  const toggleMenu = () => {
    activeMenu === '' ? setActiveMenu(`active`) : setActiveMenu('')
};
const toggleSubMenu = () => {
  activeSubMenu === '' ? setActiveSubMenu(`active`) : setActiveSubMenu('')
};

    return (
      <>
      <header className={`${activeMenu}`}>

    <nav id="menu">
      <a id={`logo`} onClick={()=>{setPage("index")}}>VALERIA GUZMÁN</a>
      <i  id={`hamburger`} onClick={toggleMenu}></i>
      <ul  id={`menu_options`} className={`${activeMenu}`}>
        <li><a className={`menu_option`} onClick={()=>{setPage("gallery")}}>Galería</a></li>
        <li style={{textAlign: 'center'}}>
          <a id={`book_selector`}  className={`menu_option`} data-option="books" onClick={()=>{setPage("bibliography")}} >La Obra</a> <span id="arrow" onClick={toggleSubMenu}>▶</span>
          <ul id={`submenu_options`} className={`${activeSubMenu}`}>
            <li><a className={`menu_option`} onClick={()=>{setPage("ofidias")}} >Ofidias</a></li>
            <li><a className={`menu_option`} onClick={()=>{setPage("efusiva-penitente")}} >Efusiva Penitente</a></li>
          </ul>
        </li>
        <li><a className={`menu_option`} onClick={()=>{setPage("aboutme")}} >La Autora</a></li>
        <li><a className={`menu_option`}  onClick={()=>{setPage("background")}} >Trayectoria</a></li>
      </ul>
    </nav>
      </header>
      </>
    )
  }
  
  export default Header
  