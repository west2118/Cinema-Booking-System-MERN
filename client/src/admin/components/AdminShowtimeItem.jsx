import React from "react";

const AdminShowtimeItem = () => {
  return (
    <tr>
      <td className="p-2">
        <input
          type="time"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </td>
      <td className="p-2">
        <input
          type="time"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </td>
      <td className="p-2">
        <button
          type="button"
          className="w-full px-3 py-2 bg-red-700 text-white hover:bg-red-800 text-sm font-medium rounded-md">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default AdminShowtimeItem;
