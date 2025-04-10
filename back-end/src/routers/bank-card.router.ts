import express from "express";
import { getAllBankCard } from "../controller/bank-card/get-all-bank-card";
import { postBankCard } from "../controller/bank-card/post-bank-card";

export const bankCardRouter = express.Router();

bankCardRouter.get("/", getAllBankCard);
bankCardRouter.post("/", postBankCard);
