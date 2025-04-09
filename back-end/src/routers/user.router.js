import { Router } from "express";
import { getAllUser } from "../controller/users/get-all-user.js";
import { createAccount } from "../controller/users/post-user.js";

export const userRouter = Router();

userRouter.get("/" , getAllUser);
//userRouter.get("/:id");
userRouter.post("/" , createAccount);
//userRouter.post("/login");
//userRouter.put("/:id");
//userRouter.delete("/:id");
