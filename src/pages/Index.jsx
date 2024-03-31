import { useState } from "react"


function Index () {

  const [slider, setSlider] = useState(1);

  return (
    <>
    <div className={`content`}>
    <ul id="main_slider" className="slider">
      <li className={`slide ${slider === 1 ? 'active' : ''}`} data-position="1">
        <div className="call_to_action">
          <h1 className="logo">OFIDIAS</h1>
          <h2>En otra piel serán las mismas marcas</h2>
          <p className="description">Premio Nacional de Poesía Tijuana, 2019. <br/>
            Candidata al Premio RAE, 2020. <br/> <br/>
            ¡<b>E-book de Ofidias</b> disponible en más de 700 tiendas digitales del mundo!
          </p>
          <a href="ofidias" target="_blank" className="button">Saber más</a>
        </div>
        <div className="slide_img" data-img="1"></div>
      </li>
      
            <li className={`slide ${slider === 2 ? 'active' : ''}`} data-position="2">
        <div className="call_to_action">
          {/* <!-- <div id="logo_002" className="logo_2_col"></div> --> */}
          <h1 className="logo">ANIMALEMAS</h1>
          {/* <!-- <h2>¡Compartamos esta experiencia con nuestras niñas y niños!</h2> --> */}
          <p className="description"><b>Animalemas es un libro de poemas y caligramas para niños lleno de musicalidad y sorpresas.</b> <br/> Un juego visual y sonoro que les permitirá descubrir las vocales y conocer algunos animales que se esconden en ellas mientras se divierten y se familiarizan con la poesía.</p>
          <a href="https://www.instagram.com/osadanteojos/" target="_blank" className="button">Saber más</a>
        </div>
        <div className="slide_img" data-img="4"></div>
      </li>
      
      <li className={`slide ${slider === 3 ? 'active' : ''}`} data-position="3">
        <div className="call_to_action">
          {/* <!-- <div id="logo_003" className="logo_2_col"></div> --> */}
          <h1 className="logo">UNA HISTORIA DEL AZUL</h1>
          {/* <!-- <h2>Diccionario de ecuatorianismos con citas</h2> --> */}
          <p className="description"><b>Una historia del azul de Jean-Michel Maulpoix</b> premio de Goncourt de la poésie 2022 en traducción de la poeta Valeria Guzmán Pérez. <br/>
           </p>
          <a href="https://circulodepoesia.com/libreria/una-historia-del-azul/" target="_blank" className="button">Saber más</a>
        </div>
        <div className="slide_img" data-img="3"></div>
      </li>

      <li className={`slide ${slider === 4 ? 'active' : ''}`} data-position="4">
        <div className="call_to_action">
          {/* <!-- <div id="logo_002" className="logo_2_col"></div> --> */}
          <h1 className="logo">DICCIONARIO DE<br/><i className="special_word_break">ECUATORIANISMOS</i> CON CITAS</h1>
          {/* <!-- <h2>Diccionario de ecuatorianismos con citas</h2> --> */}
          <p className="description"><b>Diccionario de ecuatorianismos con citas de Elking Araujo </b> constituye una obra muy importante en el panorama de la lexicografía ecuatoriana y tuve la fortuna de prologarlo.</p>
          <a href="https://latam.casadellibro.com/ebook-diccionario-de-ecuatorianismos-con-citas-ebook/9789978775592/12646507" target="_blank" className="button">Saber más</a>
        </div>
        <div className="slide_img" data-img="2"></div>
      </li>


      
    </ul>
    <ul id="sliderNav" className="dot_container">
      <li className={`dot slider_dot ${slider === 1 ? 'active' : ''}`} data-position="1" onClick={()=>{setSlider(1)}}></li>
      <li className={`dot slider_dot ${slider === 2 ? 'active' : ''}`} data-position="2" onClick={()=>{setSlider(2)}}></li>
      <li className={`dot slider_dot ${slider === 3 ? 'active' : ''}`} data-position="3" onClick={()=>{setSlider(3)}}></li>
      <li className={`dot slider_dot ${slider === 4 ? 'active' : ''}`} data-position="4" onClick={()=>{setSlider(4)}}></li>
    </ul>
    </div>
    </>
  )
}

export default Index
