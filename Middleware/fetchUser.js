import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = async (req,res,next)=>{
    try{
        const token = req.headers["token"];
        if(!token){
            throw new Error("Token Not Found");
        }
        const decode = jwt.verify(token,JWT_SECRET);
        const u = await User.findOne({email:decode.user.email});
        req.user = u;
        next();

    }catch(err){
        res.status(404).json({success:false, "error":err.toString()});
    }
}


export {fetchUser};