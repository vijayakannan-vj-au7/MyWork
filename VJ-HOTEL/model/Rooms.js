const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var roomSchema = new Schema({
  roomname: {
    type: String,
    trim: true,
  },
  roomcost: {
    type: String,
    trime: true,
  },
  guestallowed: {
    type: String,
    trim: true,
  },
  amenities: {
    type: Array,
    trim: true,
  },
  rooms: {
    type: String,
    trim: true,
  },
  availablerooms: {
    type: String,
    trim: true,
  },
  roomtype: {
    type: String,
    trim: true,
  },
  hotelid: {
    type: Schema.Types.ObjectId,
    trim: true,
  },
  imageUrl: {
    type: Array,
    trim: true,
  },
});

var Room = mongoose.model("room", roomSchema);

module.exports = Room;
