import { useState } from "react"
import Poem01 from '../assets/images/texts/ofidias001.jpg'
import Poem02 from '../assets/images/texts/ofidias002.jpg'
import Poem03 from '../assets/images/texts/ofidias003.jpg'
import Poem04 from '../assets/images/texts/ofidias004.jpg'
import Poem05 from '../assets/images/texts/ofidias005.jpg'
import Poem06 from '../assets/images/texts/translation001.png'
import Poem07 from '../assets/images/texts/translation002.png'
import Poem08 from '../assets/images/texts/translation003.png'
import Poem09 from '../assets/images/texts/translation004.png'
import Poem10 from '../assets/images/texts/translation005.png'
import Illus01 from '../assets/images/illustrations/illustration001.jpg'
import Illus03 from '../assets/images/illustrations/illustration003.jpg'
import Video from '../assets/video.mp4'



function Ofidias (){
    const poems = [Poem01,Poem02,Poem03,Poem04,Poem05]
    const poems002 = [Poem06,Poem07,Poem08,Poem09,Poem10]
    const illustrations =[Illus01, Illus03]

    const [slider, setSlider] = useState(1);
    const[data, setData] = useState({img: '', i:0, list: null})


    const viewImg = (img, i, list)=>{
        setData({img, i, list})
        console.log(data)
    }


    const imgAction = (action) =>{
        let list = data.list
        let i =data.i
        action === 'next-poem' && list[i+1] ? setData({img: list[i+1], i: i+1, list}) :
        action === 'prev-poem' && list[i-1] ? setData({img: list[i-1], i: i-1, list}) :
        setData({img: '', i: 0, list: null})           
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
        <h2 className="book_title">Ofidias</h2>
        <ul id="main_slider" className="slider" style={{height: '40vh'}}>
          <li className={`slide ${slider === 1 ? 'active' : ''}`} data-position="1" style={{ alignItems: 'center' }}>
            <p>
            &quot;Agradezco a Valeria Guzmán por haber escrito este libro y, sobre todo, por compartirlo, pues publicar un libro es hacerlo público. Espero que encuentre en sus lectoras una identificación inmediata, un acto de justicia desde la literatura, y que en sus lectores encuentre la exploración de esa experiencia de mundo que ellos no conocen y que es parte de nuestra humanidad.&quot;
              <br/><br/>
              <a >Andrea Muriel</a>
            </p>
          </li>
          <li className={`slide ${slider === 2 ? 'active' : ''}`}  data-position="2" style={{ alignItems: 'center' }}>
            <p>
            &quot;Ofidias es un libro que provee al lector de una nueva mitología femenina, de un universo particular, un jardín, un país único donde cada elemento ayuda a crear un diálogo entre sí y con nosotros, una versión propia del origen de un “yo” que podemos ser muchas, una conjunción de versos que se convierten en verdad al momento de ser leídos y que solo necesitan un par de ojos para volver a la vida y dar movimiento a la ofidia, continuar el ciclo y reavivar la suave y contundente voz de Valeria Guzmán.&quot;
              <br/><br/>
              <a >Andrea Rivas</a>
            </p>
          </li>
          <li className={`slide ${slider === 3 ? 'active' : ''}`}  data-position="3" style={{ alignItems: 'center' }}>
            <p>
            &quot;Ofidias es un libro de libros que intencionalmente se propone redescubrir algo. Para ello, recurre al cuerpo como fortaleza y refuerza sus muros cuando utiliza la imagen mutada para presentarse. La ofidia es la nave que ha de llevarnos por los otros cuatro libros del tomo: desde Piel verbal hasta Morir de almendra amarga.&quot;
              <br/><br/>
              <a >Juan C. Valdospinos</a>
            </p>
          </li>
          <li className={`slide ${slider === 4 ? 'active' : ''}`}  data-position="4" style={{ alignItems: 'center' }}>
            <p>
            &quot;Pocos libros son reptiles. Todo libro de poemas, necesariamente, nace de un huevo del tamaño de un puño, medida de la angustia, pero no todos tienen la particularidad de ser una serpiente que muda su dermis en menos de cien páginas. Pocos muestran la gota de un veneno atávico en la punta de sus colmillos y la huella de su escama ventral como una partitura en el suelo, que han de interpretar los torbellinos del porvenir. Tal es el caso de Ofidias, de Valeria Guzmán Pérez, libro ganador del Premio Nacional de Poesía Tijuana 2019.&quot;
              <br/><br/>
              <a>Francisco Trejo</a>
            </p>
          </li>
        </ul>

    <ul id="sliderNav" className="dot_container">
      <li className={`dot slider_dot ${slider === 1 ? 'active' : ''}`} data-position="1" onClick={()=>{setSlider(1)}}></li>
      <li className={`dot slider_dot ${slider === 2 ? 'active' : ''}`} data-position="2" onClick={()=>{setSlider(2)}}></li>
      <li className={`dot slider_dot ${slider === 3 ? 'active' : ''}`} data-position="3" onClick={()=>{setSlider(3)}}></li>
      <li className={`dot slider_dot ${slider === 4 ? 'active' : ''}`} data-position="4" onClick={()=>{setSlider(4)}}></li>
    </ul>
      </div>
      <div className="book_abstract">
      <div className="_2_col _2_col_book">
        <div className="wrap_2_col wrap_1 book">
          <div className="sticky_wrap">
            <div id="book_002" className="img book_img"></div>
            <a href="https://www.amazon.com.mx/dp/B09ZC2PVJT/ref=cm_sw_em_r_mt_dp_3ST22GKW93TE65AT8ACX" className="button button_book" target="_blank">Comprar</a>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapped">
      <h2 className="book_title">Selección de Poemas</h2>
      <ul id="grid_poems" className="free_trials">
        {poems.map((poem, i)=>(
            <li key={i} onClick={()=>viewImg(poem, i, poems)}>
                <img src={poem} className="poem"/>
               </li >
        ))
        }
      </ul>
    </div>
    
    {/* <a target="_blank" href="https://www.instagram.com/benlaguierce/?igshid=YmMyMTA2M2Y%3D" style={{width: '100%', marginBottom: '15px'}}>Benjamin Aguilar Laguierce</a> */}

    <div className="wrapped">
      <h2 className="book_title">Tríptico de Gatas</h2>
      <h3 style={{textAlign: 'center'}}>(Traducciones)</h3>
      <ul id="grid_poems002" className="free_trials">
      {poems002.map((poem, i)=>(
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<li key={i}>
                <img src={poem} onClick={()=>viewImg(poem, i, poems002)} className="poem"/>
               </li >
        ))
        }
      </ul>
    </div>

    <div className="wrapped">
    <h2 className="book_title">Ilustración</h2>
      <h3 style={{textAlign: 'center'}}>(Traducciones)</h3>
      <ul id="grid_illustrations" className="free_trials">
      {illustrations.map((illus, i)=>(
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<li key={i}>
                <img src={illus} onClick={()=>viewImg(illus, i, illustrations)} className="poem"/>
               </li >
        ))
        }
      </ul>
    </div>
    <div className="wrapped" style={{display: 'flex'}}>

    <video controls autoPlay muted>
      <source src={Video} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </video>
    </div>

    </div>
    </>
)
}

export default Ofidias; 