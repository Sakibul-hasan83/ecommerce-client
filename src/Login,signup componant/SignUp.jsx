import React, { useContext } from "react";
import AuthContext from "../Firebase + Authentication/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { email, password };

    try {
      // 1️⃣ Create user in Firebase
      const data = await createUser(email, password);
      console.log("User created:", data.user);
      alert("Account successfully created! Now you can login.");

      // 2️⃣ Save user in backend DB
      const backendUrl = import.meta.env.VITE_BACKEND_URL; // .env.local variable
      const res = await axios.post(`${backendUrl}/users`, user);
      console.log("User saved to DB:", res.data);

      // 3️⃣ Logout user after signup
      await logout();
      form.reset();
      navigate("/login");
      console.log("Logged out successfully");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error(error);
        alert(error.message || "Failed to create account!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <div className="card w-full max-w-md bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-2xl border border-white/20 p-6">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-md">
          Create an Account
        </h1>
        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block mb-2 font-semibold text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-3 rounded-lg font-bold text-white hover:scale-105 transition-transform shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-200 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-pink-200 font-semibold hover:text-white transition"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
