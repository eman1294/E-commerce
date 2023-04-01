import React from 'react'
import { Link } from 'react-router-dom'
import style from './footer.module.css'

function Footer() {
    return (
        <div className='bg-black pt-5'>
            <div className='container py-2'>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className={`${style.pic}`}>
                            <Link to="/"><img src="image/pic.jpg" alt="logo" width="200" height="200" /></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="contact">
                            <h5 className='text-warning'>Contact us</h5>
                            <p className={style.sicon}><span className='text-warning'><i className="fa-solid fa-envelope"></i></span> &nbsp;<a className='text-decoration-none text-white' href="mailto:E-shop@Gmail.com">E-Shop@Gmail.com</a></p> <br />
                            <p className={style.sicon}><span className='text-warning'><i className="fa-solid fa-phone"></i></span> &nbsp;<a className='text-decoration-none text-white' href="tel:0592527051">+972 592 52 7051</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                        <div className="para">
                            <h5 className='text-warning'>Who we are?</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, nostrum?</p></div>
                    </div>
                </div>
                <p className='py-2'>all Copyright &copy; for Website to <span className='text-warning'> Eng: Eman Mahmoud</span>  2023</p>
            </div>
        </div>
    )
}

export default Footer