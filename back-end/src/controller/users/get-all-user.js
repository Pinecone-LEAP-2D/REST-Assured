import prisma from "../../prismaClient";

export const getAllUser =  async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  }