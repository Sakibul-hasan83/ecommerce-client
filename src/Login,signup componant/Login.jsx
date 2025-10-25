import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Firebase + Authentication/AuthContext";
import axios from "axios";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signInUser(email, password);
      console.log("Logged in user:", result.user);

      const loggedUser = { email };

      // Get JWT from backend
      await axios.post("http://localhost:5000/jwt", loggedUser, {
        withCredentials: true,
      });

      alert("✅ Successfully Logged In!");
      navigate("/"); // redirect after login
    } catch (error) {
      console.log("Login error:", error.message);
      alert("Login failed! Please check your email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6">
      <div className="card w-full max-w-md bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-2xl border border-white/20 p-6">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-md">
          Welcome Back 👋
        </h1>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 font-semibold text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <div className="flex justify-between items-center mt-2 text-sm">
              <Link to="/signup" className="text-pink-200 hover:text-white transition">
                Create account
              </Link>
              <a href="#" className="text-indigo-200 hover:text-white transition">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 rounded-lg font-bold text-white hover:scale-105 transition-transform shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-200 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-200 font-semibold hover:text-white transition">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
