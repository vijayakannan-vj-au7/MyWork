//using the env data
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
// importing the package
const express = require("express");
const morgan = require("morgan");

// importing userdefine functions
require("./database/MongoDB");
const stockRouter = require("./routers/stockRouter");

// accessing the port details from env file
const PORT = process.env.PORT || 5000;
// variable for accessing the express finction
const app = express();
//Cors method
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});
// middleware
app.use(express.json()); // json for data in readable form
app.use(morgan("tiny")); // logger
app.use("/api", stockRouter);

// server created
app.listen(PORT, () => {
  console.log(`Server Started @ ${PORT}`);
});
