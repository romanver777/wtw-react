import React from "react";
import { render } from "react-dom";

import "./style/style.css";
import App from "./components/app/app";
import data from "./mocks/films.json";

render(<App films={data.films} />, document.getElementById("root"));
