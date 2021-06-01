/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";
import Logo from "./logo";

describe("Logo component", () => {
  const props = {
    clName: "newClassName",
  };
  const TRenderer = TestRenderer.create(
    <Router history={history}>
      <Logo {...props} />
    </Router>
  );
  const root = TRenderer.root;

  it("renders correctly", () => {
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
  it("render div.logo once", () => {
    expect(root.findByProps({ className: "logo" }).children.length).toEqual(1);
  });
  it("render .logo__link + props  once", () => {
    expect(
      root.findByProps({ className: `logo__link ${props.clName}` }).children
        .length
    ).toEqual(1);
  });
});
