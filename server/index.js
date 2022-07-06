const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const { post_admin, get_admin , update_admin , delete_admin} = require("./controller/adminController");
const {post_house ,get_house , update_house , delete_house} = require("./controller/houseController");
const {post_user, get_user , update_user , delete_user} = require("./controller/userController");
const {post_owner ,get_owner , update_owner , delete_owner} = require("./controller/ownerController");
const {user_login , admin_login , owner_login} = require("./login/login.js");
const {verifyJWTowner} = require("./auth/ownerAuth")
const {verifyJWTuser} = require("./auth/userAuth")
const {verifyJWTadmin} = require("./auth/adminAuth")



require('dotenv').config();


// to run server
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

// to connect db
const mongoose = require('mongoose')
const DB = process.env.DB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected..')
})


app.get("/ownerdash" , verifyJWTowner , (req, res)=>{
    res.json({isLoggedIn : true , name : req.owner.ownerName})

})

// post for owner
app.post("/userlogin",user_login);
app.post("/adminlogin",admin_login);
app.post("/ownerlogin",owner_login);

//post
app.post("/admin", post_admin); //////yogesh ////// can register any admin but with a token key
app.post("/house", post_house);  // owner can post new house
app.post("/user", post_user); // any user can register himself
app.post("/owner", post_owner); // any owner can register himself

//get
// app.get("/admin" , get_admin);
app.get("/house" , get_house); // all can view
app.get("/owner" ,verifyJWTadmin, get_owner); // only admin can view
app.get("/user" ,verifyJWTadmin, get_user); // only admin can view

//update
app.put("/admin",verifyJWTadmin, update_admin);  // only admin can update
app.put("/house", verifyJWTowner, update_house); // owner can update house
app.put("/user", verifyJWTuser, update_user); // only user can update
app.put("/owner",verifyJWTowner, update_owner); // only owner can update 


//delete
// app.delete("/admin" , delete_admin); 
app.delete("/house" ,verifyJWTowner, delete_house); //  owner can delete house
app.delete("/owner" ,verifyJWTadmin, delete_owner); // admin can delete
app.delete("/user" , verifyJWTadmin, delete_user); // admin can delete

