
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import "../CSS/navbar.css"



function Navbar() {
    const [ownerName, setownerName] = useState('Login')

    let config = {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        }
    }

    useEffect(() => {
        Axios.get('http://localhost:5000/ownerdash', config)
            // .then(res=> res.json())
            .then(res => res.data.isLoggedIn ? setownerName(res.data.name) : null)

    }, [])

    let logout = () => {
        localStorage.removeItem("token");
        setownerName(null)
        // setToken(null);
    }

    // let button = () => {
    //     if (!ownerName)
    //         return <button className="btn mx-1  btn-outline-dark" onClick={logout}>Logout</button>
    //     else
    //         return <NavLink to="/login" className="btn mx-1  btn-outline-dark" role="button">Login</NavLink>
    // }

    if (ownerName) {
        return (
            <div>
                <nav class="navbar  navbar-expand-lg navbar-light  bg-dark">
                    <div class="container-fluid ">
                        <a class="navbar-brand " href="#">Rent-O-Fbd</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to="/" className="btn mx-1  btn-outline-dark" role="button">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/about" className="btn mx-1  btn-outline-dark" role="button">About</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/contact" className="btn mx-1  btn-outline-dark" role="button">Contact</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/ownerdash" className="btn mx-1  btn-outline-dark" role="button">Rent House</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/login" className="btn mx-1  btn-outline-dark" role="button" onClick={logout}>Logout ( {ownerName} )</NavLink>
                                </li>





                            </ul>

                        </div>
                    </div>
                </nav>
            </div>


        );
    }
    else {
        return (
            <div>
                <nav class="navbar  navbar-expand-lg navbar-light  bg-dark">
                    <div class="container-fluid ">
                        <a class="navbar-brand " href="#">Real-Estate</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to="/" className="btn mx-1  btn-outline-dark" role="button">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/about" className="btn mx-1  btn-outline-dark" role="button">About</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/contact" className="btn mx-1  btn-outline-dark" role="button">Contact</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/login" className="btn mx-1  btn-outline-dark" role="button">User Login</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/login" className="btn mx-1  btn-outline-dark" role="button">Owner Login</NavLink>
                                </li>





                            </ul>

                        </div>
                    </div>
                </nav>
            </div>


        );
    }

}

export default Navbar;