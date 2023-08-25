import { Card } from "../Models/Card.js";

const createCard=async (req,res)=>{
    try{
        const ncard=new Card({
            name:req.body.name,
            url:req.body.url,
            bucketId:req.body.bucketId
        })
        const nc=await ncard.save();
        res.status(200).json({success:true,card:nc});
    }catch(error)
    {
        res.status(400).json({success:false,message:error.toString()})
    }
}

const getAllcard=async (req,res)=>{
    try{
        const bucketId=req.params.id;
        const allCard=await Card.find({bucketId:bucketId});
        res.status(200).json({success:true,cards:allCard});
    }catch(error)
    {
        res.status(400).json({success:false,message:error.toString()})
    }
}

const deleteCard=async (req,res)=>{
    try{
        const cardId=req.params.id;
        await Card.findByIdAndDelete(cardId);
        res.status(200).json({success:true,message:"card deleted successfully"});
    }catch(error)
    {
        res.status(400).json({success:false,message:error.toString()})
    }
}

const updateCard=async (req,res)=>{
    try{
        const cardId=req.params.id;
        await Card.findByIdAndUpdate(cardId,{name:req.body.name,url:req.body.url,bucketId:req.body.bucketId});
        const nc=await Card.findById(cardId);
        res.status(200).json({success:true,card:nc});
    }catch(error)
    {
        res.status(400).json({success:false,message:error.toString()})
    }
}

export {createCard,getAllcard,deleteCard,updateCard}