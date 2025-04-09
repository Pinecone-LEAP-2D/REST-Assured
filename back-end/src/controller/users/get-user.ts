import prisma from "../../prismaClient";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({
      success: true,
      message: "User found successfully",
      send: user,
    });
  } catch (error) {
    res.status(500).send(`Error while getting user ${error}`);
  }
};
