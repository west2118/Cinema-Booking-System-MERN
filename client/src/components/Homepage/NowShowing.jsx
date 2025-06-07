import React, { useState } from "react";
import NowShowingCard from "./NowShowingCard";
import { useSelector } from "react-redux";

const NowShowing = () => {
  const movies = useSelector((state) => state.movie.movies);

  return (
    <section className="px-8 py-12 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl uppercase font-bold text-gray-800">
          Currently in Theaters
        </h2>

        {/* <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Quick filters:</span>
            {["All", "Hindi", "English", "Regional"].map((lang) => (
              <button
                key={lang}
                className={`px-4 py-2 rounded-full text-sm bg-white text-gray-700 border-gray-300 border transition-colors`}>
                {lang}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort:</span>
            <select className="px-3 py-2 rounded border border-gray-300 bg-white">
              <option value="popularity">By Popularity</option>
              <option value="releaseDate">Release Date</option>
            </select>
          </div>
        </div> */}
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-thin">
        {movies
          .filter((movie) => new Date(movie.releaseDate) <= new Date())
          .map((item) => (
            <NowShowingCard key={item._id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default NowShowing;
