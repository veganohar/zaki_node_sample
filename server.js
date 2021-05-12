const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(port,()=>{
    console.log("This program is running at localhost:"+port);
})

app.get("/",(req,res)=>{
    res.send("Application Working Successfully");
})

app.post("/postMethod",(req,res)=>{
    res.send("Post Method is Working");
})

app.put("/putMethod",(req,res)=>{
    res.send("Put Method is Working");
})

app.delete("/deleteMethod",(req,res)=>{
    res.send("Delete Method is Working");
})

app.post("/dataBody",(req,res)=>{
    let data = req.body;
    res.send(data);
})

app.post("/dataParams/:name/:age",(req,res)=>{
    let data = req.params;
    res.send(data);
})

app.post("/dataQuery",(req,res)=>{
    let data = req.query;
    res.send(data);
})