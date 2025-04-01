import React from "react";
import login from "../assets/images/login.png";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      {/* Login Form Section */}
      <div className="p-8 w-full lg:w-1/2 lg:p-36 md:p-20">
        <div className="w-full max-w-full px-6 py-8 mx-auto">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <Link to="/"><img src={logo} alt="Kuku Logo" /></Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-purple-400 focus:border-purple-500 focus:ring focus:ring-purple-200 h-12 rounded-md px-4 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-purple-400 focus:border-purple-500 focus:ring focus:ring-purple-200 h-12 rounded-md px-4 pr-10 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-purple-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-purple-400" />
                )}
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-purple-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white h-12 rounded-md"
            >
              Log in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-purple-500">OR</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="border border-purple-400 text-purple-500 hover:bg-purple-50 h-12 rounded-md w-full"
              onClick={() => console.log("Google login")}
            >
              Google
            </button>
            <button
              type="button"
              className="border border-purple-400 text-purple-500 hover:bg-purple-50 h-12 rounded-md w-full"
              onClick={() => console.log("Facebook login")}
            >
              Facebook
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/Signup"
              className="text-purple-500 text-sm hover:underline"
            >
              Can&apos;t Log in? Sign up an account
            </Link>
          </div>
        </div>
      </div>
      {/* Right Image Section */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={login}
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Loginpage;
