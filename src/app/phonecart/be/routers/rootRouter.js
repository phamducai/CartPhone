const express = require("express");
const phoneRoute = require("./phoneRouter");

const rootRouter = express.Router();

const userRoute = require("./userRouter");

rootRouter.use("/users", userRoute);
rootRouter.use("/phones", phoneRoute);

module.exports = rootRouter;
