import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={style.header}>
      <div className={style.title}>
      <div className={style.head_title}>
        <h1 className={`${style.htitle}`}>Whatever you want in one click</h1>
      </div>
      <div className={`${style.shop_button}`}>
        <Link to="/home" className='btn btn-warning text-dark'><span><i className="fa-solid fa-cart-shopping"></i></span> Shop Now</Link>
      </div>
      </div>

    </header>
  )
}

export default Header