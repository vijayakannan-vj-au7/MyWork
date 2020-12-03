const { Schema, model } = require("mongoose");

const stockSchema = Schema({
  scrip: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  avgcost: {
    type: Number,
  },
  investamt: {
    type: Number,
  },
  portvalue: {
    type: Number,
  },
  unrealizedpl: {
    type: Number,
  },
  returnvalue: {
    type: Number,
  },
});

const STOCK = model("stock", stockSchema);

module.exports = STOCK;
