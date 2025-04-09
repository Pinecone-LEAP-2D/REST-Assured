import prisma from "../../prismaClient";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Find user by ID
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    // Check if user exists
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    //  the found user
    res.status(200).json({
      success: true,
      message: "User found successfully",
      send: user,
    });
  } catch (error) {
    // Handle error and  500 response with error message
    res.status(500).send(`Error while getting user: ${error}`);
  }
};
