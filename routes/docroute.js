const express=require('express')
const router=express.Router()
const doctor=require('./../models/doctor')


router.post('/',async(req,res)=>{
    try{

        const data=req.body
        const newdoctore=new doctor(data)
        await newdoctore.save()
        console.log("doc saved")
        res.status(200).json(newdoctore)
    }catch(err){
        console.log(err)
        res.status(500).json({err})
    }
})


router.get('/',async(req,res)=>{
    try{
        const data=await doctor.find()
        console.log('doc fetched')
        res.status(200).json(data)
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})


router.get('/:doctype',async(req,res)=>{
    try{
        const doctype=req.params.doctype
        if(doctype=="ent"||doctype=="sugar"){
            const data= await doctor.find({doctor:doctype})
            console.log("doctype fetched")
            res.status(200).json(data)

        }else{
            console.log("doc not found")
            res.status(400).json({message:"doctype not found"})
        }

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const id= req.params.id
        const data=req.body
        const response=await doctor.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        
        })
        console.log("doc updated")
        res.status(200).json(response)

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const id= req.params.id
        const response= await doctor.findByIdAndDelete(id)
        console.log("doc deleted")
        res.status(200).json({err:"delete sucess"})

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})








module.exports=router