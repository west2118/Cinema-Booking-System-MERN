import React, { useEffect, useState } from "react";
import RefundModal from "./RefundModal";
import RateModal from "./RateModal";

const BookingActionButtons = ({ item, showtime, movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [canRate, setCanRate] = useState(false);
  const [isOpenReview, setIsOpenReview] = useState(false);

  useEffect(() => {
    const targetTime = new Date(item.createdAt);

    const hideTime = new Date(targetTime.getTime() + 10 * 60 * 1000);

    const checkTime = () => {
      const now = new Date();
      setShowCancelButton(now < hideTime);
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, [item.date]);

  useEffect(() => {
    if (!showtime?.endTime || !showtime?.date) return;

    const [endHour, endMinute] = showtime?.endTime.split(":").map(Number);
    const movieDate = new Date(showtime?.date);

    movieDate.setHours(endHour);
    movieDate.setMinutes(endMinute);
    movieDate.setSeconds(0);
    movieDate.setMilliseconds(0);

    const checkTime = () => {
      const now = new Date();
      if (now >= movieDate) {
        setCanRate(true);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, [showtime]);

  return (
    <>
      {showCancelButton && item?.status !== "Refunded" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 text-sm font-medium transition-colors">
          Cancel Booking
        </button>
      ) : canRate && !item.isReviewed && item?.status !== "Refunded" ? (
        <button
          onClick={() => setIsOpenReview(true)}
          className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 text-sm font-medium">
          Rate
        </button>
      ) : item.isReviewed && item?.status !== "Refunded" ? (
        <button
          onClick={() => setIsOpenReview(true)}
          className="px-4 py-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200 text-sm font-medium">
          View Reviewed
        </button>
      ) : item?.status === "Refunded" ? (
        <span className="text-sm text-gray-500 py-2"></span>
      ) : (
        <span className="text-sm text-gray-500 py-2">Non-refundable</span>
      )}
      <RefundModal
        isOpen={isOpen}
        isCloseModal={() => setIsOpen(false)}
        item={item}
        showtime={showtime}
      />
      <RateModal
        isOpen={isOpenReview}
        item={item}
        movie={movie}
        isClose={() => setIsOpenReview(false)}
      />
    </>
  );
};

export default BookingActionButtons;
