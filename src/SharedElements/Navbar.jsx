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
      {[
        { path: "/", name: "Home" },
        { path: "/shop", name: "Shop" },
        { path: "/categories", name: "Categories" },
        { path: "/offers", name: "Offers" },
        { path: "/cart", name: "Cart" },
        { path: "/wishlist", name: "Wishlist" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
      ].map((item, i) => (
        <li key={i}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `font-semibold px-3 py-2 rounded-lg transition-all duration-300 
              ${
                isActive
                  ? "bg-yellow-300 text-black"
                  : "text-white hover:bg-white/20"
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div
      className="
        navbar 
        bg-[#3b0764]        /* Mobile background */
        sm:bg-[#3b0764]
        md:bg-gradient-to-r /* Desktop gradient */
        md:from-purple-600 
        md:via-pink-500 
        md:to-orange-400 
        text-white shadow-lg 
        fixed top-0 left-0 right-0 
        z-50 backdrop-blur-md bg-opacity-90
      "
    >
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content 
            bg-[#3b0764] text-white
            rounded-box mt-3 w-52 p-2 shadow border border-white/20"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-3xl font-extrabold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white drop-shadow-md">
            ShabBazar
          </span>
        </Link>
      </div>

      {/* Center Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn border-0 bg-white/20 hover:bg-white/30
            text-white font-semibold rounded-lg transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn border-0 bg-white/20 hover:bg-white/30 
            text-white font-semibold rounded-lg transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
