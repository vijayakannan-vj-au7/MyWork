//using the env data
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// importing the package
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("hbs");
// importing userdefine functions
require("./database/MongoDB");
const normalRouter = require("./routers/normal-routers/normal-router");
const apiRouter = require("./routers/api-routers/api-router");

// accessing the port details from env file
const PORT = process.env.PORT || 3000;
// variable for accessing the express finction
const app = express();
// middleware
app.use(express.json()); // json for data in readable form
app.use(morgan("tiny")); // logger
app.use(normalRouter);
app.use(apiRouter);
// using hbs view
app.set("view engine", "hbs");
// path for views
app.set("views", path.join(__dirname, "views"));

// server created
app.listen(PORT, () => {
  console.log(`Server Started @ ${PORT}`);
});
