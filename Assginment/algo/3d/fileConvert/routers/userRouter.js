const { Router } = require("express");
const { addUserData, convertData } = require("../controllers/userController");

const router = Router();

//
router.post("/adduser", addUserData);

//
router.get("/convert", convertData);

module.exports = router;
