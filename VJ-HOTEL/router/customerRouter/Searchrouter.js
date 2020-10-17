const { Router } = require("express");
const {
  Search,
} = require("../../controller/customerController/Searchcontroller");

const router = Router();

router.get("/api/search", Search);

module.exports = router;
