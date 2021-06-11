/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";
import Footer from "./footer";

describe("Footer component", () => {
  const Trenderer = TestRenderer.create(
    <Router history={history}>
      <Footer />
    </Router>
  );

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
  it("renders elem with className 'page-footer'", () => {
    const clName = "page-footer";

    expect(Trenderer.root.findByType("footer").props.className).toEqual(clName);
  });
});
