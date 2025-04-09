import { Response, Request } from "express";
import prisma from "../../prismaClient";

export const updateProfile = async (req: Request, res: Response) => {
  const { avatarImage, name, about, socialMediaURL, backgroundImage, userId } =
    req.body;
  const { id } = req.params;

  try {
    const Existingprofile = await prisma.profile.findUnique({
      where: { id: Number(id) },
    });

    if (!Existingprofile) {
      res.status(500).json({
        success: false,
        message: "Failed to update profile",
      });
    }

    const updatedProfile = await prisma.profile.update({
      where: { id: Number(id) },
      data: {
        avatarImage: avatarImage,
        name: name,
        about: about,
        socialMediaURL: socialMediaURL,
        backgroundImage: backgroundImage || "",
        userId: Number(userId),
      },
    });

    res.status(200).json({
      success: true,
      message: "Successfully updated profile",
      profileInfo: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
      error: error,
    });
  }
};
