import React, { useState } from "react";
import { formatDate } from "../store/stringDate";

const NowShowingCard = ({ item }) => {
  const [showAllShowtime, setShowAllShowtime] = useState(false);

  const visibleShowtimes = showAllShowtime
    ? item.showtimes
    : item.showtimes.slice(0, 1);

  const groupByScreenType = (showtimes) => {
    const screenGroups = {};

    showtimes.forEach((showtime) => {
      const type = showtime.screenType.toLowerCase();
      if (!screenGroups[type]) {
        screenGroups[type] = [];
      }
      screenGroups[type].push({
        time: showtime.time,
      });
    });

    return screenGroups;
  };

  const getRatingColor = (rating) => {
    switch (rating) {
      case "G":
        return "bg-green-500";
      case "PG":
        return "bg-blue-500";
      case "PG-13":
        return "bg-yellow-500";
      case "R":
        return "bg-red-600";
      case "NC-17":
        return "bg-purple-700";
      default:
        return "";
    }
  };

  return (
    <div className="border-b border-gray-200 pb-6 last:border-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <img
            className="object-cover h-50 rounded-lg w-40"
            src={item.poster}
          />
        </div>
        <div className="md:w-3/4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{item.movieTitle}</h3>
            {item.showtimes.length > 1 && (
              <button
                onClick={() => setShowAllShowtime(!showAllShowtime)}
                className={`px-6 py-2 ${
                  showAllShowtime
                    ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                } text-white font-medium rounded-lg  focus:outline-none focus:ring-2 transition-all`}>
                {showAllShowtime ? "Hide" : "Show"} Future Dates
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
            <span
              className={`px-4 py-1 rounded-full text-white text-sm ${getRatingColor(
                item.rating
              )}`}>
              {item.rating}
            </span>
            <span>
              {Math.floor(item.duration / 60)}h {item.duration % 60}m
            </span>
            {/* <span>{item.screenType.toUpperCase()}</span> */}
          </div>

          <div className="mt-4">
            {visibleShowtimes.map((item) => (
              <>
                <h4 className="mb-2 mt-4 text-[#79858E]">
                  {formatDate(item.date)}
                </h4>
                <div className="flex-col flex-wrap gap-y-6">
                  {Object.entries(groupByScreenType(item.time)).map(
                    ([screenType, shows]) => (
                      <div key={screenType} className="mb-4">
                        <h3 className="font-bold text-lg capitalize mb-2">
                          {screenType.toUpperCase()}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {shows.map((show, index) => (
                            <button
                              key={index}
                              className="px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                              {show.time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowShowingCard;
