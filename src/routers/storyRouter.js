import express from "express";
import { edit, remove } from "../contollers/storyController";
import { nothing } from "../contollers/userController";
const storyRouter = express.Router();

storyRouter.get("/:id", nothing);
storyRouter.get("/:id/edit", edit);
storyRouter.get("/:id/delete", remove);

export default storyRouter;
