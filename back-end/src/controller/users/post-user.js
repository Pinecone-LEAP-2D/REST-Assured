import prisma from "../../prismaClient.js";

export const createAccount = async (req, res) => {
  const { email, username } = req.body;

  try {

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email or username already taken.",
      });
    }


    const user = await prisma.user.create({
      data: { email, username },
    });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the account.",
      error: error.message,
    });
  }
};
