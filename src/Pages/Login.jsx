import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login Success ✅");

      // ✅ FIXED
      navigate("/home");

    } catch (err) {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-4">

      {/* Glass Card */}
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        {/* Logo / Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-2">
          Weather App 🌤
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Login to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:scale-105 transition transform text-white py-2 rounded-lg font-semibold shadow-lg"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-400"></div>
          <p className="px-3 text-gray-300 text-sm">OR</p>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Signup Link */}
        <p className="text-gray-300 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;