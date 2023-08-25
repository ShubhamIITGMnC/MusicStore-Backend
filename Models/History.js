import { timeStamp } from "console";
import mongoose from "mongoose"

const historySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        require:true
    },
    cardId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    date:{
        required:true,
        type:String
    },
    time:{
        required:true,
        type:String
    }
},{timestamps:true})

const History=mongoose.model("history",historySchema);

export {History};