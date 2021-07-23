import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";

const app = express();

app.use("/", globalRouter);
app.use("/stories", storyRouter);
app.use("/users", userRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
