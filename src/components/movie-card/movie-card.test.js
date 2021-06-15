/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";
import { MovieCard } from "./movie-card";
import films from "../../mocks/films.json";

describe("MovieCard component", () => {
  const props = { film: films[0] };
  const Trenderer = TestRenderer.create(
    <Router history={history}>
      <MovieCard {...props} />
    </Router>
  );
  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
