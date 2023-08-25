import { User } from "../Models/User.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const saltRound = 10;
dotenv.config();

const createUser = async (req, res) => {
    try {
        const u = await User.findOne({ email: req.body.email });
        if (u) {
            res.status(400).json({ success: false, message: "user is already created" });
            return;
        }
        const hashedPassword = await bcrypt.hash(req.body.password, saltRound);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        await user.save();
        res.status(200).json({ success: true, message: "User is registered successfully" });
        return;
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}


const loginUser = async (req, res) => {
    try {
        const u = await User.findOne({ email: req.body.email });
        if (!u) {
            res.status(400).json({ success: false, message: "User not found." });
            return;
        }

        const isSame = await bcrypt.compare(req.body.password, u.password);
        if (isSame) {
            const payload={
                email:u.email
            }
            const token = jwt.sign({ user: payload }, process.env.JWT_SECRET);
            res.status(200).json({ success: true, token: token,user:u });
            return;
        }
        else
        {
            res.status(400).json({ success: false, message: "Incorrect credential." });
        }

        
        return;
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}

const getUser=async (req,res)=>{
    try{
        
        const decode = jwt.verify(req.headers["token"], process.env.JWT_SECRET);
        const user = await User.findOne({ email: decode.user.email });
        res.status(200).json({success:true,user:user});
    }catch (error) {
        res.status(400).json({ success: false, message: error.toString() });
    }
}


export { createUser,loginUser,getUser };