const express = require("express");
const {
  createRoom,
  getRooms,
  deleteRooms,
} = require("../../controller/businessController/RoomController");
const BusinessAuth = require("../../middleware/BusinessAuth");
const upload = require("../../ImageUploads/multer");

const router = express.Router();

router.post(
  "/api/business/create/room",
  BusinessAuth,
  upload.array("image"),
  createRoom
);

router.get("/api/business/get/room", BusinessAuth, getRooms);

router.delete("/api/business/delete/room/:id", BusinessAuth, deleteRooms);

module.exports = router;
