import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 justify-content-center">
            <div className="city">{props.data.city}</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-sm-5 mx-auto">
            <div className="d-flex justify-content-center">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={60}
              />

              <WeatherTemperature celsius={props.data.temperature} />
            </div>{" "}
          </div>{" "}
          <div className="text-capitalize description">
            {props.data.description}
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row mt-5 mb-3">
          <div className="col realfeel">
            {" "}
            <i className="fa-solid fa-temperature-low"></i> realFeel:{" "}
            {Math.round(props.data.feelsLike)}°C
          </div>
          <div className="col humidity">
            <i className="fa-solid fa-droplet"></i> humidity:{" "}
            {props.data.humidity}%
          </div>
          <div className="col wind">
            <i className="fa-solid fa-wind"></i> wind:{" "}
            {Math.round(props.data.wind)} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
