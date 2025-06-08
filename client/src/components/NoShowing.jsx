import React from "react";

const NoShowing = () => {
  return (
    <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg border border-purple-100 transform hover:scale-[1.01] transition-all duration-200">
      <div className="mb-6 flex justify-center">
        <div className="p-4 bg-white rounded-full shadow-inner border border-purple-200">
          <svg
            className="w-12 h-12 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
          </svg>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
        Coming Soon!
      </h1>

      <p className="text-gray-600 max-w-md mx-auto mb-6">
        We're preparing something special for you. Check back soon for exciting
        new showtimes!
      </p>

      <div className="mt-6 text-sm text-purple-400 flex items-center justify-center">
        <svg
          className="w-4 h-4 mr-1 animate-pulse"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"></path>
        </svg>
        Showtimes updated daily
      </div>
    </div>
  );
};

export default NoShowing;
