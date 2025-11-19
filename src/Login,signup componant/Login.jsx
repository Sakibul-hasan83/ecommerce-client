import React, { useContext } from "react";
import AuthContext from "../Firebase + Authentication/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        alert("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side text */}
        <div className="lg:w-1/2 w-full p-10 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Login Now!
          </h1>
          <p className="text-gray-600">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {/* Right Side Login Form */}
        <div className="lg:w-1/2 w-full bg-base-100 p-8 lg:p-12">
          <form onSubmit={handleLogin} className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />

              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="btn w-full text-white bg-gradient-to-r from-purple-600 to-pink-500 border-0"
            >
              Login
            </button>

            <p className="text-center text-sm pt-2">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
