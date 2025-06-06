import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../constants/formatDate";
import { formatTimeWithIntl } from "../../constants/formatIntDate";

const AdminBookingCard = ({ bookings }) => {
  const showtimes = useSelector((state) => state.showtime.showtimes);
  const movies = useSelector((state) => state.movie.movies);
  const theaters = useSelector((state) => state.theater.theaters);

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {bookings.map((booking) => {
        const showtime = showtimes.find(
          (showtime) => showtime._id === booking.showtimeId
        );
        const movie = movies.find((movie) => movie._id === showtime?.movieId);
        const theater = theaters.find(
          (theater) => theater._id === showtime?.theaterId
        );

        return (
          <tr key={booking._id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
              {booking.userId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
              {theater?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
                {movie?.title}
                <span className="text-xs">{` ₱${booking.ticketPrice}`}</span>
              </div>
              <div className="text-xs text-gray-500">#{booking._id}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {showtime?.hall}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {formatDate(showtime?.date)}
              </div>
              <div className="text-xs text-gray-500">
                {formatTimeWithIntl(showtime?.startTime)}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex flex-wrap gap-1">
                {booking.ticket.map((seat) => (
                  <span
                    key={seat}
                    className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                    {seat}
                  </span>
                ))}
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="space-y-2">
                {booking.addOns.length >= 1 ? (
                  booking.addOns.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center">
                      <span className="text-sm text-gray-800 font-medium">
                        {item.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium shadow-sm w-fit">
                    No Adds On
                  </p>
                )}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              ${booking.totalAmount.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-800"
                    : booking.status === "Cancelled"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                }`}>
                {booking.status}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default AdminBookingCard;
