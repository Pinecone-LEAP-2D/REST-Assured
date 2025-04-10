import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const postDonation = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { amount, specialMessage, socialURLOrBuyMeACoffee, donor, recipient } =
    req.body;
  try {
    const donation = await prisma.donation.create({
      where: { userId: Number(userId) },
      data: {
        amount: amount,
        specialMessage: specialMessage,
        socialURLOrBuyMeACoffee: socialURLOrBuyMeACoffee,
        donor: donor,
        recipient: recipient,

        // successMessage: "Profile created successfully"
      },
    });
    res.status(201).json({
      success: true,
      message: "Succesfully created donation",
      donation: donation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add donation",
      error: error,
    });
  }
};
