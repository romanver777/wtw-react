import React from "react";
import { shallow } from "enzyme";
import Logo from "./logo";

describe("Logo component", () => {
  const props = {
    clName: "newClassName",
  };
  const LogoComp = shallow(<Logo {...props} />);

  it("renders correctly", () => {
    expect(LogoComp).toMatchSnapshot();
  });
  it("render div.logo once", () => {
    expect(LogoComp.find("div.logo")).toHaveLength(1);
  });
  it("render .logo__link once", () => {
    expect(LogoComp.find(".logo__link")).toHaveLength(1);
  });
  it("render .logo__link + props once", () => {
    expect(LogoComp.find(`.${props.clName}`)).toHaveLength(1);
  });
});
