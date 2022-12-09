import React,{useState,useEffect} from 'react'
import ImageGallery from 'react-image-gallery'
import {Link} from 'react-router-dom'
import NavbarBottom from '../Navbar/NavbarBottom';

import "react-image-gallery/styles/css/image-gallery.css";
import style from './Gallery.module.scss'
import './Gallery.module.scss'

const image1 = 'images/1.jpg';
const image2 = 'images/2.jpg';
const image3 = 'images/3.jpg';
const image4 = 'images/4.jpg';
const image5 = 'images/5.jpg';
const image6 = 'images/6.jpg';


const images = [
    {
        original: image1,
        thumbnail: image1,
    },
    {
        original: image2,
        thumbnail: image2,
    },
    {
        original: image3,
        thumbnail: image3,
    },
    {
        original: image5,
        thumbnail: image5,
    },
    {
        original: image4,
        thumbnail: image4,
    },
    {
        original: image6,
        thumbnail: image6,
    }
];

const Gallery = () => {
    const [ismobile, setIsmobile] = useState(false);
  useEffect(() => {
    listenTosize();
    window.addEventListener('resize', listenTosize);
    return () =>
      window.removeEventListener('resize', listenTosize);

  }, [])
  const listenTosize = () => {
    const windwidth = window.innerWidth;
    // console.log(windwidth);
    if (windwidth < 500) {
      setIsmobile(true)
    //   console.log(ismobile)
    }
    else {
      setIsmobile(false)
    //   console.log(ismobile)

    }

  }
    return (
        <div className={style.gcontainer}>
            <ImageGallery items={images} thumbnailPosition={ismobile==true?'bottom':'left'} showFullscreenButton={false} showPlayButton={false} showNav={false} className={style.gallery}/>
            <Link to="/" className={style.close}>&times;</Link>
            <NavbarBottom/>
        </div>
    )
}

export default Gallery
