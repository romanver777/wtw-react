/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../reducer";
import { Router } from "react-router";
import history from "../../history";

import { MovieCard } from "./movie-card";
import films from "../../mocks/films.json";

const initState = {
  films,
  awaitFilm: null,
  currentFilm: films[0],
  hoveredFilm: null,
  activeGenre: "",
  genresList: null,
  tk: null,
  reviews: null,
  staff: null,
  hoveredVideoData: null,
};

const store = createStore(reducer, initState);

describe("MovieCard component", () => {
  const props = { isAuth: false, film: films[0] };
  const Trenderer = TestRenderer.create(
    <Provider store={store}>
      <Router history={history}>
        <MovieCard {...props} />
      </Router>
    </Provider>
  );
  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
