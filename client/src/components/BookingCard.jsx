import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../constants/formatDate";
import { formatTimeWithIntl } from "../constants/formatIntDate";
import { useNavigate } from "react-router";
import BookingActionButtons from "./BookingActionButtons";

const BookingCard = ({ item }) => {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movie.movies);
  const showtimes = useSelector((state) => state.showtime.showtimes);

  const showtime = showtimes.find(
    (showtime) => showtime._id === item.showtimeId
  );
  const movie = movies.find((movie) => movie._id === showtime?.movieId);

  const bookedTime = new Date(item?.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {movie?.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              Date Booked: {formatDate(item?.createdAt)} • {bookedTime}
            </p>
            <p className="text-sm text-gray-500">
              {formatDate(showtime?.date)} •{" "}
              {formatTimeWithIntl(showtime?.startTime)}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {showtime?.hall} • Seats: {item?.ticket?.join(", ")}
            </p>
          </div>
          {item?.status === "Refunded" ? (
            <div className="relative px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden group">
              <span className="relative z-10 font-medium">Refunded</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:animate-pulse"></span>
            </div>
          ) : (
            <button
              className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden group"
              onClick={() => navigate(`/ticket/${item._id}`)}>
              <span className="relative z-10 font-medium">View Ticket</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:animate-pulse"></span>
            </button>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-900 py-2">
            Booking ID: CNM-{item._id}
          </span>
          <BookingActionButtons movie={movie} item={item} showtime={showtime} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
