const express=require('express')
const app=express()
const db=require('./db')

const bodyparser=require('body-parser')
app.use(bodyparser.json())

const docroute=require('./routes/docroute')
 const patroute=require("./routes/patroute")

app.use("/doc",docroute)
app.use("/pat",patroute)






app.listen(300,()=>{console.log("server listening")})