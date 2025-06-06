import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../constants/formatDate";
import { formatTimeWithIntl } from "../constants/formatIntDate";
import { toast } from "react-toastify";
import axios from "axios";

const RefundModal = ({ isOpen, isCloseModal, item, showtime }) => {
  const userId = useSelector((state) => state.storage.userId);
  const movies = useSelector((state) => state.movie.movies);
  const movie = movies.find((movie) => movie._id === showtime?.movieId);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const refundPayment = async () => {
    try {
      const response = await axios.post("http://localhost:8080/refund", {
        paymentIntentId: item?.paymentIntentId,
        amount: item?.totalAmount,
      });

      console.log(response.data.message);

      if (response.data.success) {
        const responseBooking = await axios.post(
          `http://localhost:8080/api/booking-refund/${userId}`,
          {
            showtimeId: item?.showtimeId,
            ticket: item?.ticket,
            addOns: item?.addOns,
            bookingId: item?._id,
          }
        );

        console.log(responseBooking.data);
        toast.success(responseBooking.data.message);
      } else {
        toast.error("Refund error");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return ReactDOM.createPortal(
    <div
      onClick={isCloseModal}
      className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-indigo-900 to-purple-800 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Modal Header */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500"></div>
          <div className="p-6 flex items-center">
            <div className="bg-yellow-400 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Refund Request</h2>
              <p className="text-purple-200">Cinema Booking System</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 pb-6">
          <div className="bg-black bg-opacity-30 rounded-lg p-4 mb-6 border border-purple-500 border-opacity-30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-300">Booking ID:</span>
              <span className="font-mono text-white">CNM-{item?._id}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-300">Movie:</span>
              <span className="text-white font-medium">{movie?.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-300">Showtime:</span>
              <span className="text-white">
                {formatDate(showtime?.date)} •{" "}
                {formatTimeWithIntl(showtime?.startTime)}
              </span>
            </div>
          </div>

          <div className="bg-yellow-500 bg-opacity-10 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white mr-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-white text-sm">
                Refunds may take 3-5 business days to process. A 10% convenience
                fee will be deducted from your refund amount.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-purple-300 text-lg">Refund Amount:</span>
            <span className="text-white font-bold text-xl">
              ₱{item?.totalAmount.toFixed(2)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={isCloseModal}
              className="flex-1 bg-transparent hover:bg-purple-700 text-white font-semibold py-3 px-4 border border-purple-500 rounded-lg transition duration-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
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
              Cancel
            </button>
            <button
              onClick={refundPayment}
              className="flex-1 text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700  font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Confirm Refund
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-opacity-20 px-6 py-3 text-center">
          <p className="text-white text-xs">
            Need help? Contact our support team at support@cinebook.com
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default RefundModal;
