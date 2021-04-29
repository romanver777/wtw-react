import React from "react";
import { render } from "react-dom";

import "./style/style.css";
import App from "./components/app/app";
import films from "./mocks/films.json";

render(<App films={films} />, document.getElementById("root"));
