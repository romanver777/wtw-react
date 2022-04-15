/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import TestRenderer from "react-test-renderer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../reducer";
import { Router } from "react-router";
import history from "../../history";

import { App } from "./app";
import films from "../../mocks/films.json";
import ALL_GENRES from "../../helpers/const";

describe("App component", () => {
  const loadingProps = {
    isLoading: true,
    isInitError: false,
  };
  const errorProps = {
    isLoading: true,
    isInitError: true,
  };
  const loadedProps = {
    isLoading: false,
    isInitError: false,
  };
  const loading = "Loading...";
  const error = "Что-то пошло не так.";
  const routesCount = 4;

  const renderer = new ShallowRenderer();

  describe("renders correctly with loading props", () => {
    renderer.render(<App {...loadingProps} />);
    const result = renderer.getRenderOutput();

    it("renders errorPage - false", () => {
      expect(result.props.children[0]).toEqual(false);
    });
    it("renders 'Loading'", () => {
      expect(result.props.children[1].props.children).toEqual(loading);
    });
    it("renders app - false", () => {
      expect(result.props.children[2]).toEqual(false);
    });
  });

  describe("renders correctly with error props", () => {
    renderer.render(<App {...errorProps} />);
    const result = renderer.getRenderOutput();

    it("renders errorPage", () => {
      expect(result.props.children[0].props.text).toEqual(error);
    });
    it("renders 'Loading'", () => {
      expect(result.props.children[1].props.children).toEqual(loading);
    });
    it("renders app - false", () => {
      expect(result.props.children[2]).toEqual(false);
    });
  });

  describe("renders correctly with loaded props", () => {
    renderer.render(<App {...loadedProps} />);
    const result = renderer.getRenderOutput();

    it("renders errorPage - false", () => {
      expect(result.props.children[0]).toEqual(false);
    });
    it("renders 'Loading' - false", () => {
      expect(result.props.children[1]).toEqual(false);
    });
    it("renders app", () => {
      expect(result.props.children[2].props.children.length).toEqual(
        routesCount
      );
    });
  });

  describe("snapshot", () => {
    const initState = {
      films,
      awaitFilm: films[2],
      currentFilm: films[3],
      hoveredFilm: null,
      activeGenre: ALL_GENRES,
      genresList: null,
      tk: null,
      reviews: null,
      staff: null,
      hoveredVideoData: null,
      isLoading: true,
      isInitError: false,
      isMovieError: false,
    };
    const store = createStore(reducer, initState);

    describe("loading", () => {
      const props = {
        isLoading: true,
        isInitError: false,
      };
      const Trenderer = TestRenderer.create(
        <Provider store={store}>
          <Router history={history}>
            <App {...props} />
          </Router>
        </Provider>
      );

      it("renders correctly", () => {
        expect(Trenderer.toJSON()).toMatchSnapshot();
      });
    });

    describe("error", () => {
      const props = {
        isLoading: true,
        isInitError: true,
      };
      const Trenderer = TestRenderer.create(
        <Provider store={store}>
          <Router history={history}>
            <App {...props} />
          </Router>
        </Provider>
      );

      it("renders correctly", () => {
        expect(Trenderer.toJSON()).toMatchSnapshot();
      });
    });
  });
});
