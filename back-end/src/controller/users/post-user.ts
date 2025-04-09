import bcrypt from "bcrypt";
import prisma from "../../prismaClient";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User with this email already exists!",
      });
      return;
    }

    const existingUserName = await prisma.user.findUnique({ where: { email } });
    if (existingUserName) {
      res.status(400).json({
        success: false,
        message: "Username with this email already exists!",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser: newUser,
    });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error,
    });
  }
};
