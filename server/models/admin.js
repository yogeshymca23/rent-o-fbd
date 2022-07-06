const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    adminName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    
    
    
    
},
{
    timestamps : true
})

const Admin = mongoose.model('Admin',adminSchema)

module.exports = Admin