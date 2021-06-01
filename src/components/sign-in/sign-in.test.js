/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Router } from "react-router";
import history from "../../history";

import SignIn from "./sign-in";
import Header from "../header/header.tsx";
import Logo from "../logo/logo";
import UserPageTitle from "../user-page-title/user-page-title";
import Form from "../form/form";
import Footer from "../footer/footer";

describe("SignIn component", () => {
  const jsx = (
    <Router history={history}>
      <SignIn />
    </Router>
  );
  const wrapper = TestRenderer.create(jsx);
  const root = wrapper.root;
  it("renders correctly", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("find Header props", () => {
    expect(root.findByType(Header).props.page).toBe("user-page");
  });
  it("find UserPageTitle props", () => {
    expect(root.findByType(UserPageTitle).props.title).toBe("Выполните вход");
  });
  it("find 2 Logo comps", () => {
    expect(root.findAllByType(Logo).length).toEqual(2);
  });
  it("find Form once", () => {
    expect(root.findAllByType(Form).length).toEqual(1);
  });
  it("find Footer once", () => {
    expect(root.findAllByType(Footer).length).toEqual(1);
  });
});
