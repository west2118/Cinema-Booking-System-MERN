const express = require("express");
const { postShowtime } = require("../controllers/showtime.controller");

const router = express.Router();

router.post("/showtime", postShowtime);

module.exports = router;
