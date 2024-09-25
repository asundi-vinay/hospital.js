const express=require('express')
const app=express()
const db=require('./db')
require('dotenv').config()
const bodyparser=require('body-parser')
app.use(bodyparser.json())
const PORT=process.env.PORT||300



const docroute=require('./routes/docroute')
 const patroute=require("./routes/patroute")

app.use("/doc",docroute)
app.use("/pat",patroute)






app.listen(PORT,()=>{console.log("server listening")})