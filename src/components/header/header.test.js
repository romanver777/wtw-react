/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";

import Header from "./header";
import { PAGE } from "../../helpers/const";
import Logo from "../logo/logo";
import SignIn from "../sign-in/sign-in";

describe("Header component", () => {
  const props = {
    page: PAGE.MOVIE_CARD,
  };
  const clName = `page-header ${props.page}__head`;
  const Trenderer = TestRenderer.create(
    <Router history={history}>
      <Header {...props}>
        <Logo />
        <SignIn />
      </Header>
    </Router>
  );

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
  it("renders props", () => {
    expect(Trenderer.root.findByType("header").props.className).toEqual(clName);
  });
  it("renders children", () => {
    expect(Trenderer.root.findByType("header").children).toHaveLength(2);
  });
});
