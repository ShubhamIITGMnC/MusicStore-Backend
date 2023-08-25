import express from "express"
const userRouter=express.Router();
import { createUser,loginUser,getUser } from "../Controllers/user.js";

userRouter.post("/auth/register",createUser);
userRouter.post("/auth/login",loginUser);
userRouter.post("/auth/getUser",getUser);

export default userRouter;