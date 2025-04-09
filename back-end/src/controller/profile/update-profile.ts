import { Response, Request } from "express";
import prisma from "../../prismaClient";

export const updateProfile = async (req: Request, res: Response) => {
  const { avatarImage, name, about, socialMediaURL, backgroundImage, userId } =
    req.body;
  const { id } = req.params;

  try {
    // Update the profile
    const updatedProfile = await prisma.profile.update({
      where: { id: Number(id) }, // Specify the profile to update by ID
      data: {
        avatarImage: avatarImage,
        name: name,
        about: about,
        socialMediaURL: socialMediaURL,
        backgroundImage: backgroundImage || "",
        userId: userId,
      },
    });

    // Send a success response
    res.status(200).json({
      success: true,
      message: "Successfully updated profile",
      profileInfo: updatedProfile, // Return the updated profile info
    });
  } catch (error) {
    // Handle the error properly
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
      error: error,
    });
  }
};
