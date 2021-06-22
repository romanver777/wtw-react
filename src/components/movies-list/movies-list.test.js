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

import MoviesList from "./movies-list";
import films from "../../mocks/films.json";

describe("MoviesList component", () => {
  const initState = {
    films,
    awaitFilm: null,
    currentFilm: null,
    hoveredFilm: null,
    activeGenre: "",
    genresList: null,
    tk: null,
    reviews: null,
    staff: null,
    hoveredVideoData: null,
  };
  const store = createStore(reducer, initState);

  describe("no video", () => {
    const props = {
      films,
      handleClick: () => {},
      isShowMore: false,
    };
    const Trenderer = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MoviesList {...props} />
        </Router>
      </Provider>
    );

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });
    it("don`t render ShowMore button", () => {
      const className = "catalog__more";
      expect(Trenderer.root.findAllByProps({ className })).toEqual([]);
    });
  });

  describe("with video", () => {
    const props = {
      films,
      handleClick: () => {},
      isShowMore: true,
    };
    const Trenderer = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MoviesList {...props} />
        </Router>
      </Provider>
    );

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });
    it("renders ShowMore button", () => {
      const className = "catalog__more";
      expect(Trenderer.root.findAllByProps({ className })).toHaveLength(1);
    });
  });
});
