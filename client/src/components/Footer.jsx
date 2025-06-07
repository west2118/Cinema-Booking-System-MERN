import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const socialIcons = {
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  Youtube: FaYoutube,
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-opacity-25 border-red-900">
      {/* Film strip effect with red accent */}
      <div className="h-3 bg-gradient-to-r from-red-900 via-red-700 to-red-900 flex overflow-hidden relative">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-12 h-full bg-black mx-2 opacity-80"></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo section */}
          <div className="flex flex-col items-start">
            <Link to="#" className="mb-6 group">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-100 group-hover:text-red-400 transition-colors">
                  CINE
                </span>
                <span className="text-3xl font-bold text-red-500 group-hover:text-red-300 transition-colors">
                  HUB
                </span>
                <div className="ml-2 w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_2px_rgba(220,38,38,0.7)]"></div>
              </div>
            </Link>
            <p className="text-sm mb-4 text-gray-400">
              Where stories come to life on the silver screen
            </p>

            {/* Social icons with red accents */}
            <div className="flex space-x-3 mt-4">
              {["Facebook", "Twitter", "Instagram", "Youtube"].map((social) => {
                const Icon = socialIcons[social]; // Get the component
                return (
                  <Link
                    key={social}
                    to="#"
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-900/70 border border-gray-700 hover:border-red-700 flex items-center justify-center text-gray-300 hover:text-red-300 transition-all duration-300">
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-100 text-lg font-medium mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-red-600 after:to-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Movies",
                "Coming Soon",
                "Theaters",
                "About",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={`${
                      link === "Home"
                        ? "/"
                        : link === "Coming Soon"
                        ? "/coming-soon"
                        : "/" +
                          link.charAt(0).toLowerCase() +
                          link.slice(1).replace(/\s+/g, "-")
                    }`}
                    className="hover:text-red-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-red-600 mr-3 rounded-full group-hover:bg-red-400 transition-colors"></span>
                    <span className="border-b border-transparent group-hover:border-red-400/30 pb-0.5 transition-all">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-gray-100 text-lg font-medium mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-red-600 after:to-transparent">
              Information
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact",
                "Careers",
                "Privacy Policy",
                "Accessibility",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-red-400 transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-red-600 mr-3 rounded-full group-hover:bg-red-400 transition-colors"></span>
                    <span className="border-b border-transparent group-hover:border-red-400/30 pb-0.5 transition-all">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-100 text-lg font-medium mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-gradient-to-r after:from-red-600 after:to-transparent">
              Stay Connected
            </h4>
            <p className="text-sm mb-4 text-gray-400">
              Get the latest movie news and exclusive offers
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-red-500 border border-gray-700 focus:border-red-500 placeholder-gray-500 transition-all"
              />
              <button className="bg-gradient-to-b from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 font-medium transition-all duration-300 border border-red-800 hover:border-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <i className="fas fa-envelope-open-text"></i>
              </button>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-100 text-sm font-medium mb-3">
                Experience More
              </h5>
              <div className="flex space-x-3">
                <button className="bg-gray-800 hover:bg-red-900/40 text-white px-3 py-2 rounded text-xs flex items-center border border-gray-700 hover:border-red-700 transition-all">
                  <i className="fab fa-apple mr-2 text-red-400"></i> App Store
                </button>
                <button className="bg-gray-800 hover:bg-red-900/40 text-white px-3 py-2 rounded text-xs flex items-center border border-gray-700 hover:border-red-700 transition-all">
                  <i className="fab fa-google-play mr-2 text-red-400"></i> Play
                  Store
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-4 md:mb-0 text-gray-500">
            © {new Date().getFullYear()} CineHub. All cinematic rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-xs hover:text-red-400 transition-colors border-b border-transparent hover:border-red-400/30 pb-0.5">
              Privacy
            </Link>
            <Link
              to="#"
              className="text-xs hover:text-red-400 transition-colors border-b border-transparent hover:border-red-400/30 pb-0.5">
              Terms
            </Link>
            <Link
              to="#"
              className="text-xs hover:text-red-400 transition-colors border-b border-transparent hover:border-red-400/30 pb-0.5">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
