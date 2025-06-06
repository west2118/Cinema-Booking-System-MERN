import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { formatTimeWithIntl } from "../constants/formatIntDate";
import { formatDate } from "../constants/formatDate";
import Loading from "../components/Loading";

const PaymentSuccessPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookings = useSelector((state) => state.booking.bookings);
  const showtimes = useSelector((state) => state.showtime.showtimes);
  const movies = useSelector((state) => state.movie.movies);
  const theaters = useSelector((state) => state.theater.theaters);

  const booking = bookings.find((booking) => booking._id === id);
  const showtime = showtimes.find(
    (showtime) => showtime._id === booking?.showtimeId
  );
  const movie = movies.find((movie) => movie._id === showtime?.movieId);
  const theater = theaters.find(
    (theater) => theater._id === showtime?.theaterId
  );

  if (!booking || !showtime || !movie) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 pt-[94px]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full my-10">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your booking. Your tickets have been reserved.
        </p>

        {/* Booking Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-lg text-gray-700 mb-3">
            Booking Details
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Movie:</span>
              <span className="font-medium">{movie?.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium">
                {formatDate(showtime?.date)} at
                {formatTimeWithIntl(showtime?.startTime)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Seats:</span>
              <span className="font-medium">{booking?.ticket.join(" ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cinema:</span>
              <span className="font-medium">{theater?.name}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-600">Total Paid:</span>
              <span className="font-bold text-blue-600">
                ₱{booking?.totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Booking Reference */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between space-x-2">
            <span className="text-gray-700">Booking Reference:</span>
            <span className="font-mono font-bold text-blue-600">
              CNM-{booking._id}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => navigate(`/ticket/${booking._id}`)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
            View Ticket
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition duration-200">
            Back to Home
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Need help? Contact our support team at support@cineplex.com
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
