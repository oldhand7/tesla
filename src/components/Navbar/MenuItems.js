import React from 'react'
import {Link} from 'react-router-dom'
import style from './MenuItems.module.css'
const MenuItems = props => {
  return (
    <ul className={`${style.menu} ${style.middle__menu}`}>
      {/* {props.products &&
        props.products.map((el, i) => {
          return <Link key={i} to={`/${el}`}>{el}</Link>
        })} */}
        <Link  to={`/`}>Home</Link>
        <Link  to={`/Gallery`}>Gallery</Link>
        <Link  to={`/Contact`}>Contact</Link>
        <Link  to={`/TechnicalSpecification`}>TechnicalSpecification</Link>
    </ul>
  )
}

export default MenuItems