const mongoose=require('mongoose')

const patientschema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
   
    disease:{
        type:String,
        enum:["ear","sugar"],
        required:true
    }
})

const patient=mongoose.model("patient",patientschema)
module.exports=patient