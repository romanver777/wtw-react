/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe("VideoPlayer component", () => {
  const data = {
    items: [
      {
        url: "https://www.youtube.com/watch?v=mccs8Ql8m8o",
        name: "Французский трейлер",
        site: "YOUTUBE",
      },
      {
        url: "https://widgets.kinopoisk.ru/discovery/trailer/13420?onlyPlayer=1&autoplay=1&cover=1",
        name: "Фрагмент (содержит спойлер!) (дублированный)",
        site: "KINOPOISK_WIDGET",
      },
      {
        url: "https://www.youtube.com/v/NRT11KuW6L0",
        name: "Немецкий трейлер",
        site: "YOUTUBE",
      },
    ],
    total: 8,
  };
  const isFullScreen = false;
  const props = {
    data,
    isFullScreen,
  };
  const dataEmpty = {};
  const propsEmpty = {
    dataEmpty,
    isFullScreen,
  };

  it("should renders correct with full data", () => {
    const TRenderer = TestRenderer.create(<VideoPlayer {...props} />);
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
  it("should renders correct with empty data", () => {
    const TRenderer = TestRenderer.create(<VideoPlayer {...propsEmpty} />);
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
});
