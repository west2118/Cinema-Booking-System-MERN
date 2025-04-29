import React from "react";

const AdminScreenData = ({ isEdit = false }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {isEdit ? "Edit Screen" : "Create New Screen"}
      </h2>

      <form className="space-y-6">
        {/* Basic Information Section */}
        <div className="space-y-4">
          {/* Screen Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Screen Name*
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Screen 1, IMAX Auditorium"
            />
          </div>

          {/* Seating Capacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seating Capacity*
            </label>
            <input
              type="number"
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 150"
            />
          </div>

          {/* Screen Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Screen Type*
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="">-- Select screen type --</option>
              <option value="standard">Standard</option>
              <option value="imax">IMAX</option>
              <option value="4dx">4DX</option>
              <option value="dolby">Dolby Cinema</option>
              <option value="vip">VIP</option>
            </select>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Screen Features*
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Dolby Atmos",
              "3D Projection",
              "Laser Projection",
              "4K Resolution",
              "Recliner Seats",
              "Wheelchair Accessible",
              "Premium Sound",
              "Atmos Sound",
              "D-Box Motion",
            ].map((feature) => (
              <label key={feature} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            {isEdit ? "Update Screen" : "Create Screen"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminScreenData;
