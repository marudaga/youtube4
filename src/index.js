import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";
const PORT = 4000;
const logger = morgan("dev");

const app = express();
app.user(logger("dev"));
app.use("/", globalRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);
 
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
