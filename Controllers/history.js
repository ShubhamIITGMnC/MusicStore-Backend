import { History } from "../Models/History.js";


const createHistory=async (req,res)=>{
    try{
        let nh=new History({
            name:req.body.name,
            url:req.body.url,
            userId:req.user._id,
            cardId:req.body.cardId,
            date:req.body.date,
            time:req.body.time
        })
        const nhistory=await nh.save();
        res.status(200).json({success:true,history:nhistory});
    }catch(error)
    {
        res.status(400).json({success:false,message:error.toString()});
    }
}

const deleteHistory=async (req,res)=>{
    try{
        let hid=req.params.id;
        let h=await History.findOne({_id:hid,userId:req.user._id});
        await History.findByIdAndDelete(h._id);
        res.status(200).json({success:true,message:"deleted successfully"});
    }catch(error)
    {
        res.status(400).json({success:false,message:error.toString()});
    }
}



const getAllHistory = async(req,res)=>{
    try{
        const AllHistory=await History.find({userId:req.user._id});
        res.status(200).json({success:true,allHistory:AllHistory});
    }catch(error)
    {
        res.statu(400).json({success:false,message:error.toString()});
    }
}

const clearAll=async(req,res)=>{
    try{
        const history=await History.find({userId:req.user._id});
        for(let i=0;i<history.length;i++)
        {
            await History.findByIdAndDelete(history[i]._id);
        }
        res.status(200).json({message:"deleted successfully",success:true});
    }catch(error)
    {
        res.statu(400).json({success:false,message:error.toString()});
    }
}

export {createHistory,getAllHistory,deleteHistory,clearAll}