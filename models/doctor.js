const mongoose=require("mongoose")


const newdoc= new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
        doctor:{
            type:String,
            enum:["sugar","ent"],
            required:true
        }
      
    
})

const doctor=mongoose.model("doctor",newdoc)
module.exports=doctor