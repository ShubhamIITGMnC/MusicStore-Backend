import { Bucket } from "../Models/Bucket.js"


const createBucket=async (req,res)=>{
    try{
        const bucket=new Bucket({
            name:req.body.name,
            userId:req.user._id
        })
        const b=await Bucket.create({name:req.body.name,userId:req.user._id})
        res.status(200).json({success:true,bucket:b});
    }catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}

const getAllBuckets=async (req,res)=>{
    try{
        const Buckets=await Bucket.find({userId:req.user._id});
        res.status(200).json({ success: true, buckets: Buckets });
    }catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}

const deleteBucket=async (req,res)=>{
    try{
        const b=await Bucket.findById(req.params.id);
        if(b.userId!==req.user._id.toString())
        {
            res.status(400).json({ success: false, message: "you can not delete this bucket" });
            return ;
        }
        await Bucket.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true,message:"bucket deleted successfully"});
    }catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}

const updateBucket=async (req,res)=>{
    try{
        const b=await Bucket.findById(req.params.id);
        if(b.userId!==req.user._id.toString())
        {
            res.status(400).json({ success: false, message: "you can not update this bucket" });
            return ;
        }
        await Bucket.findByIdAndUpdate(b._id,{name:req.body.name});
        const buck = await Bucket.findById(b._id);
        res.status(200).json({success:true,bucket:buck});
    }catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}

export {createBucket,getAllBuckets,deleteBucket,updateBucket}