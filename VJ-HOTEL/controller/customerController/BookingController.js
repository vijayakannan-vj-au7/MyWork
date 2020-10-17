const Hotel =  require('../../model/HotelDetails');
const Room = require('../../model/Rooms');
const Booking = require('../../model/Booking');
const braintree = require('braintree');

const checkAvailability = async(req, res) => {
  const { checkIn, checkOut, hotelid } = req.query;
  const getRooms = await Rooms.find({hotelid: hotelid});
  const getAvailableRooms = [];
  getRooms.map((rooms) => {
    if(rooms.available){
      getAvailableRooms.push(rooms)
    }
  });
  console.log(getAvailableRooms)
  return res.send({rooms: getAvailableRooms})
};

const checkoutHotel = async(req, res) => {
  const { hotelid, roomid } = req.params;
  // console.log(roomid, hotelid)
  const hotel = await Hotel.findOne({_id: hotelid});
  // console.log(hotel)
  const room = await Room.findOne({_id: roomid});
  // console.log(room)
  let checkoutData = {
    hotelname: hotel.companyname,
    address: hotel.address+', '+hotel.state+',  '+hotel.city+', '+hotel.pin_code,
    rating: hotel.rating,
    price: room.roomcost,
    totalPrice: parseInt(room.roomcost, 10)+ parseInt(1320, 10),
  }
  console.log(room.availablerooms)
  if(room.availablerooms > 0){
    // console.log(room.availablerooms)
    return res.send({result: checkoutData, isBooking: true}).status(200)
  }
  else{
    return res.send({isBooking:false})
  }
  
}

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "rvkzt7k89nkhk5h8",
  publicKey: "jc9dwxkdrfgkbmhx",
  privateKey: "522f3f65e8757f8ec0909afa591fdb4d"
});

const generateTOKEN = async(req, res) => {
  
  gateway.clientToken.generate({}, function(err, response){
    if(err){
      return res.status(500).send(err)
    }
    else{
      return res.send(response)
    }
  })
}

const processPayment = async(req, res) => {
  // console.log(req.user);
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;
  
  let newTransaction = gateway.transaction.sale({
    amount: amountFromTheClient,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, async (error, result) => {
    if(error){
      return res.send(500).json(error)
    }
    else{
      let { hotelid, roomid, persons, rooms, checkOut, checkIn, price } = req.body
      let booking = await Booking.findOne({ hotelid: hotelid });
      // console.log(booking)
      // console.log(checkIn)
      let prices = parseInt(price, 10)
      let bookingData = {
        hotelid: hotelid,
        roomid: roomid,
        userid: req.user._id,
        persons: persons,
        rooms: rooms,
        checkOut: checkOut,
        checkIn: checkIn,
        price: prices + 1320
      }
      const available_room = await Room.findOne({_id: roomid});
      console.log(available_room.availablerooms)
      
      const availabelRooms = available_room.availablerooms - parseInt(rooms, 10);
      const bookings = await Booking.create({...bookingData});
      if(bookings){
        await Room.updateOne({_id: roomid}, { $set: { availablerooms: availabelRooms} })  
        return res.json(result)
      }
      else{
        return res.send({transaction: false})
      }
  
    }
  })
}

module.exports = {
  checkAvailability,
  checkoutHotel,
  generateTOKEN,
  processPayment
}