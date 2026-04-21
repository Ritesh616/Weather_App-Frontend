import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/home" className="text-xl font-bold text-blue-600 dark:text-white cursor-pointer">
          🌤 WeatherApp
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">

      <li>
        <Link to="/home" className="hover:text-blue-500 cursor-pointer">
          Home
        </Link>
      </li>

      <li>
    <Link to="/" className="hover:text-blue-500">
      Login
    </Link>
  </li>


      <li>
        <Link to="/signup" className="hover:text-blue-500 cursor-pointer">
          Signup
        </Link>
      </li>


    </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Button */}
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-700 dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

     {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3 text-gray-700 dark:text-gray-200">

    <Link
      to="/home"
      onClick={() => setMenuOpen(false)}
      className="block hover:text-blue-500"
    >
      Home
    </Link>

    <Link
      to="/"
      onClick={() => setMenuOpen(false)}
      className="block hover:text-blue-500"
    >
      Login
    </Link>

    <Link
      to="/signup"
      onClick={() => setMenuOpen(false)}
      className="block hover:text-blue-500"
    >
      Signup
    </Link>

  </div>
)}
    </nav>
  );
};

export default Navbar;