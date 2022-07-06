
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();


exports.verifyJWTowner = async (req , res ,next) =>{
    const token =await  req.headers["x-access-token"] ?.split(' ')[1]
     console.log(token)
    //  let navigate = useNavigate()
    if(token){
        jwt.verify(token , process.env.JWT_SECRET , (err,decoded)=>{
            if(err) return res.json({isLoggedIn : false , message : "failed to authenticate"})
            req.owner = {};
            req.owner.id = decoded.id;
            req.owner.ownerName = decoded.ownerName;
            console.log("token match")
            next();

        })
    }
    else{
        res.json({isLoggedIn : false , message : "incorrect token"})
        console.log("token didn't match")
        
        
        
    }
}

// module.exports =  verifyJWTowner();