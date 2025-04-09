import { Router } from "express";
import { updateUserProfile } from "../controller/profile/update-profile.js";
import { deleteUserProfile } from "../controller/profile/delete-profile.js";
import { createUserProfile } from "../controller/profile/post-profile.js";



export const profileRouter = Router()

profileRouter.put("/" , updateUserProfile)
profileRouter.delete("/" , deleteUserProfile)
profileRouter.post('/' , createUserProfile)