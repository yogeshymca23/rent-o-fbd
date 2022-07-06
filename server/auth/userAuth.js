const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();



module.exports.verifyJWTuser=async(req , res ,next) => {
    const token = await req.headers["x-access-token"] ?.split(' ')[1]
     console.log(token)
     
    if(token){
        jwt.verify(token , process.env.JWT_SECRET , (err,decoded)=>{
            if(err) return res.json({isLoggedIn : false , message : "failed to authenticate"})
            req.user = {};
            req.user.id = decoded.id;
            req.user.name = decoded.name;
            console.log("token match")
            next();

        })
    }
    else{
        res.json({isLoggedIn : false , message : "incorrect token"})
        console.log("token didn't match")
    }
}

// module.exports =  verifyJWTuser();