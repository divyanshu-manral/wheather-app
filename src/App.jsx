import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  async function getData() {

    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=383e69b6dd89e7428b3582796a68bc14&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found");
        return;
      }

      setError("");
      setWeatherData(data);

    } catch {
      setError("Something went wrong");
    }
  }

  return (
    <div className="container">

      <h1>Weather App</h1>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getData}>Search</button>

      </div>

      <Card data={weatherData} error={error} />

    </div>
  );
};

export default App;