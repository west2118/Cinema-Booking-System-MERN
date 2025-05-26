import { Link, useParams } from "react-router-dom";
import NowShowingCard from "../components/Homepage/NowShowingCard";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movie.movies);

  const movie = movies.find((item) => item._id === id);

  if (!movie) {
    return <Loading />;
  }

  const isShowing = new Date(movie.releaseDate) >= new Date();

  return (
    <div className="relative min-h-screen text-white pb-12 pt-[72px]">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: `url(${movie.background})`,
        }}
      />

      <div className="fixed inset-0 bg-black/70 -z-10" />

      <div className="container mx-auto px-4 pt-16 flex flex-col md:flex-row gap-8 ">
        {/* Movie Poster with z-index */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 relative z-10">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        {/* Movie Details */}
        <div className="relative z-10 flex-1">
          {isShowing && (
            <div className="px-4 py-2 bg-black text-white w-fit mb-2 rounded-sm">
              <h1 className="font-semibold">Coming on July 20, 2025</h1>
            </div>
          )}
          <h1 className="text-4xl font-bold mb-2">
            {movie.title}
            <span className="text-2xl font-normal text-gray-300 ml-2">
              ({movie.releaseDate.slice(0, 4)})
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
            <span className="flex items-center">
              ⭐ {movie.reviews.length.toFixed(1)}/10
            </span>
            <span>
              {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
            </span>
            <span>{movie.genre.join(", ")}</span>
          </div>

          {!isShowing ? (
            <div className="flex gap-4 mb-4">
              <Link
                to={`/movie/select/${id}`}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 transform hover:scale-105">
                Book Now
              </Link>
              <button className="text-white border-2 border-white  font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 transform hover:scale-105">
                Watch Trailer
              </button>
            </div>
          ) : (
            <div className="flex gap-4 mb-4">
              <Link className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 transform hover:scale-105">
                Notify Me
              </Link>
              <button className="text-white border-2 border-white  font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300 transform hover:scale-105">
                Watch Trailer
              </button>
            </div>
          )}

          <h3 className="text-2xl font-semibold mb-2">Overview</h3>
          <p className="text-lg mb-6">{movie.overview}</p>

          <h3 className="text-2xl font-semibold mb-2">Director</h3>
          <p className="text-lg mb-6">{movie.director}</p>

          <h3 className="text-2xl font-semibold mb-2">Cast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movie.cast
              .map((actor) => (
                <div
                  key={actor.id}
                  className="bg-gray-800 bg-opacity-60 p-3 rounded-lg">
                  <div className="font-bold">{actor.artist}</div>
                  <div className="text-gray-300 text-sm">{actor.name}</div>
                </div>
              ))
              .slice(0, 5)}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold ">You May Also Like</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-black">
          {movies
            .filter((movie) => new Date(movie.releaseDate) <= new Date())
            .map((item) => <NowShowingCard key={item._id} item={item} />)
            .slice(0, 5)}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
