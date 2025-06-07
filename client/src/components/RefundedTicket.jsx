import React from "react";
import { useNavigate } from "react-router";
import { formatDate } from "../constants/formatDate";
import { formatTimeWithIntl } from "../constants/formatIntDate";

const RefundedTicket = ({ booking, showtime, movie, theater }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 py-8 pt-[74px]">
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
        <div className="bg-gray-600 rounded-t-xl p-4 text-center">
          <h1 className="text-2xl font-bold text-white">CINEPLEX</h1>
          <p className="text-gray-200">Refunded Ticket</p>
        </div>

        {/* Ticket Body */}
        <div className="bg-white shadow-lg relative border-2 border-gray-300">
          {/* Perforation effect */}
          <div className="absolute left-0 right-0 top-0 flex justify-between px-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-4 w-1 bg-gray-400 rounded-b-full" />
            ))}
          </div>

          <div className="p-6">
            {/* Refund banner */}
            <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-6 flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500 mr-2 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="font-bold text-red-700">
                  This ticket has been refunded
                </h3>
                <p className="text-sm text-red-600">
                  This booking is no longer valid for entry
                </p>
              </div>
            </div>

            {/* Movie Info */}
            <div className="flex mb-6 opacity-70">
              <div className="w-1/3">
                <div className="bg-gray-200 aspect-[2/3] rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
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
                <h2 className="text-xl font-bold text-gray-600">
                  {movie?.title}
                </h2>
                <p className="text-gray-500 mb-2">{movie?.rating}</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
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
                      className="w-4 h-4 mr-2 text-gray-400"
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
                      className="w-4 h-4 mr-2 text-gray-400"
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
              <div className="grid grid-cols-2 gap-4 text-gray-500">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400">
                    Cinema
                  </h3>
                  <p>{theater?.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400">Seats</h3>
                  <p>{booking?.ticket?.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400">
                    Add Ons
                  </h3>
                  {booking?.addOns?.map((addOn) => (
                    <p key={addOn._id}>
                      {addOn?.name} ({addOn?.quantity}x)
                    </p>
                  ))}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400">
                    Refunded Amount
                  </h3>
                  <p className="text-green-600">₱{booking?.totalAmount}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-400">
                  Booking ID
                </h3>
                <p className="font-mono text-gray-500">CNM-{booking?._id}</p>
              </div>
            </div>

            {/* QR Code - Strikethrough */}
            <div className="flex justify-center my-6 relative">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-40 h-40 bg-white flex items-center justify-center relative">
                  <span className="text-gray-400 text-sm">QR CODE</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-red-500 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-xs text-gray-400">
              <p>
                This ticket was refunded on {formatDate(booking?.updatedAt)}
              </p>
              <p className="mt-1">Refund ID: RF-28B4X9P</p>
              <p className="mt-4">© 2023 Cineplex</p>
            </div>
          </div>

          {/* Perforation effect */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-between px-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-4 w-1 bg-gray-400 rounded-t-full" />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-400 rounded-b-xl p-4 text-center text-gray-600">
          This ticket is no longer valid for entry
        </div>
      </div>
    </div>
  );
};

export default RefundedTicket;
