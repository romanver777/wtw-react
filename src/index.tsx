import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compose } from "recompose";

import "./style/style.css";
import App from "./components/app/app";
import { reducer, Operation } from "./reducer";
import createApi from "./api";

const store = createStore(
  reducer,
  // applyMiddleware(thunk.withExtraArgument(createApi())
  compose(
    applyMiddleware(thunk.withExtraArgument(createApi())),
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
  )
);

store.dispatch(Operation.init());

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
