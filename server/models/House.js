const mongoose = require('mongoose')

const houseSchema = new mongoose.Schema({
    ownerID : {
        type : String,
        required : true
    },
    
    title : {
        type : String,
        required : true
    },
    imageURL : {
        img1 : {
            type : String,
            required : false
        },
        img2 : {
            type : String,
            required : false
        },
        img3 : {
            type : String,
            required : false
        },
        img4 : {
            type : String,
            required : false
        }
  
    },
    shortDes : {
        type : String,
        required : false
    },
    des : {
        type : String,
        required : false
    },
    rate : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    furnishing : {
        type : String,
        required : true
    },
    security : {
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    parking : {
        type : String,
        required : true
    },
    floor : {
        type : String,
        required : true
    },
    map : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

const House = mongoose.model('House',houseSchema)

module.exports = House;







// {
//     "ownerID" : "shkjgfsegr",
    
//     "title" : "3bhk house",
    
//     "shortDes" : "new furnished house",
//     "des" : "hello this is my house made brand new",
//     "rate" : 150000,
//     "address" :"sector 11 , faridabad",
//     "furnishing" : " semi-furnished",
//     "security" : 80000,
//     "age" : "2 years",
//     "parking" :"No",
//     "floor" : "3rd of 7",
//     "map" : "http.google.map.in"
// }