/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import MovieCardButtonsList from "../movie-card-buttons-list/movie-card-buttons-list";

describe("MovieCardButtonsList component", () => {
  const props = {
    children: [
      <div className="className" key="someKey"></div>,
      <div className="another className" key="anotherKey"></div>,
    ],
  };
  const Trenderer = TestRenderer.create(<MovieCardButtonsList {...props} />);
  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
