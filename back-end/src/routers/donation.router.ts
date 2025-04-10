import express from "express";
import { getALlDonation } from "../controller/donation/get-all-donation";
import { postDonation } from "../controller/donation/post-donation";

export const donationRouter = express.Router();

donationRouter.get("/", getALlDonation);
donationRouter.post("/", postDonation);
