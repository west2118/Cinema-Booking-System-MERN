import React from "react";
import { useSelector } from "react-redux";
import AdminBookingCard from "../components/AdminBookingCard";

const BookingsTableWithAddons = () => {
  const bookings = useSelector((state) => state.booking.bookings);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-11/12 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Movie Bookings with Concessions
          </h1>
          <p className="text-gray-600">
            All your bookings and purchased add-ons
          </p>
        </div>

        {/* Main Bookings Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Theater
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Movie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cinema
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seats
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Add-Ons
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            {bookings && <AdminBookingCard bookings={bookings} />}
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsTableWithAddons;
