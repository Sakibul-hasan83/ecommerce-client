import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../Firebase + Authentication/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Successfully logged out!");
        navigate("/login");
      })
      .catch((error) => console.log(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${isActive ? "text-pink-400" : "text-white"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-semibold ${isActive ? "text-pink-400" : "text-white"}`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-semibold ${isActive ? "text-pink-400" : "text-white"}`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white/10 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow border border-white/20"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold tracking-wide"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-200">
            ShavBazar
          </span>
        </Link>
      </div>

      {/* Center links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn border-0 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn border-0 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
