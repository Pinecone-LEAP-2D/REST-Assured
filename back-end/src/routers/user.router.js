import express from "express";

export const userRouter = express.Router();

userRouter.get("/");
userRouter.get("/:id");
userRouter.post("/");
userRouter.post("/login");
userRouter.put("/:id");
userRouter.delete("/:id");
