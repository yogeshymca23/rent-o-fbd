const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
    ownerName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    
},
{
    timestamps : true
})

const Owner = mongoose.model('Owner',ownerSchema)

module.exports = Owner