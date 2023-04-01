import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black ">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src="image/logo.png" alt="logo" width="80" height="80" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {props.userd ?
              <>
                <ul className="navbar-nav gap-4 w-50">
                  <li className="nav-item">
                    <Link className="nav-link active text-warning" aria-current="page" to='/home'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link text-white ${style.nav_link}`} to="/products">Products</Link>
                  </li>
                  <li className="nav-item">
                    <span className={`nav-link text-white ${style.nav_link}`} onClick={props.logout}>Log out</span>
                  </li>
                </ul>
              </> : null
            }
            {props.userd ? <>
            </> :
              <ul className="navbar-nav gap-4 w-100">
                <li className="nav-item">
                  <Link className={`nav-link text-white ${style.nav_link}`} to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-white ${style.nav_link}`} to="/login">Log in</Link>
                </li>
              </ul>
            }

            <div className={style.buy}>
              <Link to="/home" className='btn btn-warning'><span><i className="fa-solid fa-cart-shopping"></i></span> Buy Now <span></span></Link>
            </div>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar