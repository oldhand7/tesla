import React from 'react'
import style from './TechSpec.module.scss'

const Interio = () => {
    return (
        <div className={style.interio}>
            <div className={style.image} >
                <img src='images/interior.jpg' />
            </div>
            <div className={style.text_content}>
                <h1>Interior</h1>
                <p>The first supercar to set every performance record and still fit seating for four.</p>
            </div>
        </div>
    )
}

export default Interio
