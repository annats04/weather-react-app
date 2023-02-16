import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(" ");

  function weatherInfo(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=a5fa44f8460fdadf371tbdae4e7839fo&units=metric`;
    axios.get(apiUrl).then(weatherInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <h2> Weather Search Engine </h2>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="type a city" onChange={updateCity} />
        <button type="Submit">Search</button>
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
