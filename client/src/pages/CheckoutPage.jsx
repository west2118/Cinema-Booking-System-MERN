import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../constants/formatDate";
import { formatTimeWithIntl } from "../constants/formatIntDate";

const CheckoutPage = () => {
  // Fake data
  const booked = useSelector((state) => state.booking);
  const showtimes = useSelector((state) => state.showtime.showtimes);
  const movies = useSelector((state) => state.movie.movies);

  const showtime = showtimes.find(
    (showtime) => showtime._id === booked?.selectedShowtimeId
  );

  const movie = movies.find((movie) => movie._id === showtime?.movieId);

  // const movie = {
  //   title: "Inception",
  //   time: "7:30 PM",
  //   date: "June 15, 2023",
  //   theater: "Screen 5",
  //   seats: ["F5", "F6"],
  //   poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  //   cover:
  //     "http://images2.fanpop.com/image/photos/12300000/Inception-Wallpaper-inception-2010-12396931-1440-900.jpg",
  // };

  const pricing = {
    tickets: 2,
    ticketPrice: 12.99,
    convenienceFee: 2.5,
    tax: 1.75,
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
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Payment Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Price Breakdown
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Tickets ({booked?.selectedSeats.length}x)
                </span>
                <span>
                  ${(showtime?.price * booked?.selectedSeats.length).toFixed(2)}
                </span>
              </div>
              <h1 className="font-semibold">Adds Ons</h1>

              <div className="flex flex-col gap-y-3">
                {booked?.addOns.items.map((item) => (
                  <div className="flex justify-between">
                    <span className="text-gray-600">{item?.name}</span>
                    <span>${item?.price?.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${pricing.tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-gray-200 font-medium text-gray-900">
                <span>Total</span>
                <span>
                  $
                  {(
                    showtime?.price * booked?.selectedSeats.length +
                    booked?.addOns?.subTotal
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Final Actions */}
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button className="px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
              Back to Seat Selection
            </button>

            <button className="px-6 py-3 bg-blue-600 rounded-md text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
