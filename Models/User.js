import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
})

const User = mongoose.model("user",userSchema);

export {User};