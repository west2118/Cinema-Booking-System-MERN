import React from "react";
import { useSelector } from "react-redux";
import AdminTheaterItem from "../components/AdminTheaterItem";

const AdminListTheaters = () => {
  const theaters = useSelector((state) => state.theater.theaters);

  return (
    <div className="p-6 rounded-lg overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-700 text-white">
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Location</th>
            <th className="border border-gray-300 p-2">Amenities</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Hours</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        {theaters &&
          theaters.map((theater) => (
            <AdminTheaterItem key={theater._id} theater={theater} />
          ))}
      </table>
    </div>
  );
};

export default AdminListTheaters;
