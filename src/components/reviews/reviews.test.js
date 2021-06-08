/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import Reviews from "./reviews";

describe("Reviews component", () => {
  const props = {
    reviews: [
      {
        reviewId: 3016116,
        reviewType: "POSITIVE",
        reviewData: "2021-04-12T19:01:00",
        userPositiveRating: null,
        userNegativeRating: null,
        reviewAutor: "SlavaLim",
        reviewTitle: "В этом плоде найдется и вкус и приятное послевкусие.",
        reviewDescription:
          "Весьма рекомендую к просмотру фильм с очаровательной Андрой Дэй «Соединённые Штаты против Билли Холидей» (The United States vs. Billie Holiday, 2021) режиссера Ли Дэниелса. \r\nНе относитесь к нему, как к кино-шедевру, но и не сочтите его за грязную пропаганду BLM.",
      },
      {
        reviewId: 3015986,
        reviewType: "POSITIVE",
        reviewData: "2021-04-12T10:26:00",
        userPositiveRating: null,
        userNegativeRating: null,
        reviewAutor: "DIMI25",
        reviewTitle: "Странные плоды",
        reviewDescription:
          "В 1940-х правительство США начинает войну против наркотиков. Ведомые предубеждениями против цветного населения чиновники выбирают своей целью популярную певицу Билли Холидей.\r\nБилли Холидей (англ. Billie Holiday), настоящее имя Элеанора Фейган (англ. Eleanora Fagan; 7 апреля 1915, Балтимор — 17 июля 1959,",
      },
    ],
  };
  const Trenderer = TestRenderer.create(<Reviews {...props} />);

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });

  it("should find root elem with className 'movie-card__reviews movie-card__row'", () => {
    expect(
      Trenderer.root.findAllByProps({
        className: "movie-card__reviews movie-card__row",
      })
    ).toHaveLength(1);
  });
  it("should find elems with className 'review__text'", () => {
    expect(
      Trenderer.root.findAllByProps({ className: "review__text" })
    ).toHaveLength(2);
  });
  it("should find first review author [props.review[0].reviewAutor]", () => {
    expect(
      Trenderer.root.findAllByProps({ className: "review__author" })[0].children
    ).toEqual([props.reviews[0].reviewAutor]);
  });
  it("should find second review author [props.review[1].reviewAutor]", () => {
    expect(
      Trenderer.root.findAllByProps({ className: "review__author" })[1].children
    ).toEqual([props.reviews[1].reviewAutor]);
  });
});
