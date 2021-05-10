const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("This program is running at localhost:"+port);
})

app.get("/",(req,res)=>{
    res.send("Application Working Successfully");
})