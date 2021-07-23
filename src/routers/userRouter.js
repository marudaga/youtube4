import express from "express";
import { nothing, home, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.get("/:id", nothing);
userRouter.get("/edit-profile", edit);

export default userRouter;
