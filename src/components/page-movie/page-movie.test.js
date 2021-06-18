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

import { PageMovie } from "./page-movie";
import films from "../../mocks/films.json";
import { ALL_GENRES } from "../../helpers/const";

const initState = {
  films,
  awaitFilm: null,
  currentFilm: films[0],
  hoveredFilm: null,
  activeGenre: ALL_GENRES,
  genresList: null,
  tk: null,
  reviews: null,
  staff: null,
  hoveredVideoData: null,
};

const store = createStore(reducer, initState);

describe("PageMovie component", () => {
  const props = {
    film: films[0],
    prevFilm: null,
    loadFilmData: () => {},
    reviews: films[0].reviews,
    staff: films[0].staff,
  };
  const Trenderer = TestRenderer.create(
    <Provider store={store}>
      <Router history={history}>
        <PageMovie {...props} />
      </Router>
    </Provider>
  );

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
