const mongoose = require("mongoose");
const Booking = require("../models/booking.model");
const Concession = require("../models/concession.model");
const Showtime = require("../models/showtime.model");

const postBooking = async (req, res) => {
  try {
    const { showtimeId, ticket, ticketPrice, addOns, totalAmount } = req.body;
    const { id } = req.params;

    await Showtime.findByIdAndUpdate(showtimeId, {
      $push: { bookedSeats: { $each: ticket } },
    });

    const concessionResults = [];

    for (let addOn of addOns) {
      const { id: addOnId, quantity } = addOn;

      const concession = await Concession.findById(addOnId);
      if (!concession) {
        return res.status(400).json({ message: `Concession not found` });
      }

      if (concession.stock < quantity) {
        return res
          .status(400)
          .json({ message: `Not enough stock for ${concession.name}` });
      }

      concession.stock -= quantity;

      await concession.save();
      concessionResults.push(concession);
    }

    const booking = new Booking({
      showtimeId,
      userId: id,
      ticket,
      ticketPrice,
      addOns,
      totalAmount,
      status: "Paid",
      paymentStatus: "Card",
    });

    const newBooking = await booking.save();

    res.status(201).json({
      message: "Booked Successfully!",
      newBooking,
      updatedConcession: concessionResults,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { postBooking };
