import express from "express"
const app=express();
import methodOverride from "method-override";
import dotenv from "dotenv"
dotenv.config();
import cors from "cors";
app.use(cors())
import mongoose from "mongoose"
import userRouter from "./Routes/user.js";
import bucketRouter from "./Routes/bucket.js";
import cardRouter from "./Routes/card.js";
import historyRouter from "./Routes/history.js";


app.use(express.json());
app.use(methodOverride())



const connectDB=async ()=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URL) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error.toString())
    }
}

connectDB();

app.listen(5000,()=>{
    console.log("server started successfully")
})


app.use("/api",userRouter);
app.use("/api",bucketRouter);
app.use("/api",cardRouter);
app.use("/api",historyRouter);