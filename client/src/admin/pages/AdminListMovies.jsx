import React from "react";
import { useSelector } from "react-redux";
import AdminMovieItem from "../components/AdminMovieItem";

const AdminListMovies = () => {
  const movies = useSelector((state) => state.movie.movies);

  return (
    <div className="p-6 rounded-lg overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-700 text-white">
            <th className="border border-gray-300 p-2">Poster</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Duration</th>
            <th className="border border-gray-300 p-2">Release Date</th>
            <th className="border border-gray-300 p-2">Director</th>
            <th className="border border-gray-300 p-2">Details</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        {movies &&
          movies.map((movie) => (
            <AdminMovieItem key={movie._id} movie={movie} />
          ))}
      </table>
    </div>
  );
};

export default AdminListMovies;
