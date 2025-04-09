import express from "express";
import { userRouter } from "./routers/user.router";
import { profileRouter } from "./routers/profile.router";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/profile", profileRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
