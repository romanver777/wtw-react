import React from "react";
import { shallow } from "enzyme";
import UserPageTitle from "./user-page-title";

describe("UserPageTitle component", () => {
  const props = {
    title: "Some text",
  };
  const Component = shallow(<UserPageTitle {...props} />);

  it("renders correctly", () => {
    expect(Component).toMatchSnapshot();
  });
  it("renders h1 once", () => {
    expect(Component.find("h1")).toHaveLength(1);
  });
  it("renders h1 with props.text", () => {
    expect(Component.find("h1.page-title.user-page__title").text()).toEqual(
      props.title
    );
  });
});
