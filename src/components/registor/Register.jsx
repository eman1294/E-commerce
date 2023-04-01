import React from 'react'
import Joi from 'joi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    let navigate = useNavigate();
    let [user, setUser] = useState({ name: '', email: '', password: '', cPassword: '' });
    function getUserdata(e) {
        let myUser = user;
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
    }
    let [err, setErr] = useState([]);

    async function submit(e) {
        e.preventDefault();
        let result = validation(user);
        // if there is error
        if (result.error) {
            setErr(result.error.details);
            console.log("error")

        }
        else { //if every thing ok send user to back end
            let { data } = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup", user);
            console.log(data)
            if (data.message === "success") {
                navigate('/login')
            }
        }

    }
    function validation(user) {
        let schema = Joi.object({
            name: Joi.string().min(3).max(20).required(),
            email: Joi.string().email({ tlds: { allow: false } }).required(),
            password: Joi.string().required(),
            cPassword: Joi.valid(Joi.ref("password")).required()
        });
        return schema.validate(user, { abortEarly: false });
    }
    return (
        <div className='container'>
            {err.map((er, index) =>
                <div className="alert alert-danger text-danger w-50 m-auto my-2" key={index}>
                    {er.message}
                </div>
            )}
            <div className="title">
                <h3 className='py-3 text-warning'>Sign up</h3>
            </div>
            <form onSubmit={submit} className="pt-5 border border-warning mb-5 w-50 m-auto">
                <div className="mb-3 w-50 m-auto">
                    <input type="text" name='name' className="form-control  bg-transparent border-warning text-white" id="exampleInputName" aria-describedby="nameHelp" onChange={getUserdata} placeholder="Enter You'r Name" />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <input type="email" name='email' className="form-control  bg-transparent border-warning text-white" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getUserdata} placeholder="Enter E-mail" />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <input type="password" name='password' className="form-control  bg-transparent border-warning text-white" id="exampleInputPassword1" onChange={getUserdata} placeholder="Enter Password" />
                </div>
                <div className="mb-3 w-50 m-auto">
                    <input type="password" name='cPassword' className="form-control  bg-transparent border-warning text-white" id="exampleInputPassword2" onChange={getUserdata} placeholder="Confirm Password" />
                </div>
                <div className="ask">
                    <p className='fs-10'>already have account? <span><Link to="/Login" className='text-warning'>Log in and feel free to shop</Link></span></p>
                </div>
                <button type="submit" className="btn btn-warning my-4">Sign up</button>
            </form>
        </div>
    )
}

export default Register