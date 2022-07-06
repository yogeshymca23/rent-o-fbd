const Admin = require('../models/admin')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// get all houses in ascending order as date
module.exports.get_admin = (req,res) => {
    Admin.find().sort({date:-1}).then(admins => res.json(admins));
}


// create new house

exports.post_admin = async (req, res) => {
    const admin = req.body;
    console.log(admin);
    
    // check of existing of name and email
    const takenName = await Admin.findOne({ adminName: admin.adminName })
    const takenEmail = await Admin.findOne({ email: admin.email })

    if (takenName || takenEmail) {
        res.json({ message: "already exist name or email" })
    }
    else {
        // yaha hashing chalu hai 
        admin.password = await bcrypt.hash(req.body.password, 10)

        // yaha add kro naya user
        const newAdmin = new Admin({
            adminName: admin.adminName.toLowerCase(),
            email: admin.email.toLowerCase(),
            password: admin.password,
            phoneNumber : admin.phoneNumber
        })

        
        await newAdmin.save();
        
        res.json({ newAdmin , message: "admin registered"})

    }
}








// update

module.exports.update_admin = (req,res) => {
    Admin.findByIdAndUpdate({_id: req.params.id},req.body).then(function(admin){
        admin.findOne({_id: req.params.id}).then(function(admin){
            res.json(admin);
        });
    });
}

// delete
module.exports.delete_admin = (req,res) => {
    Admin.findByIdAndDelete({_id: req.params.id}).then(function(admin){
        res.json({success: true});
    });
}