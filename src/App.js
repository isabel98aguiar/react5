import "./App.css";
import React from "react";
import Weather from "./Weather";


function App() {
  let weatherData = {
    humidity: "",
    wind: "",
    description: "",
    icon: "",
  };
  let temp = [];

  return (
    <div className="App">
      <h1>Weather App </h1>
      <Weather weatherData={weatherData} temp={temp} />
      <div className="gitlink">
        <a
          className="gitlink"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/isabel98aguiar/react5"
        >
          Github repository
        </a>
      </div>
    </div>
  );
}

export default App;
