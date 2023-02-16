import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`the weather in Paris is ${response.data.temperature.current}`);
  }
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Paris&key=a5fa44f8460fdadf371tbdae4e7839fo&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2> Hello World</h2>;
}
