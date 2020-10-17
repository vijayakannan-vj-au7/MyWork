const express = require("express");
const {
  checkAvailability,
  checkoutHotel,
  generateTOKEN,
  processPayment,
} = require("../../controller/customerController/BookingController");
const CustomerAuth = require("../../middleware/CustomerAuth");

const router = express.Router();

router.get("/api/hotel/check", checkAvailability);

router.get("/api/hotel/checkout/:hotelid/:roomid", checkoutHotel);

router.get("/api/braintree/getToken", CustomerAuth, generateTOKEN);

router.post("/api/braintree/payment", CustomerAuth, processPayment);

module.exports = router;
