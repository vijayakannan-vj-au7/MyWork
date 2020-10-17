const express = require("express");
const {
  getBooking,
} = require("../../controller/businessController/BookingController");
const BusinessAuth = require("../../middleware/BusinessAuth");

const router = express.Router();

router.get("/api/business/hotel/booking", BusinessAuth, getBooking);

module.exports = router;
