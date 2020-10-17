var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var Schema = mongoose.Schema;

var hoteldetailsSchema = new Schema(
  {
    managername: {
      type: String,
      trim: true,
    },
    companyname: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    pin_code: {
      type: String,
      trim: true,
    },
    hotel_mobileno: {
      type: String,
      trim: true,
    },
    hotel_email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    amenities: {
      type: Array,
      trim: true,
    },
    otp: {
      type: String,
      trim: true,
    },
    rating: {
      type: String,
      trim: true,
      default: 0,
    },
    imageUrl: {
      type: Array,
      trim: true,
    },
    token: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

hoteldetailsSchema.statics.findByEmailAndPassword = function (email, password) {
  var userObj = null;
  console.log(email, password);
  return new Promise(function (resolve, reject) {
    HotelDetails.findOne({ hotel_email: email })
      .then(function (user) {
        console.log(user);
        if (!user) reject("Incorrect credentials");
        userObj = user;
        return bcrypt.compare(password, user.password);
      })
      .then(function (isMatched) {
        if (!isMatched) reject("Incorrect credentials");
        resolve(userObj);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

var HotelDetails = mongoose.model("hoteldetails", hoteldetailsSchema);

module.exports = HotelDetails;
