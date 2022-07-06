import React, { useState, useEffect } from 'react';
import Axios from 'axios'



import homeBgImage from "../img/logo512.png"
import imagedemo from "../img/main-bg-1.jpg"
import imagedemo1 from "../img/card-demo-img.jpg"
import imagedemo2 from "../img/card-demo-img2.jpg"
import imagedemo3 from "../img/card-demo-img3.jpg"
import "../CSS/Home.css"

import { Link, NavLink } from 'react-router-dom';

const Home = () => {

  const [Event, setEvent] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:5000/house').then(res => {
      setEvent(res.data)
      console.log(res.data)

    })
  }, [])
  return (

    <div>

      <div className="container-main ">
        {/* <img src={homeBgImage} className="mx-auto d-block" alt="..." />
        <div class="centered"> */}
        <form className="search-box text-center  mx-auto d-flex my-4 py-0 mx-5 px-5 ms-auto ">
        </form>
      </div>
      <div className="d-flex mx-5 px-5 w-75 mx-auto my-4">
        <input className="form-control ms-2 mb-5 my-auto" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light  mb-5 ms-2 my-auto" type="submit">Search</button>
      </div>




      {/*  ab cards aaege */}

      {
        Event.map((val, key) => {
          return (
            <div key={key} className="m-5">
              <div >
                <div class="container container-card w-75 bg-light px-3 ">
                  <div class="row mx-1 py-2 ">
                    <div class="col">
                      <h3 class="my-auto d-inline">{val.title}</h3>
                      <p class="my-auto d-inline">  ( {val.address} )</p>

                      {/* tittle  & short des.*/}
                    </div>
                  </div>
                  {/* <div class="row pb-3 mx-1">
                    <div class="col">

                      <p class="my-auto">near Milan reasturant E-135 Housing Board Colony</p>
                      address
                    </div>
                  </div> */}
                  <div class="card-head-2 row mx-1 pt-1">
                    <div class="col center">

                      <div class="row">
                        <div class="col-12 center">
                          <h4 class="my-auto">{val.age} Years</h4>
                        </div>
                        <div class="col center">
                          <p class="my-auto py-1">Age of Property</p>
                        </div>
                      </div>

                    </div>

                    <div class="col center">

                      <div class="row">
                        <div class="col-12 center">
                          <h4 class="my-auto">{val.security} Rupees</h4>
                        </div>
                        <div class="col center">
                          <p class="my-auto py-1">Total Deposit</p>
                        </div>
                      </div>

                    </div>

                    <div class="col center">

                      <div class="row">
                        <div class="col-12 center">
                          <h4 class="my-auto">{val.rate} Rupees</h4>
                        </div>
                        <div class="col center">
                          <p class="my-auto py-1">Rent</p>
                        </div>
                      </div>

                    </div>

                  </div>
                  <div class="row">
                    <div class="col-5 ps-3  py-3 pe-2">

                      {/* slide show of photos */}

                      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src={imagedemo1} class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src={imagedemo2} class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item">
                            <img src={imagedemo3} class="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div class="col py-3 px-4">
                      <div class=" row  card-box-2">

                        <div class="col-6 center ">
                          <div class="row py-3">
                            <div class="col-6 center">
                              <i class="fa fa-car fa-3x"></i>
                            </div>
                            <div class="col-6 center">
                              <div class="row">
                                <div class="col-12">
                                  <h5>Parking</h5>
                                </div>
                                <div class="col-12">
                                  {val.parking}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-6 center">
                          <div class="row py-3">
                            <div class="col-6 center">
                              <i class="fa fa-bed fa-3x"></i>
                            </div>
                            <div class="col-6 center">
                              <div class="row">
                                <div class="col-12">
                                  <h5>Furnishing</h5>
                                </div>
                                <div class="col-12">
                                  {val.furnishing}
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>

                        <div class="col-6 center">
                          <div class="row py-3">
                            <div class="col-6 center">

                              <i class="	fa fa-building fa-3x"></i>
                            </div>
                            <div class="col-6 center">
                              <div class="row">
                                <div class="col-12">
                                  <h5>Floors</h5>
                                </div>
                                <div class="col-12">
                                  {val.floor}
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div class="col-6 center">
                          <div class="row py-3">
                            <div class="col-6 center">
                              <i class="fa fa-map fa-3x"></i>
                            </div>
                            <div class="col-6 center">
                            <div class="row">
                                <div class="col-12">
                                  <h5>Location</h5>
                                </div>
                                <div class="col-12">
                                <a href={val.map} >Click Here</a>
                                </div>
                              </div>

                              
                            </div>
                          </div>
                        </div>

                        <div class="row ">
                          <div class="col center py-2 my-auto ">
                            <NavLink to="/" className="btn mx-1  btn-dark" role="button">Get Contact Number</NavLink>
                          </div>

                        </div>

                      </div>


                      {/* <div class="row ">

                <div class="col center py-2 ">
                  <NavLink to="/" >More Details</NavLink>
                </div>
              </div> */}

                    </div>
                  </div>
                </div>
              </div>



            </div>
          )


        })
      }




    </div >
  );
};

export default Home;