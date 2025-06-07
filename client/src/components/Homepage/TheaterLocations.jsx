import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const TheaterLocations = () => {
  const theaters = useSelector((state) => state.theater.theaters);
  const [activeMapUrl, setActiveMapUrl] = useState(
    theaters?.[0]?.location?.mapUrl || ""
  );

  return (
    <section className="px-8 py-12 bg-white">
      <div className="mx-auto">
        <h2 className="text-3xl uppercase font-bold text-gray-800 mb-6">
          Our Cinemas
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <div className="lg:w-2/3 h-[500px]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <iframe
                src={activeMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Theater Location Map"></iframe>
            </div>
          </div>

          {/* Locations List */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {theaters
                ?.map((item) => (
                  <div
                    onClick={() => setActiveMapUrl(item?.location?.mapUrl)}
                    key={item?.location?._id}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <h3 className="font-semibold text-lg">
                      {item?.location?.city}
                    </h3>
                    <p className="text-gray-600">{item?.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item?.location?.address}
                    </p>
                  </div>
                ))
                .slice(0, 4)}

              <Link
                to="/theaters"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View All Locations →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheaterLocations;
