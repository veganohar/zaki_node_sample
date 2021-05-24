
exports.postMethod = (req,res)=>{
    res.send("Post Method is Working");
}

exports.putMethod = (req,res)=>{
    res.send("Put Method is Working");
}

exports.deleteMethod = (req,res)=>{
    res.send("Delete Method is Working");
}

exports.dataBody = (req,res)=>{
    let data = req.body;
    res.send(data);
}

exports.dataParams = (req,res)=>{
    let data = req.params;
    res.send(data);
}

exports.dataQuery = (req,res)=>{
    let data = req.query;
    res.send(data);
}

exports.sample = (req,res)=>{
    res.render("sample");
}

exports.dynamicdata = (req,res)=>{
    res.render("dynamicdata",{message:"Hello Ejs"});
}

exports.form = (req,res)=>{
    res.render("form");
}

exports.response = (req,res)=>{
    res.render("response",req.body);
}
