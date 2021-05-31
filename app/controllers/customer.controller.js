const db = require("../models");
const Customer = db.customer;

exports.saveNewCustomer = (req,res)=>{
    let data = req.body;
    console.log(data);
    let customer = new Customer();
    console.log(customer);
    res.send(customer);
}