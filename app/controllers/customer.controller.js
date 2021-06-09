const db = require("../models");
const Customer = db.customer;

exports.saveNewCustomer = (req,res)=>{
    let data = req.body;
    let customer = new Customer();
    for(let p in data){
        customer[p]=data[p];
      }
    customer.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Customer created Successfully",
            data:response
        })
    })
}

exports.getAllCustomers = (req,res)=>{
    Customer.find((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(200).send({
            message:"Customers retrieved Successfully",
            data:response
        })
    })
}

exports.updateCustomer = (req,res)=>{
    let data = req.body;
    Customer.updateOne({_id:data.id},data,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Customer Updated Successfully",
            data:response
        })
    })
}

exports.deleteCustomer = (req,res)=>{
    Customer.deleteOne({_id:req.params.cid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Customer Deleted Successfully",
            data:response
        })
    })
}