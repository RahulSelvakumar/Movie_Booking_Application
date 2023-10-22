const express=require("express")
import {getAllUsers,signUp} from "../controller/user-controller";

const userRouter=express.Router();
userRouter.get("/",getAllUsers);
userRouter.post("/singup",signUp);

export default userRouter