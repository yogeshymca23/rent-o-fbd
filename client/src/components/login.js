

import { NavLink ,useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import Axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import("../CSS/login.css")

function Login() {
  let navigate = useNavigate()
  const [ownerName, setownerName] = useState('')
  const [password, setpassword] = useState('')
  const [debug, setdebug] = useState('')


  const login = () => {
    console.log("login function called");
    
    Axios.post('http://localhost:5000/ownerlogin', { ownerName, password })
      
      .then(res => {
        
        localStorage.setItem("token", res.data.token)
      })

    window.location.reload(false);
    
  }
  let config = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    }
  }

  
  useEffect(() => {
    Axios.get('http://localhost:5000/ownerdash', config)
      // .then(res=> res.json())
      .then(res => res.data.isLoggedIn ? navigate("/ownerdash") : null )

  }, [])


  return (

    <div>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
              ADMIN PANEL
              {debug}
            </div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input type="text" onChange={(e) => { setownerName(e.target.value) }} class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input type="password" onChange={(e) => { setpassword(e.target.value) }} class="form-control" i />
                  </div>

                  <div class="row form-group">
                    <div class="col-lg-12 loginbttm ">

                      <div class="col-lg-6 login-btm login-button">
                        <button type="submit" onClick={login} class="btn btn-outline-primary">LOGIN</button>
                      </div>
                      <div class="col-lg-6 login-btm login-text">
                        {/* <!-- Error Message --> */}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div className='col-12 white-font center' >
                      <label class="form-control-label">DON'T HAVE ANY ACCOUNT ?</label>
                    </div>
                  </div>
                  <div class="row">
                    <div className='col-12 center p-4'>

                      <NavLink to="/register" className="btn btn-outline-primary" role="button">REGISTER</NavLink>

                    </div>
                  </div>




                </form>
              </div>
            </div>


            <div class="col-lg-3 col-md-2"></div>

          </div>

        </div>






      </div>

    </div>

  );
}

export default Login;