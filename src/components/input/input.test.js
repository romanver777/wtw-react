/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import Input from "./input";

describe("Input component", () => {
  const props = {
    type: "password",
    placeholder: "Пароль",
    name: "user-password",
    id: "user-pass",
  };
  const Trenderer = TestRenderer.create(<Input {...props} />);

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
  it("renders props type", () => {
    expect(Trenderer.root.findByType("input").props.type).toEqual(props.type);
  });
  it("renders props placeholder", () => {
    expect(Trenderer.root.findByType("input").props.placeholder).toEqual(
      props.placeholder
    );
  });
  it("renders props name", () => {
    expect(Trenderer.root.findByType("input").props.name).toEqual(props.name);
  });
  it("renders props id", () => {
    expect(Trenderer.root.findByType("input").props.id).toEqual(props.id);
  });
});
