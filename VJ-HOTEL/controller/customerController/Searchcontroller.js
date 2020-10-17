const HotelDetails = require('../../model/HotelDetails');

const Search = async (req, res) => {
  const { partcode } = req.query;
  let hotels = await HotelDetails.find({city: partcode});

  if(!hotels.length){
    hotels = await HotelDetails.find({State: partcode})
  }
  // console.log(hotels)
  return res.send({hotels: hotels, isFind: true}).status(200)
};

module.exports = {
  Search
}