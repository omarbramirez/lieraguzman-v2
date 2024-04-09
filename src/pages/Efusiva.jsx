import { useState } from "react"
import Poem01 from '../assets/images/texts/efusiva001.jpg'
import Poem02 from '../assets/images/texts/efusiva002.jpg'
import Poem03 from '../assets/images/texts/efusiva003.jpg'
import Poem04 from '../assets/images/texts/efusiva004.jpg'
import Poem05 from '../assets/images/texts/efusiva005.jpg'

function Efusiva (){
    const poems = [Poem01,Poem02,Poem03,Poem04,Poem05];

    const [slider, setSlider] = useState(1);
    const[data, setData] = useState({img: '', i:0})

    const viewImg = (img, i)=>{
        setData({img, i})

    }
 const imgAction = (action) =>{
        let list = data.list
        let i =data.i
        action === 'next-poem' && poems[i+1] ? setData({img: poems[i+1], i: i+1, list}) :
        action === 'prev-poem' && poems[i-1] ? setData({img: poems[i-1], i: i-1, list}) :
        setData({img: '', i: 0})           
    }


return(
    <>
{data.img &&
    <div style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        position: 'fixed',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: '99999'
    }}>
        <a style={{position: 'absolute', top: '10px', right:'10px', fontSize: 'var(--text-display)', cursor: 'pointer'}} onClick={()=> imgAction('close')}>ⓧ</a>
        <a style={{margin:'2%', fontSize: 'var(--text-display)', cursor: 'pointer'}} onClick={()=> imgAction('prev-poem')}>◀</a>
        <img src={data.img} style={{width: 'auto', maxWidth: '80%', objectFit: 'contain', height: '90%'}} />
        <a style={{margin:'2%', fontSize: 'var(--text-display)', cursor: 'pointer'}} onClick={()=> imgAction('next-poem')}>▶</a>
    </div>

    }




          <div className="content content-book">
            <div className="header header_book">
            <h2 className="book_title">Efusiva Penitente</h2>
            <ul id="main_slider" className="slider">
          <li className={`slide ${slider === 1 ? 'active' : ''}`} data-position="1" style={{ alignItems: 'center' }}>
            <p>
            &quot;Somos presas de las necesidades de la carne, de su delirio interno que cada vez necesita ser saciado; que canta, arrulla y también despierta abruptamente las fibras de la necesidad incontrolable. Así encuentro justificativo a Efusiva penitente (CCE Imbabura, 2010) de Valeria Guzmán (Rusia, 1988). Un poemario que explora lo erótico desde una particularidad sacrílega, siendo atentado a las costumbres, a la ritualidad caduca que impera en las sociedades cristianas.&quot;
              <br/><br/>
              <a target="_blank" href="https://twitter.com/marfuzzine">Alexis Cuzme</a>
            </p>
          </li>
          <li className={`slide ${slider === 2 ? 'active' : ''}`}  data-position="2" style={{ alignItems: 'center' }}>
            <p>
            &quot;El poemario Efusiva penitente me trae la voz de una Sor Juana Inés de la Cruz en plena epifanía con el amado, en una levitación profana, como los ojos del Ángel caído. Gracias Valeria, ahora vuelvo a la poesía: Si ya profanaste el templo/ ¿Qué esperas para saquearlo todo?&quot;
              <br/><br/>
              <a target="_blank" href="https://www.facebook.com/juancarlos.morales.5477">Juan Carlos Morales</a>
            </p>
          </li>
        </ul>

    <ul id="sliderNav" className="dot_container">
      <li className={`dot slider_dot ${slider === 1 ? 'active' : ''}`} data-position="1" onClick={()=>{setSlider(1)}}></li>
      <li className={`dot slider_dot ${slider === 2 ? 'active' : ''}`} data-position="2" onClick={()=>{setSlider(2)}}></li>
    </ul>
                </div>


                <div className="book_abstract">
      <div className="_2_col _2_col_book">
        <div className="wrap_2_col wrap_1 book">
          <div className="sticky_wrap">
            <div id="book_001" className="img book_img"></div>
            {/* <a href="#" className="button button_book">Comprar</a> */}
          </div>
        </div>
        <div className="wrap_2_col wrap_2 book">
          <h3 className="book_section_title">Sobre el libro</h3>
          <p>
            Fuera de la común mojigatería del campo erótico, la poeta halla un camino para tratar con su cuerpo en el diálogo con la poesía mística, ya sea guiada por Santa Teresa de Ávila u otro, donde encontrará el simbolismo y ritmo propicios. El mito de la salvación cristiana, sin precedente, se cumple en el momento de la eucaristía carnal. El yo poético se detiene; dialoga con el otro hasta bendecirlo cuando se comparte. El compañero solo perpetra para sentirse sagrado, las referencias fálicas son múltiples y el cuerpo se comparte como el cordero, como la ostia.
            <br/><br/>
            El libro entero oscila entre el testimonio y el deseo. Cuando afirma: «Ávida aguardo / el cáliz salvador / la gloriosa venida / la resurrección» (Guzmán Pérez, 2010), espera un reencuentro con la liberación de compartirse. La totalidad debe ser desangrada para expresarse. Pero también es la fuente inagotable que se dirige hacia lo que desea, no es herida cuando se multiplica en la explosión del acto erótico. Se opone por completo a misoginia clásica —tan cruenta. Platón afirmaría que las mujeres no tienen alma— y antropocentrista donde, en palabras de Umbral, «la mujer es derroche, la máxima ocasión de vida como derroche que conoce el hombre» (1980). Para la efusiva penitente, el hombre es mendigo, un mendigo invitado, a la múltiple gracia de la feminidad.
            <br/><br/><a target="_blank" href="https://www.instagram.com/publio.helvio.pertinax/?igshid=YmMyMTA2M2Y%3D">Juan C. Valdospinos</a>
          </p>
        </div>
      </div>

      <div className="wrapped">
    <h2 className="book_title">Ilustración</h2>
      <h3 style={{textAlign: 'center'}}>(Traducciones)</h3>
      <ul id="grid_illustrations" className="free_trials">
      {poems.map((poem, i)=>(
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<li key={i}>
                <img src={poem} onClick={()=>viewImg(poem, i)} className="poem"/>
               </li >
        ))
        }
      </ul>
    </div>
    </div>
                </div>
    </>
)
}

export default Efusiva;