import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }

  let apiKey = `bc2cd97eaa209e7d22d8f3c84081655f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
