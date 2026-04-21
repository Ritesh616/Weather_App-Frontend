import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 text-white text-center transition hover:scale-105 duration-300">

      {/* City */}
      <h2 className="text-3xl font-bold mb-2">
        📍 {data.name}
      </h2>

      {/* Temperature */}
      <p className="text-5xl font-extrabold mb-2">
        {Math.round(data.main.temp)}°C
      </p>

      {/* Weather */}
      <p className="text-xl capitalize text-gray-200 mb-4">
        {data.weather[0].description}
      </p>

      {/* Extra Info */}
      <div className="flex justify-between text-sm text-gray-200 mt-6">

        <div className="flex flex-col">
          <span>🌡 Feels Like</span>
          <span className="font-bold">{data.main.feels_like}°C</span>
        </div>

        <div className="flex flex-col">
          <span>💧 Humidity</span>
          <span className="font-bold">{data.main.humidity}%</span>
        </div>

        <div className="flex flex-col">
          <span>🌬 Wind</span>
          <span className="font-bold">{data.wind.speed} m/s</span>
        </div>

      </div>

    </div>
  );
};

export default WeatherCard;