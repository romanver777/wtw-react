/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../reducer";
import { Router } from "react-router-dom";
import history from "../../history";

import UserBlock from "./user-block";

describe("UserBlock component", () => {
  describe("default props", () => {
    const initState = {
      isAuth: false,
    };
    const store = createStore(reducer, initState);
    const Trenderer = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>
    );
    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });
  });
  describe("isAuth = true", () => {
    const initState = {
      isAuth: true,
    };
    const store = createStore(reducer, initState);
    const Trenderer = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>
    );
    const root = Trenderer.root;
    it("renders correctly", () => {
      expect(
        root.findByProps({ className: "user-block__avatar" }).props.children
          .type
      ).toEqual("img");
    });
  });
});
