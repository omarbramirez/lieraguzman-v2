import Header from './bases/Header.jsx'
import Footer from './bases/Footer.jsx'
import Index from './pages/Index.jsx'
import NotFound from './bases/NotFound.jsx';
import { useState, useEffect } from 'react'

function App() {
const [page, setPage] = useState('index');
const [activeMenu, setActiveMenu] = useState('');

useEffect(() => {
  window.scrollTo(0, 0);
}, [page]);

  return (
    <>
    <Header setPage={setPage} setActiveMenu={setActiveMenu} activeMenu={activeMenu}/>
    {page === 'index' && activeMenu !== 'active' ? <Index/>:
    <NotFound/>
    }
    <Footer activeMenu={activeMenu}/>
    </>
  )
}

export default App
