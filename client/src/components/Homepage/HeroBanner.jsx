import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const HeroBanner = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const movies = useSelector((state) => state.movie.movies);

  const highlightMovie = movies.slice(0, 4);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === highlightMovie.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? highlightMovie.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden pt-[70px]">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {highlightMovie.map((movie) => (
            <div
              key={movie._id}
              className="w-full h-full flex-shrink-0 relative">
              <div className="w-full h-full relative">
                <img
                  src={movie?.background}
                  className="object-cover w-full h-full"
                  alt=""
                />
                <div className="absolute inset-0 opacity-30 bg-black"></div>
              </div>

              <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-start text-white px-4 md:px-16 lg:px-24">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {movie?.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
                  {movie?.overview}
                </p>
                <button
                  onClick={() => navigate(`/movie/select/${movie._id}`)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
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

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {highlightMovie.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-red-600 w-6"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
