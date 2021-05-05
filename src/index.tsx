import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./style/style.css";
import App from "./components/app/app";
import films from "./mocks/films.json";

render(
  <BrowserRouter>
    <App films={films} />
  </BrowserRouter>,
  document.getElementById("root")
);
