import React from "react";
import Pagination from "../components/Pagination";
import ComingSoonCard from "../components/Homepage/ComingSoonCard";
import { useSelector } from "react-redux";

const ComingSoonMovies = () => {
  const movies = useSelector((state) => state.movie.movies);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pt-18">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl uppercase font-bold text-gray-900">
            Coming Soon
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {movies
            .filter((movie) => new Date(movie.releaseDate) >= new Date())
            .map((movie) => (
              <ComingSoonCard key={movie.id} movie={movie} />
            ))}
        </div>

        <div className="mt-12">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonMovies;
