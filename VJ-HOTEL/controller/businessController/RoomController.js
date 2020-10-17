const Room = require("../../model/Rooms");
const HotelDetails = require("../../model/HotelDetails");
const cloudinary = require("../../ImageUploads/cloudinary");
const upload = require("../../ImageUploads/multer");
const fs = require("fs");

const createRoom = async (req, res, next) => {
  const hotelUser = req.user;
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

  console.log(req.body);

  const amenities = req.body.amentites;

  let roomDetals = {
    roomname: req.body.roomname,
    roomcost: req.body.price,
    guestallowed: req.body.persons,
    amenities: amenities.split(","),
    roomtype: req.body.roomType,
    rooms: req.body.availableRooms,
    availablerooms: req.body.availableRooms,
    hotelid: hotelUser._id,
    imageUrl: urls,
  };
  // console.log(typeof amenities)
  var room_details = new Room(roomDetals);
  await room_details.save();
  const hotelDetails = await HotelDetails.findOne({ _id: hotelUser._id });
  if (hotelDetails.price === undefined) {
    await HotelDetails.update(
      { _id: hotelDetails._id },
      { $set: { price: req.body.price } }
    );
  } else {
    if (parseInt(hotelDetails.price, 10) <= parseInt(req.body.price, 10)) {
      await HotelDetails.update(
        { _id: hotelDetails._id },
        { $set: { price: req.body.price } }
      );
    }
  }

  if (hotelDetails.amenities.length === 0) {
    await HotelDetails.update(
      { _id: hotelDetails._id },
      {
        $push: {
          amenities: {
            $each: [
              req.body.amentites[0],
              req.body.amentites[1],
              req.body.amentites[2],
              req.body.amentites[3],
              req.body.amentites[4],
              req.body.amentites[5],
            ],
          },
        },
      }
    );
  }

  return res.send({ message: "Room Created" });
};

const getRooms = async (req, res) => {
  const hotelUser = req.user;
  const getRoom = await Room.find({ hotelid: hotelUser._id });
  return res.send({ rooms: getRoom }).status(200);
};

const deleteRooms = async (req, res) => {
  const { id } = req.params;
  const hotelUser = req.user;
  const rooms = await Room.deleteOne({ _id: id });
  console.log(rooms);
  return res.send({ rooms: rooms });
};

module.exports = {
  createRoom,
  getRooms,
  deleteRooms,
};
