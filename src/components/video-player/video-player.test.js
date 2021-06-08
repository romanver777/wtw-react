/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe("VideoPlayer component", () => {
  const data = {
    trailers: [
      {
        url: "https://www.youtube.com/watch?v=xFxgu0ScjJ0",
        name: "Французский blu-ray/dvd-ролик",
        site: "YOUTUBE",
        size: null,
        type: "TRAILER",
      },
      {
        url: "https://widgets.kinopoisk.ru/discovery/trailer/66627?onlyPlayer=1&autoplay=1&cover=1",
        name: "Трейлер (русский язык)",
        site: "KINOPOISK_WIDGET",
        size: null,
        type: "TRAILER",
      },
    ],
    teasers: [],
  };
  const isFullScreen = false;
  const props = {
    data,
    isFullScreen,
  };
  const TRenderer = TestRenderer.create(<VideoPlayer {...props} />);

  it("should renders correct", () => {
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
});
