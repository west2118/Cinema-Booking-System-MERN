import React from "react";
import { useSelector } from "react-redux";
import AdminUserCard from "../components/AdminUserCard";

const AdminListUsers = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="w-7xl mx-auto my-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">User Management</h1>
            <p className="text-gray-600">
              Manage your cinema's members and administrators
            </p>
          </div>
          <div className="mt-4 md:mt-0 relative w-full md:w-64">
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
              placeholder="Search users..."
              className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-10 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            <div className="col-span-2">User</div>
            <div className="col-span-2 text-center">Role</div>
            <div className="col-span-2">Join Date</div>
            <div className="col-span-2">Tickets</div>
            <div className="col-span-2">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {users && users.map((item) => <AdminUserCard item={item} />)}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div className="text-gray-600 text-sm">
              Showing <span className="font-medium text-gray-900">1</span> to{" "}
              <span className="font-medium text-gray-900">5</span> of{" "}
              <span className="font-medium text-gray-900">8</span> users
            </div>
            <div className="flex space-x-2">
              <button
                className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-500 cursor-not-allowed"
                disabled>
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-500 text-white font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListUsers;
