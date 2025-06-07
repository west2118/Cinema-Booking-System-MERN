import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const stars = [1, 2, 3, 4, 5];

const RateModal = ({ isOpen, isClose, item, movie }) => {
  const [ratings, setRatings] = useState(0);
  const userId = useSelector((state) => state.storage.userId);
  const ratedReview = movie?.reviews?.find(
    (review) => review.userId === userId && review.bookingId === item._id
  );

  const userRating = ratedReview ? ratedReview.rating : 0;

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

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/booking/${userId}`,
        {
          bookingId: item._id,
          rating: ratings,
          movieId: movie._id,
        }
      );

      isClose();
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return ReactDOM.createPortal(
    <div
      onClick={isClose}
      className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-indigo-900 to-purple-800 rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm">
        {/* Modal Header */}
        <div className="p-6 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500"></div>
          <div className="mx-auto w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Rate This Movie</h2>
          <p className="text-purple-200 mt-1">
            How would you rate Galactic Odyssey?
          </p>
        </div>

        {/* Modal Body - Star Rating */}
        <div className="px-6 pb-6">
          {!item.isReviewed ? (
            <div className="flex justify-center mb-8">
              {stars.map((value) => (
                <button
                  key={value}
                  onClick={() => setRatings(value)}
                  className="focus:outline-none mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-12 w-12 ${
                      value <= ratings ? "text-yellow-400" : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-black bg-opacity-30 rounded-lg p-4 mb-6 border border-purple-500 border-opacity-30">
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-400 mr-2">
                  {userRating.toFixed(1)}
                </span>
                <div className="flex">
                  {stars.map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        star <= userRating ? "text-yellow-400" : "text-gray-500"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-center text-purple-200 mt-2">
                {`You rated this ${userRating} stars`}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={isClose}
              className="flex-1 bg-transparent hover:bg-purple-700 text-white font-semibold py-3 px-4 border border-purple-500 rounded-lg transition duration-200">
              Back
            </button>
            {!item.isReviewed && (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-3 px-4 rounded-lg transition duration-200 shadow-lg">
                Submit Rating
              </button>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className=" bg-gradient-to-r from-yellow-400 to-pink-500 px-6 py-3 text-center">
          <p className="text-white text-xs">
            Your feedback helps improve our cinema experience
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default RateModal;
