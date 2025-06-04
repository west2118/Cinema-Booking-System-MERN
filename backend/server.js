const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

const app = express();

const authRoutes = require("./routes/auth.routes");
const refreshTokenRoutes = require("./routes/refreshToken.routes");
const movieRoutes = require("./routes/movie.routes");
const theaterRoutes = require("./routes/theater.routes");
const screenRoutes = require("./routes/screen.routes");
const showtimeRoutes = require("./routes/showtime.routes");
const concessionRoutes = require("./routes/concession.routes");
const bookingRoutes = require("./routes/booking.routes");

app.use(express.json());
app.use(cors());

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  let { amount } = req.body;

  amount = Math.round(Number(amount) * 100);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "php",
      amount,
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(process.env.PORT, () => {
      console.log("Server running");
    });
  })
  .catch((err) => console.log(err));

app.use("/api/auth/", authRoutes);
app.use("/api/refreshToken/", refreshTokenRoutes);
app.use("/api/", movieRoutes);
app.use("/api/", theaterRoutes);
app.use("/api/", screenRoutes);
app.use("/api/", showtimeRoutes);
app.use("/api/", concessionRoutes);
app.use("/api/", bookingRoutes);
