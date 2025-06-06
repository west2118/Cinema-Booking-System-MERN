import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/Loading";
import { formatTimeWithIntl } from "../constants/formatIntDate";
import { formatDate } from "../constants/formatDate";

const TicketPage = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8 pt-[74px] relative">
      {/* Back arrow button */}
      <button
        onClick={() => navigate("/profile")}
        className="absolute top-28 left-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <div className="max-w-md w-full my-10">
        {/* Ticket Header */}
        <div className="bg-gray-900 rounded-t-xl p-4 text-center">
          <h1 className="text-2xl font-bold text-white">CINEPLEX</h1>
          <p className="text-blue-100">Your Movie Experience</p>
        </div>

        {/* Ticket Body */}
        <div className="bg-white shadow-2xl relative">
          {/* Perforation effect */}
          <div className="absolute left-0 right-0 top-0 flex justify-between px-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-4 w-1 bg-gray-900 rounded-b-full" />
            ))}
          </div>

          <div className="p-6">
            {/* Movie Info */}
            <div className="flex mb-6">
              <div className="w-1/3">
                <div className="bg-gray-200 aspect-[2/3] rounded-lg overflow-hidden">
                  {/* Movie poster placeholder */}
                  <div className="h-full flex items-center justify-center bg-gray-300">
                    <img
                      className="h-full w-full object-cover"
                      src={movie?.poster}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-2/3 pl-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {movie?.title}
                </h2>
                <p className="text-gray-600 mb-2">{movie?.rating}</p>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {formatDate(showtime?.date)}
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {formatTimeWithIntl(showtime?.startTime)}
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    {showtime?.hall}
                  </p>
                </div>
              </div>
            </div>

            {/* Ticket Details */}
            <div className="border-t border-b border-gray-200 py-4 my-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Cinema
                  </h3>
                  <p>{theater?.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Seats</h3>
                  <p>{booking?.ticket?.join(", ")}</p>
                </div>
                {booking?.addOns?.length > 1 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Add Ons
                    </h3>
                    {booking?.addOns?.map((addOn) => (
                      <p key={addOn._id}>
                        {addOn?.name} ({addOn?.quantity}x)
                      </p>
                    ))}
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Total Amount
                  </h3>
                  <p>₱ {booking?.totalAmount}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-500">
                  Booking ID
                </h3>
                <p className="font-mono">CNM-{booking._id}</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center my-6">
              <div className="bg-gray-200 p-4 rounded-lg">
                <div className="w-40 h-40 bg-white flex items-center justify-center">
                  <span className="text-gray-500 text-sm">QR CODE</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-xs text-gray-500">
              <p>Present this ticket at the cinema entrance</p>
              <p className="mt-1">
                Ticket valid until 30 minutes after showtime
              </p>
              <p className="mt-4">No refunds or exchanges | © 2023 Cineplex</p>
            </div>
          </div>

          {/* Perforation effect */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-between px-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-4 w-1 bg-gray-900 rounded-t-full" />
            ))}
          </div>
        </div>

        {/* Ticket Actions */}
        <div className="bg-gray-900 rounded-b-xl p-4 flex justify-between">
          <button className="text-blue-300 font-medium">Save to Wallet</button>
          <button className="text-blue-300 font-medium">Print Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
