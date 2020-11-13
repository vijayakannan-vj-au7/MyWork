const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  education: {
    type: String,
  },
});

const USER = model("user", userSchema);

module.exports = USER;
