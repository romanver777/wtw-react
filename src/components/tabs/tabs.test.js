/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";

import Tabs from "./tabs";
import films from "../../mocks/films.json";
import { TABSNAME } from "../../helpers/const";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";

describe("Tabs component", () => {
  describe("with active tab - Overview", () => {
    const propsOverview = {
      film: films[1],
      reviews: films[1].reviews,
      staff: films[1].staff,
      initTab: TABSNAME[0],
    };
    const Trenderer = TestRenderer.create(<Tabs {...propsOverview} />);

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });
    it("renders active tab title", () => {
      const className = "movie-nav__item movie-nav__item--active";

      expect(Trenderer.root.findAllByType("li")[0].props.className).toEqual(
        className
      );
    });
    it("renders Overview props", () => {
      expect(Trenderer.root.findByType(Overview).props.film).toBe(
        propsOverview.film
      );
    });
  });

  describe("with active tab - Details", () => {
    const propsDetails = {
      film: films[1],
      reviews: films[1].reviews,
      staff: films[1].staff,
      initTab: TABSNAME[1],
    };
    const Trenderer = TestRenderer.create(<Tabs {...propsDetails} />);

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });
    it("renders active tab title", () => {
      const className = "movie-nav__item movie-nav__item--active";
      expect(Trenderer.root.findAllByType("li")[1].props.className).toEqual(
        className
      );
    });
    it("renders Details props", () => {
      expect(Trenderer.root.findByType(Details).props.staff).toBe(
        propsDetails.staff
      );
    });
  });

  describe("with active tab - Reviews", () => {
    const propsReviews = {
      film: films[2],
      reviews: films[2].reviews,
      staff: films[2].staff,
      initTab: TABSNAME[2],
    };
    const Trenderer = TestRenderer.create(<Tabs {...propsReviews} />);

    it("renders correctly", () => {
      expect(Trenderer.toJSON()).toMatchSnapshot();
    });
    it("renders active tab title", () => {
      const className = "movie-nav__item movie-nav__item--active";
      expect(Trenderer.root.findAllByType("li")[2].props.className).toEqual(
        className
      );
    });
    it("renders Reviews props", () => {
      expect(Trenderer.root.findByType(Reviews).props.reviews).toBe(
        propsReviews.reviews
      );
    });
  });
});
