import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `bc2cd97eaa209e7d22d8f3c84081655f`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">
              {" "}
              Search{" "}
            </button>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-success w-100">
              {" "}
              Current{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="container">
        <div className="Weather">
          {form}
          <div className="overview">
            <h1>{weather.name}</h1>
            <ul>
              <li className="update">Last updated: {weather.date}</li>
              <li>{weather.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="align-self-start"
                />
                <div className="align-self-end">
                  <strong>{Math.round(weather.temperature)}</strong>
                  <span className="units">
                    <a href="/" className="active">
                      °C{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
