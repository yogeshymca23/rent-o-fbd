
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import { NavLink } from 'react-router-dom';
import("../CSS/login.css")


function Register() {
  const [ownerName, setownerName] = useState('')
  const [password, setpassword] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setemail] = useState('')



  const register = () => {
    console.log("registered function called");
    // setdebug("hello");
    Axios.post('http://localhost:5000/owner', { ownerName, password, phoneNumber, email })
    // .then(res => {
    //     return res.json()
    // })


    window.location.reload(false);

  }


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
            </div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input type="text" onChange={(e) => { setownerName(e.target.value) }} class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">EMAIL</label>
                    <input type="email" onChange={(e) => { setemail(e.target.value) }} class="form-control" i />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PHONE NUMBER</label>
                    <input type="number" onChange={(e) => { setphoneNumber(e.target.value) }} class="form-control" i />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input type="password" onChange={(e) => { setpassword(e.target.value) }} class="form-control" i />
                  </div>

                  <div class="row form-group">
                    <div class="col-lg-12 loginbttm ">

                      <div class="col-lg-6 login-btm login-button">
                        <button type="submit" class="btn btn-outline-primary" onClick={register}>SIGN-UP</button>
                      </div>
                      <div class="col-lg-6 login-btm login-text">
                        {/* <!-- Error Message --> */}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div className='col-12 white-font center' >
                      <label class="form-control-label">ALREADY REGISTERED ?</label>
                    </div>
                  </div>
                  <div class="row">
                    <div className='col-12 center p-4'>

                      <NavLink to="/login" className="btn btn-outline-primary" role="button">Login</NavLink>

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

export default Register;