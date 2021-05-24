const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("This program is running at localhost:"+port);
})

app.get("/",(req,res)=>{
    res.send("Application Working Successfully");
})


require("./app/routes/test.route")(app);