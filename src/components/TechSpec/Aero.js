import React from 'react'
import style from './TechSpec.module.scss'

const Aero = () => {
  return (
    <div className={style.aero}>
        <div className={style.image} >
          <img src='https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/back-mobile@2.jpg'/>
        </div>
        <div className={style.text_content}>
            <h1>Designed for Performance and Aero Efficiency</h1>
            <p>As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.</p>
        </div>

    </div>
  )
}

export default Aero
