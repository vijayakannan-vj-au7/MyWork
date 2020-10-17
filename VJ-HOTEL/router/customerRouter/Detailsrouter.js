const { Router } = require("express");
const {
  getHotelDetails,
  getProfile,
  updateProfile,
} = require("../../controller/customerController/DetailsController");

const CustomerAuth = require("../../middleware/CustomerAuth");

const router = Router();

router.get("/api/hotel/details/:id", getHotelDetails);

router.get("/api/hotel/profile", CustomerAuth, getProfile);

router.put("/api/hotel/user/profile", CustomerAuth, updateProfile);

module.exports = router;
