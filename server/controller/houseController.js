const House = require('../models/House')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// get all houses in ascending order as date
module.exports.get_house = (req,res) => {
    House.find().then(allhouses => res.json(allhouses));
}


// create new house

module.exports.post_house = async (req,res) => {
    const newhouse = new House(req.body);
    // newhouse.save()
    console.log("flag house post")
    try {
        await newhouse.save()
        res.status(201).json({
            status: 'Success',
            data: {
                newhouse
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        }, console.log(err))
    }
}

// update

module.exports.update_house = (req,res) => {
    House.findByIdAndUpdate({_id: req.params.id},req.body).then(function(house){
        house.findOne({_id: req.params.id}).then(function(house){
            res.json(house);
        });
    });
}

// delete
module.exports.delete_house = (req,res) => {
    House.findByIdAndDelete({_id: req.params.id}).then(function(house){
        res.json({success: true});
    });
}