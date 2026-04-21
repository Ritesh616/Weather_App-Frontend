import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "../Components/Forecast";
import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";
import MapComponent from "../Components/MapComponent";

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [weather, setWeather] = useState(null);

  // 🔍 Fetch weather
  const fetchWeather = async (city) => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      setWeather(res.data);
    } catch (err) {
      console.error(err);

      if (err.response?.status === 404) {
        alert("City not found");
      } else if (err.response?.status === 401) {
        alert("Invalid API key");
      } else {
        alert("Failed to fetch weather");
      }
    }
  };

  // 📍 Location weather
  const getLocationWeather = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
              params: {
                lat: latitude,
                lon: longitude,
                appid: API_KEY,
                units: "metric",
              },
            }
          );

          setWeather(res.data);
        } catch (err) {
          console.error(err);
          alert("Location weather failed");
        }
      },
      (error) => {
        alert("Location permission denied");
      }
    );
  };

  // // ✅ Default city
  // useEffect(() => {
  //   fetchWeather("");
  // }, []);

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* HEADER */}
      <div className="h-[280px] flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          🌤 Weather Dashboard
        </h1>
        <p className="text-white/80 text-sm">
          Get real-time weather updates worldwide
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="w-full max-w-4xl mx-auto bg-white/20 rounded-2xl p-6 backdrop-blur-md">

          <div className="flex flex-col sm:flex-row gap-4">
            <SearchBar onSearch={fetchWeather} />

            <button
              onClick={getLocationWeather}
              className="bg-white px-5 py-2 rounded-lg shadow"
            >
              📍 Current Location
            </button>
          </div>

          {weather ? (
            <div className="mt-6 space-y-6">
              <WeatherCard data={weather} />

              <MapComponent
                lat={weather?.coord?.lat}
                lon={weather?.coord?.lon}
                city={weather?.name}
              />

              <Forecast city={weather?.name} />
            </div>
          ) : (
            <p className="text-white mt-4">Loading...</p>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <div className="h-[40px] flex items-center justify-center text-white/70 text-xs">
        © 2026 Weather App • Built with React & Tailwind
      </div>
    </div>
  );
};

export default Home;