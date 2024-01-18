import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <small>
        <a
          href="https://github.com/carolinacartaxo/vanila-weather-app"
          target="_blank"
          rel="noreferrer">
          Open-source code{" "}
        </a>
        by Carolina Cartaxo
      </small>
    </div>
  );
}

export default App;
