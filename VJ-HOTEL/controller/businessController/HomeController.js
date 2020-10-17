const Rooms = require("../../model/Rooms");

const Review = require("../../model/Review");
const Booking = require("../../model/Booking");

const getHomeDetails = async (req, res) => {
  const { _id } = req.user;
  const Reviews = await Review.find({ hotelid: _id });
  const Bookings = await Booking.find({ hotelid: _id });
  const Room = await Rooms.find({ hotelid: _id });
  console.log(Room);
  return res.send({
    review: Reviews,
    booking: Bookings,
    rooms: Room,
    isTokenVerified: true,
  });
};

module.exports = {
  getHomeDetails,
};
