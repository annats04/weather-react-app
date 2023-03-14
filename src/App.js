import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>
      <footer>
        {" "}
        This project is coded by Anna Tsantekidou and it is
        <a
          href="https://github.com/annats04/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on Github
        </a>
      </footer>{" "}
    </div>
  );
}
