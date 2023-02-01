import React from 'react'
import style from './TechSpec.module.scss'

const Aero = () => {
  return (
    <div className={style.aero}>
        <div className={style.image} >
          <img src='images/back.jpg'/>
        </div>
        <div className={style.text_content}>
            <h1>Designed for Performance and Aero Efficiency</h1>
            <p>As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.</p>
        </div>

    </div>
  )
}

export default Aero
