import React from "react";

const BookingsTableWithAddons = () => {
  // Static data with add-ons
  const bookings = [
    {
      id: "BK123456",
      userId: "USER78901",
      movie: "Dune: Part Two",
      cinema: "Cineplex Downtown",
      date: "2023-05-15",
      time: "18:30",
      seats: ["A12", "A13"],
      total: 34.5,
      status: "Confirmed",
      screen: "IMAX 3D",
      addOns: [
        { name: "Medium Popcorn", price: 7.99, quantity: 2 },
        { name: "Large Soda", price: 5.99, quantity: 1 },
      ],
    },
    {
      id: "BK789012",
      userId: "USER34562",
      movie: "The Batman",
      cinema: "Cineplex West Mall",
      date: "2023-05-18",
      time: "20:15",
      seats: ["B05", "B06", "B07"],
      total: 51.75,
      status: "Cancelled",
      screen: "Dolby Atmos",
      addOns: [
        { name: "Small Popcorn", price: 5.99, quantity: 1 },
        { name: "Candy Pack", price: 4.5, quantity: 3 },
      ],
    },
    {
      id: "BK345678",
      userId: "USER90123",
      movie: "Spider-Man: No Way Home",
      cinema: "Cineplex Eastside",
      date: "2023-05-20",
      time: "15:45",
      seats: ["C10"],
      total: 22.25,
      status: "Completed",
      screen: "Standard",
      addOns: [
        { name: "Large Popcorn", price: 9.99, quantity: 1 },
        { name: "Medium Soda", price: 4.99, quantity: 1 },
      ],
    },
  ];

  // Concession stand items for reference
  const concessionItems = [
    { name: "Small Popcorn", price: 5.99 },
    { name: "Medium Popcorn", price: 7.99 },
    { name: "Large Popcorn", price: 9.99 },
    { name: "Small Soda", price: 3.99 },
    { name: "Medium Soda", price: 4.99 },
    { name: "Large Soda", price: 5.99 },
    { name: "Candy Pack", price: 4.5 },
    { name: "Nachos", price: 6.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
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
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                    {booking.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {booking.movie}
                    </div>
                    <div className="text-xs text-gray-500">#{booking.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {booking.cinema}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.date}</div>
                    <div className="text-xs text-gray-500">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {booking.seats.map((seat) => (
                        <span
                          key={seat}
                          className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                          {seat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      {booking.addOns.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center">
                          <span className="text-sm text-gray-800">
                            {item.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              ${item.price.toFixed(2)}
                            </span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              x{item.quantity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${booking.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsTableWithAddons;
