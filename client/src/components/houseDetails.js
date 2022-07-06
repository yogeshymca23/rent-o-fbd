import { NavLink, useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
function OwnerDash() {
    let navigate = useNavigate()

    const [ownerName, setownerName] = useState('')

    const [ownerID, setownerID] = useState('sjkfvhjsf')
    
    



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

    const update = () => {
        
        
        Axios.put('http://localhost:5000/house', { ownerID ,title, rate, address , furnishing , security, age , parking , floor , map })
        
    
        navigate("/")
        window.location.reload(false);
    
      }
    


    return (

        <>
            <div class="container container-card  w-50 bg-light px-3 ">
                <h1 class=" col center my-5 py-2">Welcome Mr. {ownerName}</h1>


            </div>

        </>


    );

}

export default OwnerDash;