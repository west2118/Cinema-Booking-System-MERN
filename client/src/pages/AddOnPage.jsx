import React, { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddOnPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Small Popcorn", price: 5.99, quantity: 0 },
    { id: 2, name: "Medium Popcorn", price: 7.99, quantity: 0 },
    { id: 3, name: "Large Popcorn", price: 9.99, quantity: 0 },
    { id: 4, name: "Small Combo (Popcorn + Drink)", price: 8.99, quantity: 0 },
    {
      id: 5,
      name: "Medium Combo (Popcorn + Drink)",
      price: 10.99,
      quantity: 0,
    },
    { id: 6, name: "Large Combo (Popcorn + Drink)", price: 12.99, quantity: 0 },
  ]);

  // Calculate total (placeholder - no functions needed as per request)
  const calculateTotal = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="pt-[72px]">
      <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Cinema Snacks
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://media.istockphoto.com/photos/large-bucket-of-popcorn-on-red-picture-id137099651?k=6&m=137099651&s=612x612&w=0&h=TiS0WvXOaeZszKpKBcl8e4c-bNFxaqGKMOHZ2-TrW1U="
                    className="w-14 h-14 rounded-md"
                    alt=""
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-indigo-600 font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-3xl text-red-700">
                    <CiCircleMinus />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="text-3xl text-blue-700">
                    <IoIosAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Total:</span>
            <span className="text-xl font-bold text-indigo-700">
              ${calculateTotal()}
            </span>
          </div>
          <button className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
            Add to Booking
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Snacks will be ready for pickup at our concession stand</p>
        </div>
      </div>
    </div>
  );
};

export default AddOnPage;
