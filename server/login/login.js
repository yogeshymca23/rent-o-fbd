//user login k liye
const Admin = require("../models/admin")
const User = require("../models/user")
const Owner = require("../models/owner")


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.user_login= (req, res) => {
    const userLogging = req.body;
    console.log(userLogging);
    User.findOne({userName : userLogging.userName})
        .then(newUser => {
            if (!newUser) {
                console.log("No user")
                
                res.json({ message: "not user found" }) 
            }
            console.log(userLogging.password)
                console.log(newUser.password)
            bcrypt.compare(userLogging.password, newUser.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        // yaha se token bnana start
                        
                        const payload = {
                            id: newUser._id,
                            userName: newUser.userName
                        }
                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) res.json(` ye hai error ${err}`);
                                console.log("matched");
                                res.json({
                                    message: "token generated",
                                    token: "bearer " + token
                                    
                                })
                                
                                
                            }
                            
                        )
                        
                    }
                    else {
                        return res.json({
                            message: "invalid password"
                        })
                    }
                })
        })
}

//admin login k liye


module.exports.admin_login= (req, res) => {
    const adminLogging = req.body;
    console.log(adminLogging);
    Admin.findOne({name : adminLogging.name})
        .then(newadmin => {
            if (!newadmin) {
                console.log("No user")
                res.json({ message: "not user found" })
                

            }
            console.log("user found 12 ")
            console.log(adminLogging.password)
            console.log(newadmin.password)
            bcrypt.compare(adminLogging.password, newadmin.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        // yaha se token bnana start
                        
                        const payload = {
                            id: newadmin._id,
                            name: newadmin.name
                        }
                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) res.json(` ye hai error ${err}`);
                                console.log("admin ");
                                res.json({
                                    message: "token generated",
                                    token: "bearer " + token
                                    
                                })
                                
                                
                            }
                            
                        )
                        
                    }
                    else {
                        return res.json({
                            message: "invalid admin password"
                        })
                    }
                })
        })
}

// owner login k liye

module.exports.owner_login= (req, res) => {
    const ownerLogging = req.body;
    console.log(ownerLogging);
    Owner.findOne({ownerName : ownerLogging.ownerName})
        .then(newOwner => {
            if (!newOwner) {
                console.log("No owner")
                res.json({ message: "not owner found" })
                
            }
            bcrypt.compare(ownerLogging.password, newOwner.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        // yaha se token bnana start
                        
                        const payload = {
                            id: newOwner._id,
                            ownerName: newOwner.ownerName
                        }
                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) res.json(` ye hai error ${err}`);
                                console.log(token);
                                res.json({
                                    message: "token generated",
                                    token: "bearer " + token
                                    
                                })
                                
                                
                            }
                            
                        )
                        
                    }
                    else {
                        return res.json({
                            message: "invalid password"
                        })
                    }
                })
        })
}