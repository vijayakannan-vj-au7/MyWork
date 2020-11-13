//using the env data
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// importing the package
const express = require("express");
const path = require("path");
const morgan = require("morgan");

// importing userdefine functions
require("./database/MongoDB");
const userRouter = require("./routers/userRouter");

// accessing the port details from env file
const PORT = process.env.PORT || 3000;
// variable for accessing the express finction
const app = express();
// middleware
app.use(express.json()); // json for data in readable form
app.use(morgan("tiny")); // logger
app.use("/api", userRouter);

// server created
app.listen(PORT, () => {
  console.log(`Server Started @ ${PORT}`);
});
