import React from "react";
import { formatDate } from "../../constants/formatDate";

const AdminUserCard = ({ item }) => {
  return (
    <div className="grid grid-cols-10 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
      <div className="col-span-2 flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
          J
        </div>
        <div className="ml-4">
          <div className="text-gray-900 font-medium">{`${item?.firstName} ${item?.lastName}`}</div>
          <div className="text-gray-500 text-sm">{item?.email}</div>
        </div>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <span className="px-2 py-1 rounded text-xs text-center font-medium bg-blue-100 text-blue-800">
          {item?.isAdmin ? "Admin" : "User"}
        </span>
      </div>
      <div className="col-span-2 flex items-center text-gray-700">
        {formatDate(item?.createdAt)}
      </div>
      <div className="col-span-2 flex items-center">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-600 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"></path>
          </svg>
          <span className="text-gray-900 font-medium">24</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center">
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/admin/edit-concession/${item._id}`)}
            className="p-1 text-blue-600 hover:text-blue-900 rounded hover:bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-1 text-red-600 hover:text-red-900 rounded hover:bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserCard;
