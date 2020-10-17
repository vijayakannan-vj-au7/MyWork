const Hotel = require('../../model/HotelDetails');
const Review = require('../../model/Review');
const Rooms = require('../../model/Rooms');
const Booking = require('../../model/Booking');
const Email = require('../../model/EmailSchema');
const User = require('../../model/User');
const bcrypt = require('bcryptjs');

const getHotelDetails = async(req, res) => {
  const { id } = req.params
  const token = req.headers['authorization'];
  // console.log(token)
  let customeruser;
  let isUserBooked;
  let checkBooking;
  if(token){
    console.log('token', token)
    customeruser = await User.findOne({token: token})
    checkBooking = await Booking.findOne({hotelid: id, userid: customeruser._id})
    if(checkBooking){
      isUserBooked = true
    }
    else{
      isUserBooked = false
    }
  }
  else{
    // console.log(token)
    customeruser = {
      username: ""
    }
  }
  console.log(id)
  const details = await Hotel.findOne({_id: id});
  const review = await Review.find({hotelid: id});
  const rooms = await Rooms.find({hotelid: id, availablerooms: { $gt: 0 }});
  let isAvailable;
  if(rooms.length != 0){
    isAvailable = true
  }
  else{
    isAvailable = false
  }
  return res.send({
    details: details, 
    review: review,
    isFind:true, 
    rooms: rooms, 
    isAvailable: isAvailable,
    isUserBooked: isUserBooked,
    username: customeruser.username
  })
  
};

const getProfile = async(req, res) => {
  const customerUser = req.user;
  const booking = await Booking.find({userid: customerUser._id});
  const email = await Email.findOne({_id: customerUser.emailId});
  const bookings = [];
  booking.map(async (list) => {
      let id = list.hotelid
      const hotel = await Hotel.findOne({_id: id })
      const bookDetails = await Booking.findOne({ _id: list._id })
      let bookList = {
        hotelName: hotel.companyname,
        address: hotel.city+','+hotel.state,
        checkIn: bookDetails.checkIn,
        checkOut: bookDetails.checkOut,
        persons: bookDetails.persons,
        rooms: bookDetails.rooms,
        price: bookDetails.price
      }
      console.log(bookList)
      bookings.push(bookList)
    })

  setTimeout(() => {
    let profile = {
      name: customerUser.username,
      phoneno: customerUser.phoneno,
      email: email.email,
      address: customerUser.address,
      booking: bookings
    };
    return res.send({profile: profile, isProfile: true}).status(200)
  }, 1000)
};

const updateProfile = async(req, res) => {
  const customerUSer = req.user;
  const { address, password } = req.body
  console.log(address)
  console.log(password.length)
  if(password.length === 0){
    await User.update({_id: customerUSer._id}, { $set : { address: address } })
  } 
  else{
    const passwords = await bcrypt.hash(password, 10);
    await User.update({_id: customerUSer._id}, { $set : { address: address, password: passwords } })
  }
}

module.exports = {
  getHotelDetails,
  getProfile,
  updateProfile
};