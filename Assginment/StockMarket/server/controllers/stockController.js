const Stock = require("../model/stock");

module.exports = {
  async addStockData(req, res) {
    try {
      const stockDetail = req.body;
      console.log(stockDetail);
      await Stock.create({ ...stockDetail });
      return res
        .json({
          message: "Stock Data added",
        })
        .status(200);
    } catch (err) {
      console.log("Error:", err);
    }
  },
  //
  async getStockData(req, res) {
    try {
      const stockDetail = await Stock.find();
      return res
        .json({
          stockDetail,
        })
        .status(200);
    } catch (err) {
      console.log("Error:", err);
    }
  },
};
