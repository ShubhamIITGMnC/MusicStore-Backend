import mongoose from "mongoose"

const cardSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        require:true
    },
    bucketId:{
        type:String,
        require:true
    }
})

const Card=mongoose.model("card",cardSchema);

export {Card};