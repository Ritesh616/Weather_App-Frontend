import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("https://weather-app-backend-07pw.onrender.com/signup", data);

      alert("Signup Success ✅");

      // ✅ FIXED REDIRECT
      navigate("/home");

    } catch (err) {
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 px-4">

      {/* Glass Card */}
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-2">
          Create Account 🚀
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Signup to continue
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={data.name}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition transform text-white py-2 rounded-lg font-semibold shadow-lg"
        >
          Signup
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <p className="px-3 text-gray-300 text-sm">OR</p>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Login Link */}
        <p className="text-gray-300 text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;