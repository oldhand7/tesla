import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import NavbarBottom from '../Navbar/NavbarBottom';


import style from './Contact.module.scss'
const image = 'images/cars.jpeg'


const ContactUs = () => {

  const [ismobile, setIsmobile] = useState(false);
  useEffect(() => {
    listenTosize();
    window.addEventListener('resize', listenTosize);
    return () =>
      window.removeEventListener('resize', listenTosize);

  }, [])
  const listenTosize = () => {
    const windwidth = window.innerWidth;
    console.log(windwidth);
    if (windwidth < 500) {
      setIsmobile(true)
      console.log(ismobile)
    }
    else {
      setIsmobile(false)
      console.log(ismobile)

    }

  }
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <div style={{ height: '45%' }}>
        <img src={image} className={style.back_img} alt="" />
      </div>
      <div  style={{ height: '55%' }}>
        {ismobile && <SplitPane split='vertical' className={style.contact_container}>
          <Pane initialSize="0%" className={style.contact_box}>
            <ul className={style.info} >
              <li><h1>Gem Paver Systems</h1></li>
              <li>Adress:9845 Northwest 118th Wy, Medley, FL 33178</li>
              <li>Phone:+1 202-918-2132</li>
              <li>Email:Foo@foo.com</li>
            </ul>
          </Pane>
          <Pane initialSize='100%'>
            <iframe title='location_info' className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.6179144835073!2d-80.36388338433792!3d25.877312738444573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb639152d361%3A0x8fcbf266ae7097d9!2s9845%20NW%20118th%20Way%2C%20Medley%2C%20FL%2033178%2C%20USA!5e0!3m2!1sen!2sru!4v1670124541499!5m2!1sen!2sru" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Pane>
        </SplitPane>}
        {
          !ismobile &&
          <SplitPane split='vertical' className={style.contact_container}>
            <Pane initialSize="30%" className={style.contact_box}>
              <ul className={style.info} >
                <li><h1>Gem Paver Systems</h1></li>
                <li>Adress:9845 Northwest 118th Wy, Medley, FL 33178</li>
                <li>Phone:+1 202-918-2132</li>
                <li>Email:Foo@foo.com</li>
              </ul>
            </Pane>
            <Pane initialSize='70%'>
              <iframe title='location_info' className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.6179144835073!2d-80.36388338433792!3d25.877312738444573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb639152d361%3A0x8fcbf266ae7097d9!2s9845%20NW%20118th%20Way%2C%20Medley%2C%20FL%2033178%2C%20USA!5e0!3m2!1sen!2sru!4v1670124541499!5m2!1sen!2sru" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Pane>
          </SplitPane>
        }
      </div>

      <NavbarBottom />
    </div>
  )
}

export default ContactUs;
