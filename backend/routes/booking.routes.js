const express = require("express");
const { postBooking } = require("../controllers/booking.controller");

const router = express.Router();

router.post("/booking/:id", postBooking);

module.exports = router;
