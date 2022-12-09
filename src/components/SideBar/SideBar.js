import React from 'react'
import CloseWrapper from '../UI/CloseWrapper'
import style from './Sidebar.module.css'
import {Link} from 'react-router-dom'

const SideBar = props => {
  const windowSize = window.innerWidth;
  return (
    <div className={`${style.container} ${style[props.className]}`}>
      <CloseWrapper onClick={props.closeSidebarHandler} />
      <ul className={style.sidebar}>
        {windowSize < 1198 &&
          props.products &&
          props.products.map((el, i) => {
            return <Link  to={i==0?'/':`/${el}`} key={i}>{el}</Link>
          })
        }
        {windowSize < 1198 &&
          props.options &&
          props.options.map((el, i) => {
            return <li key={i}><a href={`/${el}`}>{el}</a></li>
          })
        }
      </ul>
    </div>
  )
}

export default SideBar