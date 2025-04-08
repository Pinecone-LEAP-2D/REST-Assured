import express from "express";
import prisma from "./prismaClient";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { email, username } = req.body;
  const user = await prisma.user.create({
    data: { email, username },
  });
  res.json(user);
});

app.use("/user");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
