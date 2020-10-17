const Review = require('../../model/Review');
const Hotel = require('../../model/HotelDetails');

const addreview = async(req, res) => {
  const { hotelid } = req.params;
  const { _id }  = req.user;
  const { review, username, userrating } = req.body;
  let addReviewDetails = {
    hotelid: hotelid,
    userid: _id,
    reviews: review,
    username: username,
    rating: userrating
  }
  const hotels = await Hotel.findOne({_id: hotelid});
  
  const ratings = (parseInt(hotels.rating, 10) + parseInt(userrating, 10)) / 2;
  // console.log(ratings)
  await Hotel.updateOne({_id: hotelid} , { $set: { rating: ratings } })
  const reviews = await Review.create(...addReviewDetails);
  return res.send({isReviewd: true})
};

module.exports = {
  addreview
}