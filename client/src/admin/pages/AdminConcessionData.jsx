import axios from "axios";
import React from "react";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { toAddConcession, toEditConcession } from "../../store/concessionSlice";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const cloudName = "derc2steu";
const uploadPreset = "movie_preset";

const AdminConcessionData = ({ isEdit = false }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const concessions = useSelector((state) => state.concession.concessions);
  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    price: "",
  });
  const [concessionImage, setConcessionImage] = useState({
    image: "",
    preview: "",
  });

  useEffect(() => {
    const concessionToEdit = concessions.find(
      (concession) => concession._id === id
    );
    if (isEdit && id) {
      setFormData({
        name: concessionToEdit.name || "",
        stock: concessionToEdit.stock || "",
        price: concessionToEdit.price || "",
      });
      setConcessionImage({
        image: concessionToEdit.photo || "",
        preview: concessionToEdit.photo || "",
      });
    } else {
      setFormData({
        name: "",
        stock: "",
        price: "",
      });
      setConcessionImage({
        image: "",
        preview: "",
      });
    }
  }, [isEdit, id, concessions]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue =
      name === "stock" || name === "price" ? parseInt(value) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setConcessionImage(() => ({
      image: file,
      preview,
    }));
  };

  const uploadImage = async () => {
    let uploadedUrl = "";

    const file = concessionImage.image;
    if (!file) return;

    if (typeof file === "string") {
      uploadedUrl = concessionImage.image;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", "movies");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      uploadedUrl = response.data.secure_url;
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }

    return uploadedUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsUploading(true);

    const imageConcession = await uploadImage();

    const concessionData = {
      ...formData,
      photo: imageConcession,
    };

    try {
      let response;
      if (isEdit && id) {
        response = await axios.put(
          `http://localhost:8080/api/concession/${id}`,
          concessionData
        );
      } else {
        response = await axios.post(
          `http://localhost:8080/api/concession`,
          concessionData
        );
      }

      if (isEdit && id) {
        dispatch(
          toEditConcession({
            concessionId: id,
            updatedData: response.data.updatedConcession,
          })
        );
      } else {
        dispatch(toAddConcession(response.data.newConcession));
      }

      navigate("/admin/list-concessions");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          {isEdit ? "Edit" : "Add New"} Concession
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Photo Upload Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Photo <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg  hover:border-blue-400 transition duration-200 bg-gray-50 w-[150px] h-[200px]">
              <input
                type="file"
                name="featuredImage"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {!concessionImage.preview ? (
                <div className="flex flex-col items-center justify-center text-gray-500 pointer-events-none p-6">
                  <MdOutlineFileUpload className="text-3xl" />
                  <p className="text-sm text-center">
                    Click or drag image to upload
                  </p>
                </div>
              ) : (
                <div className="w-full h-full">
                  <img
                    src={concessionImage.preview}
                    alt="Preview"
                    className="w-[150px] h-full object-cover rounded-md shadow"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Large Popcorn"
              required
            />
          </div>

          {/* Stock and Price Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Stock Field */}
            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700">
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="stock"
                min="0"
                name="stock"
                onChange={handleChange}
                value={formData.stock}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
                required
              />
            </div>

            {/* Price Field */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="price"
                  min="0"
                  step="0.01"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                  className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate("/admin/list-concessions")}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Cancel
            </button>

            <button
              disabled={isUploading}
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {isUploading ? (
                <div className="flex items-center gap-2">
                  <ClipLoader
                    color="white"
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  <span>Loading</span>
                </div>
              ) : isEdit ? (
                "Edit Concession"
              ) : (
                "Add Concession"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminConcessionData;
