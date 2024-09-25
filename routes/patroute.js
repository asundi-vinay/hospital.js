const express=require("express")
const router=express.Router()
const patient=require('./../models/patient')

router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newpatient=new patient(data)
        await newpatient.save()
        console.log("patient saved")
        res.status(201).json({newpatient})
        
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await patient.find()
        console.log("patient fetched")
        res.status(200).json({data})

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})

router.get('/:pattype',async(req,res)=>{
    try{
        const pattype=req.params.pattype
       if(pattype=="ear"||pattype=="sugar"){
        const data = await patient.find({disease:pattype})
        console.log("patiinet type found")
        res.status(200).json(data)

       }else{
        console.log("patient not found")
        res.status(400).json({err})
       }
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})


router.put('/:id',async(req,res)=>{
    try{
        const id =req.params.id
        const data=req.body
        const response=await patient.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        })
        console.log("pat updated")
        res.status(200).json(response)

    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        const id=req.params.id
        const data=await patient.findByIdAndDelete(id)
        console.log("pat deleted")
        res.status(200).json({err:"sucess"})
    }catch(err)
    {
        console.log(err)
        res.status(500).json({err})
    }
})

module.exports=router