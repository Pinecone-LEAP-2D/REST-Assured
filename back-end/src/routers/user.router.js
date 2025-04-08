import express from "express";
import { getAllUser } from "../controller/users/get-all-user";
import { createAccount } from "../controller/users/post-user";

export const userRouter = express.Router();

userRouter.get("/" , getAllUser);
userRouter.get("/:id");
userRouter.post("/" , createAccount);
userRouter.post("/login");
userRouter.put("/:id");
userRouter.delete("/:id");
