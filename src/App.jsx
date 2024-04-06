import Header from './bases/Header.jsx'
import Footer from './bases/Footer.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Background from './pages/Background.jsx'
import Bibliography from './pages/Bibliography.jsx'
import Efusiva from './pages/Efusiva.jsx'
import Gallery from './pages/Gallery.jsx'
import Index from './pages/Index.jsx'
import Ofidias from './pages/Ofidias.jsx'
import NotFound from './bases/NotFound.jsx';
import { useState, useEffect } from 'react'

function App() {
const [page, setPage] = useState('index');
const [activeMenu, setActiveMenu] = useState('');

useEffect(() => {
  window.scrollTo(0, 0);
}, [page]);

useEffect(() => {
setActiveMenu('');
}, [page]);


  return (
    <>
    <Header setPage={setPage} setActiveMenu={setActiveMenu} activeMenu={activeMenu}/>
    {page === 'index' ? <Index  setPage={setPage}/>:
    page == 'gallery' ? <Gallery/>:
    page == 'bibliography' ? <Bibliography  setPage={setPage}/>:
    page == 'ofidias' ? <Ofidias/>:
    page == 'efusiva-penitente' ? <Efusiva/>:
    page == 'aboutme' ? <AboutMe/>:
    page == 'background' ? <Background/>:
    <NotFound/>
    }
    <Footer activeMenu={activeMenu}/>
    </>
  )
}

export default App
