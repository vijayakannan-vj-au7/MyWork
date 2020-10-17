const express = require("express");
const {
  getHomeDetails,
} = require("../../controller/businessController/HomeController");
const BusinessAuth = require("../../middleware/BusinessAuth");

const router = express.Router();

router.get("/api/business/home", BusinessAuth, getHomeDetails);

module.exports = router;
