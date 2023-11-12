const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+("/")));
app.set("view engine","ejs");

var to_dos = [];
var insta_name="";
app.get("/",function(req,res){
    
    var today = new Date();
    var day=  today.getDay;
    var options={
        weekday: "long",
        day:"numeric",
        month:"long",
    }
    var day_str = today.toLocaleDateString("en-US",options);
    insta_name=day_str;
    console.log(day_str+"here");
    res.render("list",{ dayname: insta_name, items: to_dos });
    

});
app.post("/",function(req,res){
    const act = req.body.act;
    to_dos.push(act);
    
    
    res.render("list",{ dayname: insta_name, items: to_dos });
})
app.listen(3000,function(){
    console.log("logged to port 3000");
});