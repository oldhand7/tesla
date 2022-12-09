import React from 'react'
import {Link} from 'react-router-dom'
import style from './MenuItems.module.css'
const MenuItems = props => {
  return (
    // <div>
      <ul className={`${style.menu} ${style.middle__menu}`}>
      <Link  to={`/`}>Home</Link>
      <Link  to={`/Gallery`}>Gallery</Link>
      <Link  to={`/Contact`}>Contact</Link>
      <Link  to={`/TechnicalSpecification`}>TechnicalSpecification</Link>
    </ul>
    // </div>
    
  )
}

export default MenuItems