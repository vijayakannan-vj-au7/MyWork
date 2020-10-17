const { Router } = require("express");
const {
  addreview,
} = require("../../controller/customerController/ReviewController");

const CustomerAuth = require("../../middleware/CustomerAuth");

const router = Router();

router.post("/api/hotel/review/:hotelid", CustomerAuth, addreview);

module.exports = router;
