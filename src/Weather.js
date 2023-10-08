import React, { useState } from "react";
import "./App.css";
import axios from "axios";
export default function Weather() {
  let [weatherData, setWeatherData] = useState([]);
  let [city, setCity] = useState("New York");
  let [temp, setTemp] = useState([]);

  function showwF(response) {
    setTemp([Math.round((response.data.main.temp * 9) / 5) + 32] + "ºF");
  }

  function showF() {
    let apiKey = "d1a86552de255334f6117b348c4519bd";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showwF);
  }

  function showWeather(response) {
    setTemp([Math.round(response.data.main.temp)] + "ºC");
    setWeatherData([
      /*city*/ response.data.name,

      "Humidity: " + response.data.main.humidity + "%",
      "Wind: " + response.data.wind.speed + " m/s",
      /*description*/ response.data.weather[0].description,
      /*icon*/
      <img
        src={
          "https://openweathermap.org/img/wn/" +
          response.data.weather[0].icon +
          "@2x.png"
        }
        alt=""
      />,
    ]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d1a86552de255334f6117b348c4519bd";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onMouseMoveCapture={handleSubmit} onClick={handleSubmit}>
        <input type="text" value={city} onChange={updateCity} />
        <input type="submit" />
      </form>
      <ul>
        {weatherData.map(function (Weather, index) {
          return <li key={index}>{Weather}</li>;
        })}
      </ul>
      <ul>{temp}</ul>
      <ul>
        <button onClick={showF}>ºF</button>
      </ul>
    </div>
  );
}
