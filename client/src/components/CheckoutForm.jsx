import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../constants/formatDate";
import { formatTimeWithIntl } from "../constants/formatIntDate";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.storage.userId);
  const booked = useSelector((state) => state.booking);
  const showtimes = useSelector((state) => state.showtime.showtimes);
  const movies = useSelector((state) => state.movie.movies);
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const showtime = showtimes.find(
    (showtime) => showtime._id === booked?.selectedShowtimeId
  );

  const movie = movies.find((movie) => movie._id === showtime?.movieId);

  const totalAmount =
    showtime?.price * booked?.selectedSeats.length + booked?.addOns?.subTotal;

  const bookingData = {
    userId,
    showtimeId: booked?.selectedShowtimeId,
    ticket: booked?.selectedSeats,
    ticketPrice: showtime?.price,
    addOns: booked?.addOns?.items?.map((addOn) => ({
      id: addOn.id,
      name: addOn.name,
      price: addOn.price,
      quantity: addOn.quantity,
      totalPrice: addOn.price * addOn.quantity,
    })),
    totalAmount,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    console.log(paymentIntent.status);

    if (!error && paymentIntent && paymentIntent.status === "succeeded") {
      await axios.post(
        `http://localhost:8080/api/booking/${userId}`,
        bookingData
      );

      navigate("/booking/checkout/success-payment");
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 pt-[72px]">
      <div className="max-w-4xl mx-auto my-14">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div
            className="p-6 border-b border-gray-200 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${movie?.background})` }}>
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Your Order
              </h2>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 flex-shrink-0">
                  <img
                    src={movie?.poster}
                    alt={movie?.title}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex-1 text-white">
                  <h3 className="text-lg font-medium text-white">
                    {movie?.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-200">
                    <p>
                      {showtime?.hall} •{" "}
                      {formatTimeWithIntl(showtime?.startTime)} •{" "}
                      {formatDate(showtime?.date)}
                    </p>
                    <p className="mt-1">
                      Seats: {booked.selectedSeats.join(" - ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details Section */}
          <form onSubmit={handleSubmit}>
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Payment Details
              </h2>

              <div className="border p-4 rounded-md">
                <PaymentElement id="payment-element" />
              </div>
              {errorMessage && (
                <div className="text-red-600 mt-2" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Price Breakdown
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Tickets({booked?.selectedSeats.length}x)
                  </span>
                  <span>
                    $
                    {(showtime?.price * booked?.selectedSeats.length).toFixed(
                      2
                    )}
                  </span>
                </div>
                <h1 className="font-semibold">Adds Ons</h1>

                <div className="flex flex-col gap-y-3">
                  {booked?.addOns.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-600">
                        {item?.name}({item?.quantity}x)
                      </span>
                      <span>${(item?.price * item?.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>$12</span>
                </div>

                <div className="flex justify-between pt-3 border-t border-gray-200 font-medium text-gray-900">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Final Actions */}
            <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                Back to Seat Selection
              </button>

              <button
                type="submit"
                disabled={!stripe || isProcessing}
                className="px-6 py-3 bg-blue-600 rounded-md text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto">
                {isProcessing ? "Processing..." : "Confirm Payment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
