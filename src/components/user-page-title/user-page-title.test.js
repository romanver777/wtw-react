/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";
import UserPageTitle from "./user-page-title";

describe("UserPageTitle component", () => {
  const props = {
    title: "Some text",
  };
  const TRenderer = TestRenderer.create(
    <Router history={history}>
      <UserPageTitle {...props} />
    </Router>
  );
  const root = TRenderer.root;

  it("renders correctly", () => {
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
  it("renders h1 with classNames", () => {
    expect(root.findByType("h1").props.className).toEqual(
      "page-title user-page__title"
    );
  });
  it("renders h1 with props.text", () => {
    // console.log(root.findByType("h1").props.children);
    // console.log(props.title);
    expect(root.findByType("h1").props.children).toEqual(props.title);
  });
});
