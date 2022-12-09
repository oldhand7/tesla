import React from 'react'
import style from './TechSpec.module.scss'

const Spec = () => {
    return (
        <div className={style.specs}>
            <ul>
                <li>
                    <div className="title bold">Base Specs</div>
                    <div className="value"></div>
                </li>
                <li>
                    <div className="title">Acceleration 0-60&nbsp;<em className="measurement-unit">mph</em></div>
                    <div className="value">1.9 sec</div>
                </li>
                <li>
                    <div className="title">Acceleration 0-100&nbsp;<em className="measurement-unit">mph</em></div>
                    <div className="value">4.2&nbsp;sec</div>
                </li>
                <li>
                    <div className="title">Acceleration 1/4&nbsp;<em className="measurement-unit">mile</em></div>
                    <div className="value">8.8&nbsp;sec</div>
                </li>
                <li>
                    <div className="title">Top Speed</div>
                    <div className="value">Over&nbsp;250&nbsp;mph</div>
                </li>
                <li>
                    <div className="title">Wheel Torque</div>
                    <div className="value">10,000&nbsp;Nm</div>
                </li>
                <li>
                    <div className="title">Mile Range</div>
                    <div className="value">620&nbsp;miles</div>
                </li>
                <li>
                    <div className="title">Seating</div>
                    <div className="value">4</div>
                </li>
                <li>
                    <div className="title">Drive</div>
                    <div className="value">All-Wheel Drive</div>
                </li>
                <li>
                    <div className="title">Base Reservation</div>
                    <div className="value">$50,000</div>
                </li>
            </ul>
        </div>
    )
}

export default Spec;
