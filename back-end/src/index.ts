import express from "express";
import { userRouter } from "./routers/user.router.js";
import { profileRouter } from "./routers/profile.router.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/updateProfile", profileRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
