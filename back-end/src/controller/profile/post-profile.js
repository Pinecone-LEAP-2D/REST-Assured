import prisma from "../../prismaClient.js";

export const createUserProfile = async (req, res) => {
  const { userId } = req.params;  
  const {
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;

  try {

    const profileCreate = await prisma.profile.create({
      data: {
        name,
        about,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
        user: { connect: { id: userId } }, 
      },
    });

    res.status(200).json({ success: true, data: profileCreate });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
