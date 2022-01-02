const express=require("express");
const { stat } = require("fs");
const app=express();
const path=require("path");
const port=process.env.PORT||8000;
require("./db/conn");
const hbs=require("hbs");

//setting the path
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");



//MIDDLEWARE. using this static website in the public folder.
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
//app.use(express.static(staticpath));
app.set("view engine","hbs");//setting up the view engine.
app.set("views",templatepath);//now to get views, we need to get inside the folder named templates.
hbs.registerPartials(partialpath);




//routing
app.get("/",(req,res)=>{
    res.render("index"); //rendering the index page incase we get just the /
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})


//create server
app.listen(port,()=>{
    console.log(`server is running at port no ${port}` );
});

