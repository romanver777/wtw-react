/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
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
  isMovieLoading: true,
  isMovieError: false,
};

const store = createStore(reducer, initState);

describe("PageMovie component", () => {
  const props = {
    film: films[0],
    prevFilm: null,
    loadFilmData: () => ({}),
    reviews: films[0].reviews,
    staff: films[0].staff,
    isMovieLoading: false,
    isMovieError: false,
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

  describe("renders correctly with props", () => {
    const renderer = new ShallowRenderer();

    it("loading", () => {
      const propsLoading = {
        ...props,
        isMovieLoading: true,
      };
      const res = "Loading...";
      renderer.render(<PageMovie {...propsLoading} />);
      const result = renderer.getRenderOutput();

      expect(result.props.children).toBe(res);
    });
    it("loading error", () => {
      const propsLoadingError = {
        ...props,
        isMovieLoading: true,
        isMovieError: true,
      };
      const res = "Что-то пошло не так.";
      renderer.render(<PageMovie {...propsLoadingError} />);
      const result = renderer.getRenderOutput();

      expect(result.props.text).toBe(res);
    });
    it("no film", () => {
      const propsNoFilm = {
        ...props,
        film: null,
      };
      const res = {};
      renderer.render(<PageMovie {...propsNoFilm} />);
      const result = renderer.getRenderOutput();

      expect(result.props).toStrictEqual(res);
    });
    it("no reviews", () => {
      const propsNoReviews = {
        ...props,
        reviews: null,
      };
      const res = "Loading...";
      renderer.render(<PageMovie {...propsNoReviews} />);
      const result = renderer.getRenderOutput();

      expect(result.props.children).toBe(res);
    });
    it("no staff", () => {
      const propsNoReviews = {
        ...props,
        staff: null,
      };
      const res = "Loading...";
      renderer.render(<PageMovie {...propsNoReviews} />);
      const result = renderer.getRenderOutput();

      expect(result.props.children).toBe(res);
    });
  });
});
