import express from "express";
import { trending, newer } from "../controllers/storyController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

const handleGlobal = (req, res) => res.send("<h1>Home safe~</h1>");

globalRouter.get("/new", newer);
globalRouter.get("/trending", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/", handleGlobal);

export default globalRouter;
