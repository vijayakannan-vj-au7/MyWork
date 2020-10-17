const express = require("express");
const {
  register_hotel,
  check_otp,
  login,
  logout,
} = require("../../controller/businessController/CredentialsController");
const BusinessAuth = require("../../middleware/BusinessAuth");
const upload = require("../../ImageUploads/multer");

const router = express.Router();

router.post("/api/business/signup", upload.array("image"), register_hotel);

router.post("/api/business/check/otp/:id", check_otp);

router.post("/api/business/signin", login);

router.post("/api/business/hotel/logout", BusinessAuth, logout);

module.exports = router;
