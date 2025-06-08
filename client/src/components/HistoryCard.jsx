import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../constants/formatDate";
import { formatTimeWithIntl } from "../constants/formatIntDate";

const HistoryCard = ({ booking }) => {
  const userId = useSelector((state) => state.storage.userId);
  const movies = useSelector((state) => state.movie.movies);
  const showtimes = useSelector((state) => state.showtime.showtimes);

  const showtime = showtimes.find(
    (showtime) => showtime._id === booking.showtimeId
  );
  const movie = movies.find((movie) => movie._id === showtime?.movieId);

  const ratedReview = movie?.reviews?.find(
    (review) => review.userId === userId && review.bookingId === booking._id
  );

  const userRating = ratedReview ? ratedReview.rating : 0;

  return (
    <tr key={booking?._id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{movie?.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {formatDate(showtime?.date)} •{" "}
          {formatTimeWithIntl(showtime?.startTime)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">D4, D5</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              className={`w-4 h-4 ${
                i < Math.ceil(userRating) ? "text-yellow-400" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{booking?.status}</div>
      </td>
    </tr>
  );
};

export default HistoryCard;
