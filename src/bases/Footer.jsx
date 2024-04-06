

function Footer ({activeMenu}) {

  const toTheTop = ()=>{
    window.scrollTo(0, 0);
  }

    return (
      <>
 <footer id="footer" className={`${activeMenu}`}>
      <ul className="module_001">
        <li>
          <ul id="brands">
            <li className="brands_icon"><a target="_blank" id="linkedin" className="social_media" href="https://www.linkedin.com/in/valeria-guzm%C3%A1n-p%C3%A9rez-5715a4242/"></a></li>
            <li className="brands_icon"><a target="_blank" id="facebook" className="social_media" href="https://www.facebook.com/leriaguzmanperez"></a></li>
            <li className="brands_icon"><a target="_blank" id="instagram" className="social_media" href="https://www.instagram.com/lieraguzmanvz/"></a></li>
          </ul>
        </li>
        <li><a className="footer_element">Términos de Privacidad</a></li>
      </ul>

      <a id="logo_footer" className={`${activeMenu}`} onClick={toTheTop}>VALERIA GUZMÁN</a>

      <ul className="module_002">
        <li><a id="mail" className="footer_element" href="mailto:valeria_guzman@hotmail.com">valeria_guzman@hotmail.com</a></li>
        <li id="credits">
          <p className="footer_element text_footer">@2022 <a className="footer_element" > LIERAGUZMAN.COM </a> </p>
          <p id="slash" className="footer_element text_footer"> | creada por </p>
          <a target="_blank" className="footer_element" href="https://main--omarbramirez.netlify.app/"> Omar Ramírez</a>
        </li>
      </ul>
    </footer>
      </>
    )
  }
  
  export default Footer
  