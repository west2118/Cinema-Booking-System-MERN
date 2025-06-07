import React from "react";
import Pagination from "../components/Pagination";
import ComingSoonCard from "../components/Homepage/ComingSoonCard";
import { useSelector } from "react-redux";
import { useState } from "react";

const ComingSoonMovies = () => {
  const movies = useSelector((state) => state.movie.movies);
  const comingSoonMovies = movies.filter(
    (movie) => new Date(movie.releaseDate) >= new Date()
  );

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(comingSoonMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const comingMovies = comingSoonMovies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pt-18">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl uppercase font-bold text-gray-900">
            Coming Soon
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {comingMovies.map((movie) => (
            <ComingSoonCard key={movie._id} movie={movie} />
          ))}
        </div>

        <div className="mt-12 mb-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonMovies;
