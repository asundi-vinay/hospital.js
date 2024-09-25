const mongoose=require("mongoose")

const mongodburl="mongodb://localhost:27017/hospital"

mongoose.connect(mongodburl)




const db=mongoose.connection
db.on('connected',()=>{
    console.log("connected to mongodb server")
})
db.on("error",(err)=>{
    console.log("error in connection",err)
})

db.on("disconnected",()=>{
    console.log("mongo db disconnected")
})

// comment

module.exports=db