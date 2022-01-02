const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://new:Tripti0701@cluster0.nyifa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{console.log("connection successful");}).catch((error)=>{
console.log(error);});