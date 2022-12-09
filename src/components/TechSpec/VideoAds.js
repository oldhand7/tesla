import React from 'react'
import style from './TechSpec.module.scss'

const VideoAds = () => {
    return (
        <div className={style.video_ads}>
            <div className={style.video_mask}>
                <video 
                    autoPlay={true}
                    loop={true}
                    muted="" playsInline="">
                    <source src='https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329'
                    type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default VideoAds;
