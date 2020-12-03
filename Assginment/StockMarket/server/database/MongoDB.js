const dotenv = require("dotenv");
const { connect } = require("mongoose");
dotenv.config();

const DB = process.env.MONGODB_LOCAL;

connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (!error) {
    console.log("Database Connected Successfully");
  } else {
    console.log("Error in Connecting Database");
  }
});
