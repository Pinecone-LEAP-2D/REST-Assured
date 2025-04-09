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

// Git rebase

// 1. git fetch --all
// 2. git rebase origin/main
// 3. fix conflict
// 4. git add .
// 5. git rebase --continue
// 6. git push origin HEAD -f
