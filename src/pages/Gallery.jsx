import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Img01 from '../assets/images/gallery/maríajosé_jeanjuárez_001.jpg'
import Img02 from '../assets/images/gallery/maríajosé_jeanjuárez_002.jpg'
import Img03 from '../assets/images/gallery/maríajosé_jeanjuárez_003.jpg'
import Img04 from '../assets/images/gallery/maríajosé_jeanjuárez_004.jpg'
import Img05 from '../assets/images/gallery/maríajosé_jeanjuárez_005.jpg'
import Img06 from '../assets/images/gallery/maríajosé_jeanjuárez_006.jpg'
import Img07 from '../assets/images/gallery/maríajosé_jeanjuárez_007.jpg'
import Img08 from '../assets/images/gallery/maríajosé_jeanjuárez_008.jpg'
import Img09 from '../assets/images/gallery/maríajosé_jeanjuárez_009.jpg'
import Img10 from '../assets/images/gallery/juancarlos_moralesmejia_012.jpg'
import Img11 from '../assets/images/gallery/juancarlos_moralesmejia_013.jpg'
import Img12 from '../assets/images/gallery/juancarlos_moralesmejia_014.jpg'
import Img13 from '../assets/images/gallery/juancarlos_moralesmejia_015.jpg'
import Img14 from '../assets/images/gallery/juancarlos_moralesmejia_016.jpg'
import { useState, useEffect  } from "react"

function Gallery (){
    const images = [Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09,Img10,Img11,Img12,Img13,Img14];

    const[data, setData] = useState({img: '', i:0})
    const [loading, setLoading] = useState(true);

    const viewImage = (img, i)=>{
        setData({img, i})
    }
    const imgAction = (action) =>{
        let i =data.i
        action === 'next-img' && images[i+1] ? setData({img: images[i+1], i: i+1}) :
        action === 'prev-img' && images[i-1] ? setData({img: images[i-1], i: i-1}) :
        setData({img: '', i: 0})           
    }

    useEffect(() => {
        const loadImage = (image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve();
                img.onerror = (err) => reject(err);
            });
        }

        const loadImages = async () => {
            try {
                await Promise.all(images.map(image => loadImage(image)));
                setLoading(false);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
return(
    <>
    {loading && (
                <div id="loader" className="loader-wrapper">
                    <span className="loader"><span className="loader-inner"></span></span>
                </div>
            )}

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
        overflow: 'hidden'
    }}>
        <a style={{position: 'absolute', top: '10px', right:'10px', fontSize: 'var(--text-display)', cursor: 'pointer'}} onClick={()=> imgAction('close')}>ⓧ</a>
        <a style={{margin:'2%', fontSize: 'var(--text-display)', cursor: 'pointer'}} onClick={()=> imgAction('prev-img')}>◀</a>
        <img src={data.img} style={{width: 'auto', maxWidth: '80%', objectFit: 'contain', height: '90%'}} />
        <a style={{margin:'2%', fontSize: 'var(--text-display)', cursor: 'pointer'}} onClick={()=> imgAction('next-img')}>▶</a>
    </div>

    }
 <body>

        <div className="content content-gallery">
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor: "pointer"}}
                            alt=""
                            onClick={()=>viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
      </body>
</>
)
}

export default Gallery