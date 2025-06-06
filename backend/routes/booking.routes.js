const express = require("express");
const {
  postBooking,
  getBooking,
} = require("../controllers/booking.controller");

const router = express.Router();

router.get("/booking", getBooking);
router.post("/booking/:id", postBooking);

module.exports = router;
