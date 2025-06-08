import React, { useState } from "react";
import BookingCard from "../components/BookingCard";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { authLogout } from "../store/storageSlice";
import { formatDate } from "../constants/formatDate";
import HistoryCard from "../components/HistoryCard";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.storage.userId);
  const bookings = useSelector((state) => state.booking.bookings);
  const users = useSelector((state) => state.user.users);
  const [searchQuery, setSearchQuery] = useState("");
  const userBookings = bookings.filter((booking) => booking.userId === userId);

  const movies = useSelector((state) => state.movie.movies);
  const showtimes = useSelector((state) => state.showtime.showtimes);

  const showtime = showtimes.find(
    (showtime) => showtime._id === userBookings.showtimeId
  );

  const user = users.find((user) => user._id === userId);

  const handleLogout = () => {
    dispatch(authLogout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto pt-[70px]">
        {/* User Profile Header */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-23 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
              {user?.firstName.slice(0, 1)}
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{`${user?.firstName} ${user?.lastName}`}</h1>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Member since {formatDate(user?.createdAt)}
                </p>
              </div>

              <button onClick={handleLogout} className="text-3xl">
                <IoLogOutOutline />
              </button>
            </div>
          </div>
        </div>

        {/* Active Bookings Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Active Bookings
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {userBookings
              .filter(
                (booking) =>
                  booking.status === "Paid" && booking.isReviewed === false
              )
              .map((item) => (
                <BookingCard key={item._id} item={item} />
              ))}
          </div>
        </div>

        {/* Booking History Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Booking History
              </h2>
              <p className="text-gray-500">Your past cinema experiences</p>
            </div>
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bookings..."
                className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Movie
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seats
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userBookings.filter((booking) => {
                  const showtime = showtimes.find(
                    (s) => s._id === booking.showtimeId
                  );
                  const movie = movies.find((m) => m._id === showtime?.movieId);
                  return (
                    (booking.isReviewed === true ||
                      booking.status === "Refunded") &&
                    movie?.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  );
                }).length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500 text-sm">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  userBookings
                    .filter((booking) => {
                      const showtime = showtimes.find(
                        (s) => s._id === booking.showtimeId
                      );
                      const movie = movies.find(
                        (m) => m._id === showtime?.movieId
                      );
                      return (
                        (booking.isReviewed === true ||
                          booking.status === "Refunded") &&
                        movie?.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      );
                    })
                    .map((booking) => {
                      const showtime = showtimes.find(
                        (s) => s._id === booking.showtimeId
                      );
                      const movie = movies.find(
                        (m) => m._id === showtime?.movieId
                      );
                      return (
                        <HistoryCard
                          key={booking._id}
                          booking={booking}
                          showtime={showtime}
                          movie={movie}
                        />
                      );
                    })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
