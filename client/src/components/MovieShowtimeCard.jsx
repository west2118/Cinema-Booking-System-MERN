import React, { useState } from "react";
import { formatTimeWithIntl } from "../constants/formatIntDate";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../constants/formatDate";

export const groupByScreenType = (showtimes) => {
  const screenGroups = {};

  showtimes.forEach((showtime) => {
    const type = showtime.screenType.toLowerCase();
    if (!screenGroups[type]) {
      screenGroups[type] = [];
    }
    screenGroups[type].push({
      time: showtime.time,
      showtimeId: showtime.showtimeId,
    });
  });

  return screenGroups;
};

const MovieShowtimeCard = ({ item }) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const firstShowDate = [...item.showtimes].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )[0].date;

  const isToday =
    firstShowDate &&
    new Date(firstShowDate).toDateString() === new Date().toDateString();

  const visibleShowtimes = showAll
    ? item.showtimes
    : isToday
    ? item.showtimes.slice(0, 1)
    : [];

  return (
    <div className="bg-white overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 text-indigo-800 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {item?.theaterName}
              </h3>
              <p className="text-gray-600">{`${item?.location?.address}, ${item?.location?.city}`}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className={`mt-3 md:mt-0 px-4 py-2 transition-all duration-300 ease-in-out ${
            showAll
              ? "bg-indigo-600 border border-indigo-600 text-white hover:bg-indigo-50 hover:text-indigo-600"
              : "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          } rounded-lg font-medium flex items-center gap-1 text-sm shadow-sm`}>
          {showAll ? "Hide" : "Show"} Future Dates
        </button>
      </div>
      <div className="px-6">
        <div className="my-6 flex flex-col gap-y-6">
          {visibleShowtimes.length >= 1 ? (
            visibleShowtimes
              .slice()
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((item) => (
                <div key={item.date}>
                  <h4 className="text-[rgb(121,133,142)] mb-2">
                    {formatDate(item.date)}
                  </h4>
                  <div className="flex flex-col flex-wrap gap-4">
                    <div>
                      <div className="flex flex-col flex-wrap gap-3">
                        {Object.entries(groupByScreenType(item?.time)).map(
                          ([screenType, shows]) => (
                            <div key={screenType}>
                              <h4 className="font-bold text-lg mb-2 text-gray-800 flex items-center gap-2">
                                <span className="text-gray-500">◆</span>
                                {screenType.toUpperCase()}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {shows
                                  .filter(({ time }) => {
                                    const [hour, minute] = time.split(":");
                                    const showTime = new Date(item.date);
                                    showTime.setHours(hour, minute, 0, 0);

                                    const today = new Date();
                                    const isToday =
                                      new Date(item.date).toDateString() ===
                                      today.toDateString();

                                    return !isToday || showTime > today;
                                  })
                                  .sort((a, b) => a.time.localeCompare(b.time))
                                  .map((show, index) => (
                                    <button
                                      onClick={() =>
                                        navigate(
                                          `/booking/seats/${show.showtimeId}`
                                        )
                                      }
                                      key={index}
                                      className="px-5 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 text-gray-800 rounded-xl font-medium shadow-sm hover:shadow-md transition-all">
                                      {formatTimeWithIntl(show.time)}
                                    </button>
                                  ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-gray-700 relative overflow-hidden">
              {/* Film strip decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-700 flex">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-full w-8 bg-gray-800 mr-2"></div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700 flex">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-full w-8 bg-gray-800 mr-2"></div>
                ))}
              </div>

              {/* Projector light effect */}
              <div className="absolute -top-20 -left-10 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>

              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gray-800 rounded-full shadow-lg border-2 border-yellow-400">
                    <svg
                      className="w-12 h-12 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-yellow-400 mb-3 font-cinematic tracking-wide">
                  Dark Screen Today
                </h1>

                <p className="text-gray-300 max-w-md mx-auto mb-6">
                  Our projectors are resting today, but the show will go on
                  tomorrow!
                </p>

                <div className="mt-6 text-sm text-gray-500 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                      clipRule="evenodd"></path>
                  </svg>
                  New releases coming soon - stay tuned!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieShowtimeCard;
