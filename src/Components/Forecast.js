import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        const daily = res.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );

        setForecast(daily);
      } catch (err) {
        console.log(err);
      }
    };

    if (city) fetchForecast();
  }, [city]);

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold">5-Day Forecast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
        {forecast.map((item, index) => (
          <div key={index} className="bg-white/20 p-3 rounded-lg text-center">
            <p>{item.dt_txt.split(" ")[0]}</p>
            <p>{item.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;