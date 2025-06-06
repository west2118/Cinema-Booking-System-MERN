const express = require("express");
const {
  postBooking,
  getBooking,
  refundBooking,
} = require("../controllers/booking.controller");

const router = express.Router();

router.get("/booking", getBooking);
router.post("/booking/:id", postBooking);
router.post("/booking-refund/:id", refundBooking);

module.exports = router;
