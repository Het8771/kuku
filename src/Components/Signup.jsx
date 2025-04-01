import React, { useState } from "react";
import login from "../assets/images/login.png";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-50 flex justify-center items-center h-screen">
      {/* Signup Form Section */}
      <div className="p-8 w-full lg:w-1/2 lg:p-36 md:p-20">
        <div className="w-full max-w-full mx-auto">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <Link to="/"><img src={logo} alt="Kuku Logo" /></Link>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 border border-purple-400 focus:border-purple-500 focus:ring focus:ring-purple-200  rounded-md focus:outline-none   text-sm placeholder:text-purple-400 outline-none"
                required
              />
            </div>

            {/* Username */}
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border border-purple-400 focus:border-purple-500 focus:ring focus:ring-purple-200  rounded-md focus:outline-none  text-sm placeholder:text-purple-400"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-purple-400 focus:border-purple-500 focus:ring focus:ring-purple-200  rounded-md focus:outline-none  text-sm placeholder:text-purple-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-purple-400 focus:border-purple-500 focus:ring focus:ring-purple-200  rounded-md focus:outline-none  text-sm placeholder:text-purple-400"
                required
              />
            </div>

            {/* Repeat Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Repeat Password"
                className="w-full px-4 py-3 border border-purple-400 focus:border-purple-500  focus:ring focus:ring-purple-200  rounded-md focus:outline-none  text-sm placeholder:text-purple-400"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 text-white bg-purple-500 rounded-md hover:bg-purple-600 transition-colors"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-purple-400">
            Already have an account?{" "}
            <Link to="/Loginpage" className="text-purple-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={login}
          alt="Signup Illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Signup;
