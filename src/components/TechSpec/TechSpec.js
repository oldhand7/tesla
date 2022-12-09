import React, { useState, useEffect, useRef } from 'react'
import { Fade } from "react-awesome-reveal";
import Hero from './Hero'
import Navbar from '../Navbar/Navbar'
import VideoAds from './VideoAds'
import Spec from './Spec'
import Aero from './Aero'
import Interio from './Interio'
import Topview from './Topview'
import Unveil from './Unveil'
import NavbarBottom from '../Navbar/NavbarBottom'



import style from './TechSpec.module.scss'
import './responsive.css'


const TechSpec = () => {
    const listInnerRef = useRef();
    const [imgSource, setImgSource] = useState("/images/top2.jpg");
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    
    useEffect(() => {
        
        window.addEventListener('wheel', listenToScroll);
        return () =>
            window.removeEventListener('wheel', listenToScroll);
    }, [])
    const listenToScroll = () => {
        setWindowWidth(window.innerWidth);
        console.log("width--------------"+windowWidth)
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
        console.log(scrollTop, scrollHeight, clientHeight);
        let offset = (scrollHeight - scrollTop-clientHeight);
        console.log(offset);
        if ((offset <= 2000&&windowWidth>800)||(offset<=1400&&windowWidth<800)) {
            setImgSource("/images/top1.jpg");
            console.log("True-------"+imgSource);

        } else {
            setImgSource("/images/top2.jpg");
            console.log("False-------"+imgSource);

        }
    }
    return (
        <div className={style.container} ref={listInnerRef} id="spec_page">
            <Navbar />
            <Hero />
            <Fade direction='up' fraction={0.4} triggerOnce>
                <VideoAds />
            </Fade>
            <Fade direction='up' fraction={0.4} triggerOnce className={style.spec_fade} >

                <Spec />
            </Fade>
            <Fade direction='up' fraction={0.4} triggerOnce style={{ position: 'relative' }}>

                <Aero />
            </Fade>
            <Fade direction='up' fraction={0.4} triggerOnce className={style.spec_fade}>

                <Interio />
            </Fade>
            <Fade direction='up' fraction={0.4} triggerOnce style={{ position: 'relative' }}>

                <Topview overlap={imgSource}/>
            </Fade>
            <Fade direction='up' fraction={0.4} triggerOnce>

                <Unveil />
            </Fade>
            <Fade direction='up' fraction={0.4} triggerOnce>

                <div className={style.vline}></div>

                <div className={style.bottom_cta}>
                    <a href="/roadster/reserve" title="Reserve your Tesla Roadster now" className={style.g_order_button}>
                        Reserve Now
                    </a>
                    <a href="/updates" title="Get Newsletter" className={style.g_order_button}>
                        Get Newsletter
                    </a>
                </div>
                <div className={style.lastP}>
                    <p className={style.tds_text_caption} style={{ margin: 'inherit', textAalign: 'center' }}>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. Learn more about Standard Connectivity and any limitations</p>
                </div>
            </Fade>
            <NavbarBottom belongTo={'Tech'} />
        </div>
    )
}

export default TechSpec
