/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../../reducer";
import { Router } from "react-router";
import history from "../../history";

import Catalog from "./catalog";
import films from "../../mocks/films.json";
import { ALL_GENRES } from "../../helpers/const";

const initState = {
  films,
  awaitFilm: films[2],
  currentFilm: null,
  hoveredFilm: null,
  activeGenre: ALL_GENRES,
  genresList: null,
  tk: null,
  reviews: null,
  staff: null,
  hoveredVideoData: null,
};

const store = createStore(reducer, initState);

describe("Catalog component", () => {
  const props = { pageName: "main" };
  const Trenderer = TestRenderer.create(
    <Provider store={store}>
      <Router history={history}>
        <Catalog {...props} />
      </Router>
    </Provider>
  );

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
