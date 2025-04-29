import React, { useState } from "react";
import { locations } from "../components/Homepage/TheaterLocations";

const nowShowing = [
  {
    id: 1,
    title: "Dune: Part Two",
    timeSlots: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    format: "IMAX 2D",
    rating: "U/A",
    duration: "2h 46m",
  },
  {
    id: 2,
    title: "Kung Fu Panda 4",
    timeSlots: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    format: "3D",
    rating: "U",
    duration: "1h 34m",
  },
  {
    id: 3,
    title: "Article 370",
    timeSlots: ["12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"],
    format: "2D",
    rating: "A",
    duration: "2h 20m",
  },
];

const theater = {
  name: "PVR Cinemas: Phoenix Marketcity",
  location: "Mumbai, Maharashtra",
  address: "Level 4, Phoenix Marketcity, LBS Marg, Kurla West",
  amenities: [
    "4K Projection",
    "Dolby Atmos",
    "Recliner Seats",
    "Food & Beverage",
    "Wheelchair Access",
    "Parking Available",
  ],
  contact: {
    phone: "+91 22 12345678",
    email: "info@pvrphoenix.com",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715635726926!2d72.8892143153776!3d19.065265258727835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0x6f7fe8276c8b1c8e!2sPVR%20Cinemas%20Phoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
};

const TheaterPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-[70px] overflow-hidden">
      {/* Theater Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900/70 to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/30 to-red-600/0"></div>
        </div>
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {locations.map((location) => (
            <div
              key={location.id}
              className="w-full h-full flex-shrink-0 relative flex flex-col justify-center items-center">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                  {location.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mt-4 drop-shadow-md">
                  {location.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
          aria-label="Previous slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
          aria-label="Next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Theater Info */}
          <div className="lg:w-2/3">
            {/* About Theater */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About This Theater</h2>
              <p className="text-gray-700 mb-4">{theater.address}</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600">{theater.contact.phone}</p>
                  <p className="text-gray-600">{theater.contact.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Amenities</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {theater.amenities.map((amenity, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Now Showing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Now Showing</h2>

              <div className="space-y-6">
                {nowShowing.map((movie) => (
                  <div
                    key={movie.id}
                    className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <div className="bg-gray-200 h-40 rounded-lg"></div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-semibold">{movie.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <span>{movie.rating}</span>
                          <span>{movie.duration}</span>
                          <span>{movie.format}</span>
                        </div>

                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Showtimes</h4>
                          <div className="flex flex-wrap gap-2">
                            {movie.timeSlots.map((time, index) => (
                              <button
                                key={index}
                                className="px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-18">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                <iframe
                  src={theater.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Theater Location Map"></iframe>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                Get Directions
              </button>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Public Transport</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
                      M
                    </span>
                    Kurla Metro Station (500m)
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2">
                      L
                    </span>
                    Kurla Railway Station (800m)
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-2">
                      B
                    </span>
                    Bus Stop (200m)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheaterPage;
