import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white pt-14 pb-8  relative overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-yellow-200">
              ShavBazar
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              Discover quality, trust, and innovation with ShavBazar — your
              one-stop shop for everything you love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-200 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-200 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-yellow-200 transition duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-200 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white/90">Follow Us</h3>
            <p className="text-white/80 mb-4">
              Stay connected through our social media platforms
            </p>
            <div className="flex justify-center md:justify-start gap-5 text-xl">
              <a
                href="#"
                className="hover:text-yellow-200 hover:scale-110 transition transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-yellow-200 hover:scale-110 transition transform"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-yellow-200 hover:scale-110 transition transform"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-yellow-200 hover:scale-110 transition transform"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">ShavBazar</span>. All
            rights reserved.
          </p>
          <p className="text-xs mt-1 text-white/50">
            Designed with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
