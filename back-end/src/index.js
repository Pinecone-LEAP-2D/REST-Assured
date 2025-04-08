import express from "express";
import prisma from "./prismaClient";
import { userRouter } from "./routers/user.router";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/users",userRouter );

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
