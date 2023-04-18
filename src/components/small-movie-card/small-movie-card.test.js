/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";

import SmallMovieCard from "./small-movie-card";
import films from "../../mocks/films.json";

describe("SmallMovieCard component", () => {
  describe("with init props", () => {
    const props = {
      film: films[2],
      handleMouseEnter: () => {},
      handleMouseLeave: () => {},
      isOpen: false,
      data: null,
    };
    const Trenderer = TestRenderer.create(
      <Router history={history}>
        <SmallMovieCard {...props} />
      </Router>
    );

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });

    it("don't render video elem", () => {
      expect(Trenderer.root.findAllByType("iframe")).toEqual([]);
    });
  });

  describe("with Video props", () => {
    const propsVideo = {
      film: films[2],
      handleMouseEnter: () => {},
      handleMouseLeave: () => {},
      isOpen: true,
      data: {
        items: [
          {
            url: "https://www.youtube.com/watch?v=mccs8Ql8m8o",
            name: "Французский трейлер",
            site: "YOUTUBE",
          },
          {
            url: "https://widgets.kinopoisk.ru/discovery/trailer/13420?onlyPlayer=1&autoplay=1&cover=1",
            name: "Фрагмент (содержит спойлер!) (дублированный)",
            site: "KINOPOISK_WIDGET",
          },
          {
            url: "https://www.youtube.com/v/NRT11KuW6L0",
            name: "Немецкий трейлер",
            site: "YOUTUBE",
          },
        ],
        total: 3,
      },
    };
    const Trenderer = TestRenderer.create(
      <Router history={history}>
        <SmallMovieCard {...propsVideo} />
      </Router>
    );

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });

    it("renders video elem", () => {
      expect(Trenderer.root.findAllByType("iframe")).toHaveLength(1);
    });
  });
});
