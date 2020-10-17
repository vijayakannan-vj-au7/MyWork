const mongoose = require("mongoose");

const schema = mongoose.Schema;

var bookingSchema = new schema({
  userid: {
    type: schema.Types.ObjectId,
    trim: true,
  },
  hotelid: {
    type: schema.Types.ObjectId,
    trim: true,
  },
  roomid: {
    type: schema.Types.ObjectId,
    trim: true,
  },
  checkIn: {
    type: String,
    trim: true,
  },
  checkOut: {
    type: String,
    trim: true,
  },
  persons: {
    type: String,
    trim: true,
  },
  rooms: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  isBooked: {
    type: String,
    trim: true,
  },
});

var Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
