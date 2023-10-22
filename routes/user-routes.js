const express=require("express")
import { getAllUser, signUp, updateUser, deleteUser, logIn} from "../controller/user-controller";

const userRouter=express.Router();
userRouter.get("/",getAllUser);
userRouter.post("/singup",signUp);
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)
userRouter.post("/login", logIn)

export default userRouter