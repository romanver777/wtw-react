/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import ShowMore from "./show-more";

describe("ShowMore component", () => {
  const handler = jest.fn();
  const TRenderer = TestRenderer.create(<ShowMore onHandleClick={handler} />);

  it("renders correctly", () => {
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
  it("should find 'button' with className", () => {
    expect(TRenderer.root.findByType("button").props.className).toBe(
      "catalog__button"
    );
  });
  it("should find click func prop", () => {
    expect(TRenderer.root.findByType("button").props.onClick());
  });
});
