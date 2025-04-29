import React from "react";
import AdminShowtimeItem from "../components/AdminShowtimeItem";

const AdminShowtimeData = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create Multiple Showtimes
        </h2>

        <form className="space-y-6">
          {/* Common Fields (Same for all showtimes) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Movie Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Movie
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                <option>-- Select movie --</option>
                <option>Avengers: Endgame</option>
                <option>Dune: Part Two</option>
              </select>
            </div>

            {/* Theater Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theater
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                <option>-- Select theater --</option>
                <option>Cineplex Downtown</option>
                <option>IMAX Westside</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Screen
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">-- Select a screen --</option>
                <option value="screen1">Screen 1 (IMAX)</option>
                <option value="screen2">Screen 2 (4DX)</option>
                <option value="screen3">Screen 3 (2D)</option>
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Showtime Repeater Section */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Showtimes
            </h3>

            <div className="space-y-4">
              <table className="w-full border border-gray-300 rounded-md shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left text-sm font-medium text-gray-700 p-2">
                      Start Time
                    </th>
                    <th className="text-left text-sm font-medium text-gray-700 p-2">
                      End Time
                    </th>
                    <th className="text-left text-sm font-medium text-gray-700 p-2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AdminShowtimeItem />
                  <AdminShowtimeItem />
                  <AdminShowtimeItem />
                </tbody>
              </table>

              {/* Add Another Showtime Button */}
              <button
                type="button"
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Another Showtime
              </button>
            </div>
          </div>

          <div className="border-t pt-6">
            <label className="text-lg font-medium text-gray-800">
              Ticket Price ($)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="12.99"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="pt-6">
              <label className="text-lg font-medium text-gray-800">
                Available Seats
              </label>
              <input
                type="number"
                min="1"
                placeholder="150"
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Save All Showtimes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminShowtimeData;
