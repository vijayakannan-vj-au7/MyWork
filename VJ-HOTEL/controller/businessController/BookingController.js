const Booking = require("../../model/Booking");

const getBooking = async (req, res) => {
  const businessUser = req.user;
  const booking = await Booking.find({ hotelid: businessUser._id });
  // console.log(booking)
  if (booking.length != 0) {
    return res.send({ booking: booking, isBooking: true }).status(200);
  }
  return res.send({ booking: booking, isBooking: false }).status(200);
};

module.exports = {
  getBooking,
};
