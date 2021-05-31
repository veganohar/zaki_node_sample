const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./app/models");
const dbconfig = require("./app/config/db.config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("This program is running at localhost:"+port);
})


db.mongoose.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
      console.log("DB COnnected Successfully");
  }).catch(err=>{
      console.log(err);
      process.exit();
  })

app.get("/",(req,res)=>{
    res.send("Application Working Successfully");
})


require("./app/routes/test.route")(app);
require("./app/routes/customer.route")(app);