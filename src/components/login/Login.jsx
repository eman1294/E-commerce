import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Joi from 'joi';

function Login(props) {
  let navigate = useNavigate();
  let [user, setUser] = useState({ email: '', password: '' });
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
      console.log(result.error.details);

    }
    else { //if every thing ok send user to back end
      let { data } = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin", user);
      console.log(data)
      if (data.message === "success") {
        console.log("ok");
      localStorage.setItem("userData",data.token);
      props.getUserData();
        navigate('/home');

      }
    }

  }
  function validation(user) {
    let schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().required()
    });
    return schema.validate(user, { abortEarly: false });
}

  return (
    <>
      <div className='container'>
        {err.map((er, index) =>
          <div className="alert alert-danger text-danger w-50 m-auto my-2" key={index}>
            {er.message}
          </div>
        )}
        <div className="title">
          <h3 className='py-3 text-warning'>Log in</h3>
        </div>
        <form onSubmit={submit} className="pt-5 border border-warning mb-5 w-50 m-auto">

          <div className="mb-3 w-50 m-auto">
            <input type="email" name='email' className="form-control  bg-transparent border-warning text-white" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter E-mail" onChange={getUserdata} />
          </div>
          <div className="mb-3 w-50 m-auto">
            <input type="password" name='password' className="form-control  bg-transparent border-warning text-white" id="exampleInputPassword1" placeholder="Enter Password" onChange={getUserdata} />
          </div>
          <div className="ask">
            <p className='fs-10'>New to E-shop? <span><Link to="/Register" className='text-warning'>Create an account</Link></span></p>
          </div>
          <button type="submit" className="btn btn-warning my-4">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login