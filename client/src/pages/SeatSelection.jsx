import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { PiArmchairFill } from "react-icons/pi";

const SeatSelection = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return (
    <div className="pt-[70px]">
      <div
        className="relative px-18 py-20 flex flex-col md:flex-row w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://images2.fanpop.com/image/photos/12300000/Inception-Wallpaper-inception-2010-12396931-1440-900.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="container mx-auto flex items-center gap-10 relative z-10">
          <img
            src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
            alt="Inception Poster"
            className="rounded-lg shadow-2xl h-72 w-auto"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white">
              Inception
              <span className="text-2xl font-normal text-gray-300 ml-2">
                (2010)
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
              <span className="flex items-center">⭐ 8.8/10</span>
              <span>Sci-Fi</span>
              <span>2h 28min</span>
            </div>

            <p className="text-gray-300 mb-6 max-w-xl">
              A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting an
              idea into the mind of a CEO—but his tragic past may doom the
              project and his team to disaster.
            </p>

            <button className="text-white border-2 border-white font-semibold py-3 px-6 rounded-full text-base shadow-md transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 h-[16vh] flex text-white">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center h-full flex-1">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold mr-10">Date</h1>
              <button className="ml-4">
                <IoIosArrowBack />
              </button>
            </div>
            <div className="flex flex-1 h-full mx-4 max-w-2xl">
              <div className="flex flex-col w-26 items-center justify-center h-full opacity-20 blur-[1px]">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>
              <div className="flex flex-col w-26 items-center justify-center h-full opacity-50 blur-[1px]">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>
              <div className="flex flex-col w-26 items-center justify-center h-full opacity-60 blur-[0.5px]">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>

              <div className="flex flex-col w-26 items-center justify-center bg-black h-full opacity-100 blur-none">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>

              <div className="flex flex-col w-26 items-center justify-center h-full opacity-60 blur-[0.5px]">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>
              <div className="flex flex-col w-26 items-center justify-center h-full opacity-50 blur-[1px]">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>
              <div className="flex flex-col w-26 items-center justify-center h-full opacity-20 blur-[1px]">
                <h1>Jun</h1>
                <p className="font-bold text-3xl">10</p>
                <p>Thurs</p>
              </div>
            </div>
            <button className="ml-4">
              <IoIosArrowForward />
            </button>
          </div>
          <div className="flex items-center h-full space-x-6">
            <div className="h-full flex items-center">
              <div className="mr-4">
                <h1 className="text-lg font-semibold">Time</h1>
                <select name="time" className="w-28 text-white py-1">
                  <option value="12:10" className="text-black">
                    12:10pm
                  </option>
                  <option value="14:30" className="text-black">
                    14:30pm
                  </option>
                  <option value="17:00" className="text-black">
                    17:00pm
                  </option>
                </select>
              </div>
            </div>

            <div className="h-full flex items-center">
              <div className="bg-gray-700 w-px h-8"></div>
            </div>

            <div className="h-full flex items-center ml-4">
              <div>
                <h1 className="text-lg font-semibold">Theater</h1>
                <select name="theater" className="w-28 text-white py-1">
                  <option value="Quezon City" className="text-black">
                    Quezon City
                  </option>
                  <option value="Manila" className="text-black">
                    Manila
                  </option>
                  <option value="Makati" className="text-black">
                    Makati
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#213448] text-white">
        <div className="container mx-auto flex w-full py-20 gap-16">
          <div className="flex flex-col gap-4 w-[20%]">
            <h1 className="text-xl font-semibold">Your Selected Seats</h1>
            <div className="flex flex-col gap-2">
              <p>3 seats</p>
              <div className="flex gap-2">
                <div className="p-1.5 bg-gray-600 text-white rounded-md">
                  <p className="font-semibold">A10</p>
                </div>
                <div className="p-1.5 bg-gray-600 text-white rounded-md">
                  <p className="font-semibold">A10</p>
                </div>
                <div className="p-1.5 bg-gray-600 text-white rounded-md">
                  <p className="font-semibold">A10</p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <p className="font-medium">Tickets</p>
                  <p className="text-center">3x</p>
                  <p className="text-right">
                    $<span className="font-medium">300</span>
                  </p>
                  <hr className="w-full h-[1px] bg-gray-600 border-none col-span-3" />
                  <p className="font-medium">Total</p>
                  <p className="text-center"></p>
                  <p className="text-right">
                    $<span className="font-medium">900</span>
                  </p>
                </div>
              </div>
              <div className="space-y-2.5 mt-4">
                <button className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold py-2.5 rounded-lg">
                  Purchase
                </button>

                <button className="w-full text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-200 font-semibold py-2.5 rounded-lg">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex gap-8">
                <p>Booked seated: 30</p>
                <p>Available seats: 30</p>
                <p>Total seats: 30</p>
              </div>
              <div className="flex gap-8">
                <p className="flex items-center">
                  <span className="mr-1">
                    <PiArmchairFill className="text-2xl" />
                  </span>
                  Available
                </p>
                <p className="flex items-center">
                  <span className="mr-1">
                    <PiArmchairFill className="text-2xl text-red-600" />
                  </span>
                  Booked
                </p>
                <p className="flex items-center">
                  <span className="mr-1">
                    <PiArmchairFill className="text-2xl text-green-600" />
                  </span>
                  Selected
                </p>
              </div>
            </div>

            <div className="flex flex-col my-6">
              <div className="w-full h-[30px] bg-white mx-auto screen-shape"></div>
              <div className="bg-white/10 w-full h-[40px] blur-xl"></div>
              <span className="font-bold text-center -mt-6">SCREEN</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {rows.map((row) => (
                <div
                  key={row}
                  className="flex items-center justify-center gap-2">
                  <div className="w-6 font-bold">{row}</div>
                  <div className="flex gap-2">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((seat) => {
                      const seatId = `${row}${seat}`;

                      return (
                        <button key={seatId}>
                          <PiArmchairFill className="text-3xl text-gray-500" />
                        </button>
                      );
                    })}
                  </div>

                  <div className="w-8"></div>

                  <div className="flex gap-2">
                    {Array.from({ length: 8 }, (_, i) => i + 7).map((seat) => {
                      const seatId = `${row}${seat}`;

                      return (
                        <button key={seatId}>
                          <PiArmchairFill className="text-3xl text-gray-500" />
                        </button>
                      );
                    })}
                  </div>

                  <div className="w-8"></div>

                  <div className="flex gap-2">
                    {Array.from({ length: 6 }, (_, i) => i + 15).map((seat) => {
                      const seatId = `${row}${seat}`;

                      return (
                        <button key={seatId}>
                          <PiArmchairFill className="text-3xl text-gray-500" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
