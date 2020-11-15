const { Router } = require("express");
const {
  getStockData,
  addStockData,
} = require("../controllers/stockController");

const router = Router();

router.post("/addstock", addStockData);

router.get("/getstock", getStockData);

module.exports = router;
