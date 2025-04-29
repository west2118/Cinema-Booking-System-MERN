const mongoose = require("mongoose");

const ShowtimeSchema = mongoose.Schema({
  screedId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Screen",
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  theaterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theater",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  availableTimes: {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    bookedSeats: [{ type: String }],
  },
  price: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

const Showtime = mongoose.model("Showtime", ShowtimeSchema);

module.exports = Showtime;
