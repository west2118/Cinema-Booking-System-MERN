import React from "react";
import { useNavigate } from "react-router";
import { aboutPlatform } from "../constants/aboutPlatform";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 pt-[70px]">
      {/* Hero Section with Film Strip Effect */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://img.ctykit.com/cdn/id-boise/images/tr:w-1800/photo-feb-27-2023-2-18-10-pm.jpg')] bg-repeat opacity-30"></div>
        </div>

        {/* Projector Light Effect */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400 rounded-full filter blur-[100px] opacity-10"></div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                About Our Cinema Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Where technology meets the magic of cinema to create unforgettable
              movie-going moments
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        {/* Floating Popcorn */}
        <div className="absolute -top-20 right-10 text-4xl opacity-20 animate-float">
          🍿
        </div>
        <div className="absolute top-1/3 left-5 text-3xl opacity-30 animate-float2">
          🎥
        </div>
        <div className="absolute bottom-20 right-20 text-5xl opacity-20 animate-float3">
          🎭
        </div>

        <section className="mb-28 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-red-600 rounded-2xl opacity-20 blur"></div>
                <div className="relative bg-gray-800 p-8 rounded-xl border border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                    Our Story
                  </h2>
                  <p className="text-gray-300 mb-4 text-lg">
                    Founded in 2015, our cinema booking system began with a
                    simple mission: to make movie-going effortless and magical.
                    What started as a small local theater's passion project has
                    transformed into the nation's most beloved cinema platform.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Today, we're the preferred choice for over 5 million film
                    enthusiasts, partnering with premium theaters to deliver
                    extraordinary experiences from IMAX to Dolby Cinema.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border-4 border-gray-700 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Cinema interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="text-white font-bold text-lg">
                      Watch Our Story
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-28 relative z-10">
          <div className="relative bg-gray-800 rounded-3xl p-12 border border-gray-700 shadow-xl overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-400 rounded-full filter blur-[100px] opacity-10"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-red-500 rounded-full filter blur-[100px] opacity-10"></div>

            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
              Our Mission
            </h2>
            <p className="text-gray-300 text-xl text-center max-w-4xl mx-auto relative z-10">
              To transform movie-going into an extraordinary experience by
              combining cutting-edge technology with the timeless magic of
              cinema, ensuring every booking is as exciting as the film itself.
            </p>
          </div>
        </section>

        <section className="mb-28 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              Why Movie Lovers Choose Us
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutPlatform.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bg} p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}>
                <div className="absolute -right-10 -top-10 text-9xl opacity-10">
                  {feature.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-28 relative z-10">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-3xl p-12 border border-gray-700 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5M+", label: "Happy Customers", icon: "😊" },
                { value: "200+", label: "Partner Cinemas", icon: "🎦" },
                { value: "10K+", label: "Daily Bookings", icon: "🎟️" },
                { value: "24/7", label: "Support", icon: "🛎️" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors">
                  <div className="text-6xl mb-2">{stat.icon}</div>
                  <div className="text-5xl font-bold mb-2 text-yellow-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 uppercase text-sm tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center relative z-10 mb-20">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl p-12 border border-gray-700 shadow-xl relative overflow-hidden">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-yellow-400 rounded-full filter blur-[100px] opacity-10"></div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready for Your Next{" "}
              <span className="text-yellow-400">Cinematic Adventure</span>?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Join our community of film enthusiasts and experience movies like
              never before
            </p>
            <button
              onClick={() => navigate("/movies")}
              className="relative overflow-hidden group bg-gradient-to-r from-yellow-500 to-red-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30">
              <span className="relative z-10 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                </svg>
                Book Tickets Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </section>
      </div>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
