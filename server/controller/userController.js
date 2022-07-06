const User = require("../models/user")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// get all users in ascending order as date
module.exports.get_user = (req, res) => {
    User.find().sort({ date: -1 }).then(users => res.json(users));
}

module.exports.post_user = async (req, res) => {
    const user = req.body;
    console.log(user);

    // check of existing of name and email
    const takenName = await User.findOne({ userName: user.userName })
    const takenEmail = await User.findOne({ email: user.email })

    if (takenName || takenEmail) {
        res.json({ message: "already exist name or email" })
    }
    else {
        // yaha hashing chalu hai 
        user.password = await bcrypt.hash(req.body.password, 10)

        // yaha add kro naya user
        const newUser = new User({
            userName: user.userName.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password,
            phoneNumber: user.phoneNumber
        })


        await newUser.save();

        res.json({ newUser, message: "user registered" })

    }
}


// update

module.exports.update_user = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        user.findOne({ _id: req.params.id }).then(function (user) {
            res.json(user);
        });
    });
}

// delete
module.exports.delete_user = (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }).then(function (user) {
        res.json({ success: true });
    });
}