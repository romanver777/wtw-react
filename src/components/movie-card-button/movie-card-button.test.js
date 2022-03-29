/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import MovieCardButton from "../movie-card-button/movie-card-button";

describe("MovieCardButton component", () => {
  const props = {
    xlink: "play",
    title: "Add",
    className: "btn--play",
    handleClick: () => ({}),
  };
  const Trenderer = TestRenderer.create(<MovieCardButton {...props} />);

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
