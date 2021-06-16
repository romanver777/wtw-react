/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import { App } from "./app";
import films from "../../mocks/films.json";

describe("App component", () => {
  const propsInit = {
    films: null,
    awaitFilm: null,
  };
  const propsHalf = {
    films: films,
    awaitFilm: null,
  };
  const propsFull = {
    films: films,
    awaitFilm: films[0],
  };
  const loading = "Loading...";
  const routesCount = 3;

  const renderer = new ShallowRenderer();

  describe("renders correctly with init props", () => {
    renderer.render(<App {...propsInit} />);
    const result = renderer.getRenderOutput();

    it("renders 'Loading'", () => {
      expect(result.props.children[0].props.children).toEqual(loading);
    });

    it("renders 'null'", () => {
      expect(result.props.children[1]).toEqual(null);
    });
  });

  describe("renders correctly with half props", () => {
    renderer.render(<App {...propsHalf} />);
    const result = renderer.getRenderOutput();

    it("renders 'Loading'", () => {
      expect(result.props.children[0].props.children).toEqual(loading);
    });

    it("renders 'null'", () => {
      expect(result.props.children[1]).toEqual(null);
    });
  });

  describe("renders correctly with full props", () => {
    renderer.render(<App {...propsFull} />);
    const result = renderer.getRenderOutput();

    it("don't render 'Loading' ", () => {
      expect(result.props.children[0]).toEqual(false);
    });

    it("renders ", () => {
      expect(result.props.children[1].props.children.length).toEqual(
        routesCount
      );
    });
  });
});
