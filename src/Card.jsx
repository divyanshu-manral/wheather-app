import React from "react";

const Card = ({ data, error }) => {

  if (error) {
    return (
      <div className="card">
        <h3 className="error">{error}</h3>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="card">
        <p className="placeholder">Search a city to see weather</p>
      </div>
    );
  }

  const city = data.name;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const weather = data.weather[0].main;
  const icon = data.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="card">

      <div className="city-div">
        <h2>{city}</h2>
      </div>

      <div className="temp-div">

        <img src={iconUrl} alt="weather icon" />

        <h1 className="temp">{temp}°C</h1>

        <p>{weather}</p>

      </div>

      <div className="weather-details">

        <div className="humidity">
          <p>Humidity</p>
          <h3>{humidity}%</h3>
        </div>

        <div className="wind">
          <p>Wind</p>
          <h3>{wind } m/s</h3>
        </div>

      </div>

    </div>
  );
};

export default Card;