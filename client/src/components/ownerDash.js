import { NavLink, useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
function OwnerDash() {
    let navigate = useNavigate()

    const [ownerName, setownerName] = useState('')

    const [ownerID, setownerID] = useState('sjkfvhjsf')
    const [title, settitle] = useState('')
    const [rate, setrate] = useState('')
    const [address, setaddress] = useState('')
    const [furnishing, setfurnishing] = useState('')
    const [security, setsecurity] = useState('')
    const [age, setage] = useState('')
    const [parking, setparking] = useState('')
    const [floor, setfloor] = useState('')
    const [map, setmap] = useState('')
    



    let config = {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        }
    }

    useEffect(() => {
        Axios.get('http://localhost:5000/ownerdash', config)
            // .then(res=> res.json())
            .then(res => res.data.isLoggedIn ? setownerName(res.data.name) : console.log("helllo ji fail hogya"))

    }, [])

    const submit = () => {
        
        
        Axios.post('http://localhost:5000/house', { ownerID ,title, rate, address , furnishing , security, age , parking , floor , map })
        
    
        navigate("/")
        window.location.reload(false);
    
      }
    


    return (

        <>
            <div class="container container-card  w-50 bg-light px-3 ">
                <h1 class=" col center my-5 py-2">Welcome Mr. {ownerName}</h1>


            </div>

            <div class="container container-card  w-75 bg-light px-3 py-5 ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-2"></div>
                        <div class="col-lg-8 col-md-8 mt-0 login-box">
                            <div class="col-lg-12 login-key">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                                RENT YOUR HOUSE
                            </div>

                            <div class="col-lg-12 px-4 login-form">
                                <div class="col-lg-12 login-form">
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">SIZE OF HOUSE ( 1BHK , 2BHK , 3BHK )</label>
                                            <input type="text" onChange={(e) => { settitle(e.target.value) }} class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">RENT PRICE</label>
                                            <input type="number" onChange={(e) => { setrate(e.target.value) }} class="form-control" i />
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-control-label">ADDRESS</label>
                                            <input type="text" onChange={(e) => { setaddress(e.target.value) }} class="form-control" i />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">FURNISHING</label>
                                            <input type="text" onChange={(e) => { setfurnishing(e.target.value) }} class="form-control" i />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">SECURITY MONEY</label>
                                            <input type="number" onChange={(e) => { setsecurity(e.target.value) }} class="form-control" i />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">AGE OF HOUSE</label>
                                            <input type="number" onChange={(e) => { setage(e.target.value) }} class="form-control" i />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">PARKING</label>
                                            <input type="text" onChange={(e) => { setparking(e.target.value) }} class="form-control" i />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">NO. OF FLOOR ( # out of # )</label>
                                            <input type="text" onChange={(e) => { setfloor(e.target.value) }} class="form-control" i />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">MAP ( link )</label>
                                            <input type="text" onChange={(e) => { setmap(e.target.value) }} class="form-control" i />
                                        </div>

                                        {/* <div class="row form-group">
                                            <div class="col-lg-12 loginbttm ">

                                                <div class="col-lg-6 login-btm login-button">
                                                    <button type="submit" class="btn btn-outline-primary" >SIGN-UP</button>
                                                </div>
                                                <div class="col-lg-6 login-btm login-text">
                                                    
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div class="row">
                                            <div className='col-12 white-font center' >
                                                <label class="form-control-label">ALREADY REGISTERED ?</label>
                                            </div>
                                        </div> */}
                                        <div class="row">
                                            <div className='col-12 center p-4'>

                                                <NavLink to="/login" className="btn btn-outline-primary" role="button" onClick={submit}>Submit</NavLink>

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
        </>


    );

}

export default OwnerDash;