import React from 'react'
import style from './TechSpec.module.scss'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.image_bg}>
                <picture>
                    <source srcSet="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero-mobile@2.jpg" media='(min-width: 420px) and (max-width: 999px)' />
                    <source srcSet="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero@2.jpg" media='(min-width: 1000px)' />
                    <img src="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero-mobile@2.jpg" alt="hero-mobile" style={{ height: "100%", width: "100%", objectFit: 'cover' }} />
                </picture>
            </div>
            <div className={style.text_content}>
                <header>
                    <h2>Roadster</h2>
                </header>
                <p data-paralax="hero-copy">​The quickest car in the world, with record-setting acceleration, range and performance.</p>
                <ul className={style.stats}>
                    <Row>
                        <Col md={3} sm={4} xs={4} style={{ padding: 0 }}>
                            <li className="stat stat-infos" >
                                <div className={style.top}>
                                    <div className={style.speedometer} style={{ backgroundImage: 'url(./images/speedometer.svg)' }}>
                                        <div className={style.speedometer_circle}>
                                            <div className={style.speedometer_circle_inner} style={{ backgroundImage: 'url(./images/speedometercircle_inner.svg)' }}></div>
                                        </div>
                                        <div className={style.speedometer_needle} style={{ backgroundImage: 'url(./images/speedometerneedle.svg)' }}></div>
                                    </div>
                                    <div style={{ fontSize: '35px' }}>
                                        1.9
                                        <span>s</span>
                                    </div>
                                </div>
                                <div className={style.info}>0-60&nbsp;mph</div>
                            </li>
                        </Col>
                        <Col md={3} sm={4} xs={4} style={{ padding: 0 }}>
                            <li className="stat stat-stars" >
                                <div className={style.top} style={{ fontSize: '35px' }}>
                                    <span>+</span>250<span>mph</span>
                                </div>
                                <div className={style.info}>Top Speed</div>
                            </li>
                        </Col>
                        <Col md={3} sm={4} xs={4} style={{ padding: 0 }}>

                            <li className="stat stat-miles" >
                                <div className={style.top} style={{ fontSize: '35px' }}>
                                    620<span>mi</span>
                                </div>
                                <div className={style.info}>Range</div>
                            </li>
                        </Col>
                        <Col md={3} sm={12} xs={12} className={style.reserve_btn} style={{ padding: 0 }}>

                            <li className="stat stat-cta" >
                                <div className="cta">
                                    <a href="/roadster/reserve" title="Reserve your Tesla Roadster now" className={style.g_order_button} style={{ margin: 'auto', width: '100%' }}>
                                        Reserve Now
                                    </a>
                                </div>
                            </li>
                        </Col>
                    </Row>
                </ul>
                <div className={style.arrow_down} style={{ backgroundImage: 'url(./images/down-arrow.svg)' }}></div>
            </div>
            {/* </Fade> */}

        </div>
    )
}

export default Hero
