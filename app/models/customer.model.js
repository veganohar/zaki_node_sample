const mongoose = require("mongoose");

const Customer = mongoose.model(
    'Customer',
    new mongoose.Schema({
        name:String,
        age:Number,
        phone:Number,
        city:String,
        createdOn:{
            type:Date,
            default:Date.now
        }       
    })
)

module.exports = Customer;