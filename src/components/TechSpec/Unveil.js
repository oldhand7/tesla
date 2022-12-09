import React from 'react'
import style from'./TechSpec.module.scss'

const Unveil = () => {
    return (
        <div className={style.unveil}>
            <div className={style.image}>
                <div className={style.video_wrapper}>
                    <iframe className="video" src="https://player.vimeo.com/video/249563752?color=ff0000&title=0&byline=0&portrait=0&autoplay=0&autopause=0" frameBorder="0"  allowFullScreen="" aria-label="Roadster Unveil"></iframe>
                </div>
            </div>
            <div className={style.text_content}>
                <p>Watch the Roadster Unveil &middot; November 16, 2017</p>
            </div>
        </div>
    )
}

export default Unveil
