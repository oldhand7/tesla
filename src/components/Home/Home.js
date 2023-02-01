import React, { useRef, useState, useEffect } from 'react'
import Section from '../Section/Section'
import style from './Home.module.css'
import Navbar from '../Navbar/Navbar'

import NavbarBottom from '../Navbar/NavbarBottom'
import { Fade } from "react-awesome-reveal";


function Home() {
  // const listInnerRef = useRef();
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {

  //   window.addEventListener('wheel', listenToScroll);
  //   return () =>
  //     window.removeEventListener('wheel', listenToScroll);
  // }, [])
  // const listenToScroll = () => {
  //   const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //   console.log(scrollTop, scrollHeight, clientHeight);
  //   let offset = (scrollHeight - scrollTop);
  //   console.log(offset);
  //   if (offset ==  clientHeight) {
  //     console.log('yes');
  //     setIsVisible(true);
  //   } else {
  //     console.log('no');
  //     setIsVisible(false);
  //   }
  // }
  const bgImgs = {
    'm3': ['images/M3-Homepage-Mobile-LHD.jpeg',
      'images/M3-Homepage-Desktop-LHD.jpeg'],
    'my': ['images/3304be3b-dd0a-4128-9c26-eb61c0b98d61.jpeg',
      'images/Desktop-ModelY.jpeg'],
    'ms': ['images/Homepage-Model-S-Mobile-LHD.jpeg',
      'images/Homepage-Model-S-Desktop-LHD.jpeg'],
    'mx': ['images/Homepage-Model-X-Mobile-LHD.jpeg',
      'images/Homepage-Model-X-Desktop-LHD.jpeg'],
    'sp': ['images/_25-HP-SolarPanels-M.jpeg',
      'images/_25-HP-SolarPanels-D.jpeg'],
    'sr': ['images/Homepage-SolarRoof-Mobile-Global.jpeg',
      'images/Homepage-SolarRoof-Desktop-Global.jpeg'],
    'ac': ['images/69095129-86c5-4f6c-a77a-740ceac04e82.jpeg',
      'images/dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg']
  };

  return (
    <div className={style.container} >
      <Navbar />
      <Section title="Model 3"
        description=""
        backgroundImage={bgImgs['m3']}
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        first={true}
      />
      <Section title="Model Y"
        description=""
        backgroundImage={bgImgs['my']}
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        id="second"
      />
      <Section title="Model S"
        description=""
        backgroundImage={bgImgs['ms']}
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Model X"
        description=""
        backgroundImage={bgImgs['mx']}
        linkDes="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage={bgImgs['sp']}
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage={bgImgs['sr']}
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section title="Accessories"
        backgroundImage={bgImgs['ac']}
        leftButton="Shop Now"
        last="true"
      />
      <Fade direction='up' delay={600}>
        <NavbarBottom />
      </Fade>



    </div>
  )
}

export default Home