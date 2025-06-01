import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  toDeleteConcession,
  toEditConcession,
} from "../../store/concessionSlice";
import axios from "axios";
import AdminModalRemove from "./AdminModalRemove";
import { toast } from "react-toastify";

const AdminConcessionItem = ({ item }) => {
  const [quantity, setQuantity] = useState(30);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveConcession = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/concession/${item._id}`
      );

      setIsModalOpen(false);
      dispatch(toDeleteConcession(item._id));
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleUpdateStock = async (type) => {
    if (quantity <= 0) {
      return toast.error("Quantity must be greater than zero");
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/concession-stock/${item._id}`,
        {
          type,
          stock: parseInt(quantity),
        }
      );

      dispatch(
        toEditConcession({
          concessionId: item._id,
          updatedData: response.data.concession,
        })
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="hover:bg-gray-50 transition-colors">
        {/* Item Photo */}
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={item.photo}
              alt={item.name}
            />
          </div>
        </td>

        {/* Name */}
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{item.name}</div>
          <div className="text-xs text-gray-500">ID: {item._id}</div>
        </td>

        {/* Price */}
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900 font-semibold">
            ${item.price.toFixed(2)}
          </div>
        </td>

        {/* Current Stock */}
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-900 min-w-[2rem] text-center">
              {item.stock}
            </span>
          </div>
        </td>

        {/* Add/Remove Quantity */}
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-20 pl-3 pr-8 py-1 border border-gray-300 rounded-md text-sm focus:ring-amber-500 focus:border-amber-500"
              />
              <span className="absolute right-2 text-xs text-gray-500">
                qty
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleUpdateStock("add")}
                className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleUpdateStock("subtract")}
                className="w-6 h-6 flex items-center justify-center bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </td>

        {/* Status */}
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
              item.stock > 20
                ? "bg-green-100 text-green-800"
                : item.stock > 5
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}>
            {item.stock > 10
              ? "In Stock"
              : item.stock > 0
              ? "Low Stock"
              : "No Stock"}
          </span>
        </td>

        {/* Last Updated */}
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {new Date(item.updatedAt).toLocaleString()}
        </td>

        {/* Actions */}
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className="flex justify-end space-x-2">
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
        </td>
        <AdminModalRemove
          isOpen={isModalOpen}
          isCancel={() => setIsModalOpen(false)}
          handleRemove={handleRemoveConcession}
        />
      </tr>
    </tbody>
  );
};

export default AdminConcessionItem;
