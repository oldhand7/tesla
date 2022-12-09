import React from 'react'
import style from './TechSpec.module.scss'


const Topview = (props) => {
    return (
        <div className={style.topview}>
            <div className={style.image}>
                <img src={props.overlap} />
            </div>
            <div className={style.text_content}>
                <h1>Glass Roof</h1>
                <p>A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.</p>
            </div>
        </div>
    )
}

export default Topview;
