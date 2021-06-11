/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import Form from "./form";

describe("Form component", () => {
  const Trenderer = TestRenderer.create(<Form />);

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
