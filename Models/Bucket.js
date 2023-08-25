import mongoose from "mongoose"

const bucketSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    userId:{
        require:true,
        type:String
    }
})

const Bucket = mongoose.model("bucket",bucketSchema);

export {Bucket};