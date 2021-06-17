/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import PageMain from "./page-main";

describe("PageMain component", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<PageMain />);
  const result = renderer.getRenderOutput();

  it("renders first child as MovieCard", () => {
    expect(result.props.children[0].type.type.displayName).toEqual(
      "Connect(MovieCard)"
    );
  });
  describe("renders second child", () => {
    it("as div", () => {
      expect(result.props.children[1].type).toEqual("div");
    });
    it("with className", () => {
      expect(result.props.children[1].props.className).toEqual("page-content");
    });
    it("with 2 children", () => {
      expect(result.props.children[1].props.children).toHaveLength(2);
    });
    it("with first children props", () => {
      expect(result.props.children[1].props.children[0].props.pageName).toEqual(
        "main"
      );
    });
  });
});
