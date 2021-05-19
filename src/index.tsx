import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./style/style.css";
import App from "./components/app/app";
import { reducer } from "./reducer";
import history from "./history";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
