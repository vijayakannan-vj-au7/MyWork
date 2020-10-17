const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var reviewSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    trim: true,
  },
  rating: {
    type: String,
    trim: true,
  },
  hotelid: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

var Review = mongoose.model("review", reviewSchema);

module.exports = Review;
