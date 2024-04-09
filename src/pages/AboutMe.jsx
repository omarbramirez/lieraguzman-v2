import Collab01 from '../assets/images/collabs/collab_001.png'
import Collab02 from '../assets/images/collabs/collab_002.png'
import Collab03 from '../assets/images/collabs/collab_003.png'
import Collab04 from '../assets/images/collabs/collab_004.png'
import Collab05 from '../assets/images/collabs/collab_005.png'
import Collab06 from '../assets/images/collabs/collab_006.png'
import Collab07 from '../assets/images/collabs/collab_007.png'

function AboutMe(){
return(
    <>
<div className="content">
            <div className="_3_col bio">
                <div id="profile_img" className="img"></div>
                <p className="p_3_col">
                    Poeta, traductora, docente y lexicógrafa, nacida en Rusia, de madre nicaragüense y padre ecuatoriano; es residente mexicana. Dirige el proyecto Mujeres al oído, audios de escritoras ecuatorianas contemporáneas. Actualmente trabaja para la Academia Ecuatoriana de la Lengua y trabajó para la Academia Mexicana de la Lengua. Las obsesiones recurrentes en su escritura son el lenguaje, el feminismo, los animales y la memoria. Su poética es sucinta y profunda.
                </p>
            </div>

            <div className="_2_col">
                <div id="career" className="wrap_2_col wrap_1">
                    <h1 className="title_2_col">Yo he aprendido mucho, muchísimo impartiendo clase.</h1>
                    <p className="p_2_col">
                        Me siento muy orgullosa cuando veo a mis alumnos cumpliendo sus sueños en todo su esplendor y recuerdo que tuve la fortuna de conocerlos y, con suerte, de legarles algo. Los trato siempre con respeto y considero que la enseñanza es sobre todo un acto de amor. Se  transfiere la pasión.
                        <br /><br /> Y, siguiendo a Lacán, “El maestro no enseña ex cátedra una ciencia ya construida, da la respuesta cuando los alumnos están a punto de encontrarla”.
                    </p>
                </div>
                <div className="wrap_2_col wrap_2">
                    <div id="img_002" className="img img_2_col"></div>
                    <div id="img_003" className="img img_2_col" style={{ backgroundPosition: 'top' }}></div>
                </div>
            </div>
            <div className="list">
            <h1 className="list-title">Temas de interés profesionales</h1>
            <br />
            <p className="list-element">Lenguaje inclusivo</p>
            <p className="list-element">Traducción</p>
            <p className="list-element">Medios alternativos de difusión de la literatura: espacios sonoros, audiolibros, libros digitales, libros interactivos</p>
            <p className="list-element">Diccionarios</p>
            <p className="list-element">Literatura escrita por mujeres</p>
            <p className="list-element">Feminismo</p>
            <p className="list-element">Escritores ecuatorianos</p>
            <p className="list-element">Escritores mexicanos</p>
            <p className="list-element">Creación literaria: autoría, escritura, enseñanza</p>
            <p className="list-element">Docencia: lingüística y lingüística para psicoanalistas</p>
            <p className="list-element">Ecuatorianismos</p>
            <p className="list-element">Mexicanismos</p>
            <p className="list-element">Gramáticas antiguas</p>
            <p className="list-element">Libros</p>
            <p className="list-element">Lengua española</p>
        </div>

        <div id="collabs">
            <h1 className="title_2_col">Colaboraciones</h1>

            <div className="_2_col _2_col_collabs">
                <div className="wrap_2_col brands wrap_2">
                    <h3 className="subtitle_2_col">Mujeres al Oído</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab02}id="logo_005" className="logo_2_col" />
                        Directora, Locutora y Curadora
                    </p>
                </div>

                <div className="wrap_2_col brands wrap_2">
                    <h3 className="subtitle_2_col">La Parada Producciones</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab04} id="logo_007" className="logo_2_col" />
                        Locutora y Gestora cultural
                    </p>
                </div>
            </div>

            <div className="_2_col _2_col_collabs">
                <div className="wrap_2_col brands wrap_1">
                    <h3 className="subtitle_2_col">Academia Ecuatoriana de la Lengua</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab03} id="logo_006" className="logo_2_col" />
                        Lexicógrafa (2018 a la fecha)
                    </p>
                </div>

                <div className="wrap_2_col brands wrap_1">
                    <h3 className="subtitle_2_col">Academia Mexicana de la Lengua</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab05} id="logo_008" className="logo_2_col" />
                        Lexicógrafa (2016-2021)
                    </p>
                </div>
            </div>

            <div className="_2_col _2_col_collabs">
                <div className="wrap_2_col brands wrap_1">
                    <h3 className="subtitle_2_col">Osa de Anteojos: Sello editorial de Grado Cero</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab01} id="logo_004" className="logo_2_col" />
                        Editora
                    </p>
                </div>
            </div>

            <div className="_2_col _2_col_collabs">
                <div className="wrap_2_col brands wrap_2">
                    <h3 className="subtitle_2_col">Colegio de Lingüística y Literatura Hispánica (BUAP)</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab06} id="logo_009" className="logo_2_col" />
                        Teorías Lingüísticas (2018) y Lexicografía (2019)
                    </p>
                </div>
            </div>

            <div className="_2_col _2_col_collabs">
                <div className="wrap_2_col brands wrap_1">
                    <h3 className="subtitle_2_col">Escuela de la Letra Psicoanalítica</h3>
                    <p className="p_2_col p_2_col_collabs">
                        <img alt="logo" src={Collab07} id="logo_010" className="logo_2_col" />
                        Lingüística para psicoanalistas (2018 CDMX; 2019 Puebla)
                    </p>
                </div>
            </div>
        </div>
        </div>
    </>
)
}

export default AboutMe;