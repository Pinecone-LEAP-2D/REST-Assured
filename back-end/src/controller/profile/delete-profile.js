import prisma from "../../prismaClient.js";

export const deleteUserProfile = async (req, res) => {
  const { id } = req.params;  
  try {

    const deletedProfile = await prisma.profile.delete({
        id: parseInt(id) , 
    });

    res.status(200).json({ success: true, data: deletedProfile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
