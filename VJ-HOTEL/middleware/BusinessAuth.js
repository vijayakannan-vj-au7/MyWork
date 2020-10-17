const HotelDetails = require("../model/HotelDetails");

const BusinessAuth = async (req, res, next) => {
  const token = req.headers["authorization"];

  const validate_user = await HotelDetails.findOne({ token: token });

  if (validate_user) {
    req.user = validate_user;
    next();
  } else {
    return res.send({ isTokenVerified: false });
  }
};

module.exports = BusinessAuth;
