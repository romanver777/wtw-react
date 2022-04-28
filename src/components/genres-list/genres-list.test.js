/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";
import { GenresList } from "./genres-list";
import { GENRES_RUS_TO_ENG } from "../../helpers/const";

describe("GenresList component", () => {
  const props = {
    genresList: Object.keys(GENRES_RUS_TO_ENG),
    activeGenre: "Комедия",
  };
  const Trenderer = TestRenderer.create(
    <Router history={history}>
      <GenresList {...props} />
    </Router>
  );

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
  it("renders genres list", () => {
    const list = Trenderer.root.findAllByType("a").map((el) => el.children[0]);

    expect(list).toEqual(props.genresList);
  });
  it("renders active genre", () => {
    const className = "catalog__genres-item catalog__genres-item--active";
    expect(
      Trenderer.root.findByProps({ className: `${className}` }).props.children
        .props.children
    ).toEqual(props.activeGenre);
  });
  describe("renders url for links", () => {
    const url = "#/?genre=";
    const genresRusEngExp = Object.entries(GENRES_RUS_TO_ENG);
    genresRusEngExp.forEach((el) => el.push(url + el[1]));

    it.each(genresRusEngExp)("${url} + genre name", (_a, b, expected) => {
      expect(Trenderer.root.findByProps({ href: url + b }).props.href).toBe(
        expected
      );
    });
  });
});
