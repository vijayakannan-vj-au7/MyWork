// Custom Packagae
const HotelDetails = require("../../model/HotelDetails");
const { sendOtp } = require("../../utils/email/OtpEmail");
const cloudinary = require("../../ImageUploads/cloudinary");
const upload = require("../../ImageUploads/multer");
const fs = require("fs");

// Third Party Package
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const privateKey = "skdgfusgfiugswigflwegfudsgf]i";

const otp = () => {
  const num = Math.floor(100000 + Math.random() * 900000);
  return num;
};

const register_hotel = async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await uploader(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }
  // console.log(urls)
  const {
    name,
    companyname,
    address,
    state,
    city,
    pin_code,
    mobileno,
    email,
    password,
  } = req.body;
  const hotelEmail = await HotelDetails.findOne({ hotel_email: email });

  if (hotelEmail) {
    return res.send({
      message: "Email is Already Registered",
      isRegistered: false,
    });
  }
  const hotelPassword = await bcrypt.hash(password, 10);
  console.log(req.body);
  const otp_num = await sendOtp(email, otp());
  const hotelDetails = {
    managername: name,
    companyname: companyname,
    address: address,
    state: state,
    city: city,
    pin_code: pin_code,
    hotel_mobileno: mobileno,
    hotel_email: email,
    password: hotelPassword,
    otp: otp_num,
    imageUrl: urls,
  };

  var hotel_details = new HotelDetails(hotelDetails);
  const hotelDetail = await hotel_details.save();

  return res.send({ id: hotelDetail._id, isRegistered: true });
};

const check_otp = async (req, res) => {
  const { otp } = req.body;
  const hotel_id = req.params.id;
  // console.log(hotel_id)
  const checkHotel = await HotelDetails.findOne({ _id: hotel_id });
  if (checkHotel) {
    if (checkHotel.otp === otp) {
      return jwt.sign({ id: hotel_id }, privateKey, async (err, token) => {
        await HotelDetails.update(
          { _id: hotel_id },
          { $set: { token: token, otp: null } }
        );
        res
          .send({ isChecked: true, token: token, isBusiness: true })
          .status(200);
      });
    } else {
      return res.send({
        checkOtp: "Otp is Invalid",
        isChecked: false,
        isBusiness: false,
      });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const hotelEmail = await HotelDetails.findOne({ hotel_email: email });
  // console.log(hotelEmail)
  if (!hotelEmail) {
    return res
      .send({ isValid: false, isBusiness: true, message: "Email is incorrect" })
      .status(401);
  }
  const user = await HotelDetails.findByEmailAndPassword(email, password);
  // console.log(user)
  if (user) {
    jwt.sign({ id: user._id }, privateKey, async (err, token) => {
      await HotelDetails.update(
        { hotel_email: email },
        { $set: { token: token } }
      );
      return res
        .send({ token: token, isValid: true, isBusiness: true })
        .status(200);
    });
  } else {
    return res
      .send({
        isValid: false,
        isBusiness: true,
        message: "Credentials are incorrect",
      })
      .status(401);
  }
};

const logout = async (req, res) => {
  const hotelUser = req.user;
  console.log("Hotel");
  console.log(hotelUser._id);
  await HotelDetails.updateOne(
    { _id: hotelUser._id },
    { $set: { token: null } }
  );
  return res.send({ isLogout: true });
};

module.exports = {
  register_hotel,
  check_otp,
  login,
  logout,
};
