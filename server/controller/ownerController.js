const Owner = require("../models/owner")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// get all owners in ascending order as date

module.exports.get_owner = (req, res) => {
    Owner.find().sort({ date: -1 }).then(owners => res.json(owners));
}


// create new // registration
module.exports.post_owner = async (req, res) => {
    const owner = req.body;
    console.log(owner);

    // check of existing of name and email
    const takenName = await Owner.findOne({ ownerName: owner.ownerName })
    const takenEmail = await Owner.findOne({ email: owner.email })

    if (takenName || takenEmail) {
        res.json({ message: "already exist name or email" })
    }
    else {
        // yaha hashing chalu hai 
        owner.password = await bcrypt.hash(req.body.password, 10)

        // yaha add kro naya owner
        const newOwner = new Owner({
            ownerName: owner.ownerName.toLowerCase(),
            email: owner.email.toLowerCase(),
            password: owner.password,
            phoneNumber: owner.phoneNumber
        })


        await newOwner.save();

        res.json({ newOwner, message: "user registered" })

    }
}

// update

module.exports.update_owner = (req,res) => {
    Owner.findByIdAndUpdate({_id: req.params.id},req.body).then(function(owner){
        owner.findOne({_id: req.params.id}).then(function(owner){
            res.json(owner);
        });
    });
}

// delete
module.exports.delete_owner = (req,res) => {
    Owner.findByIdAndDelete({_id: req.params.id}).then(function(owner){
        res.json({success: true});
    });
}
