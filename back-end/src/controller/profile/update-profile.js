import prisma from "../../prismaClient.js";

export const updateUserProfile = async (req, res) => {
  const { id } = req.params;  
  const {
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;  

  try {

    const updatedProfile = await prisma.profile.update({
      where: { id: parseInt(id) },
      data: {
        name,
        about,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
      },
    });

    res.status(200).json({ success: true, data: updatedProfile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
