/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import Details from "./details";

describe("Details component", () => {
  const staff = [
    {
      staffId: 1210,
      nameRu: "Ли Дэниелс",
      nameEn: "Lee Daniels",
      description: null,
      posterUrl:
        "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/1210.jpg",
      professionText: "Режиссеры",
      professionKey: "DIRECTOR",
    },
    {
      staffId: 4173614,
      nameRu: "Андра Дэй",
      nameEn: "Andra Day",
      description: "Billie Holiday",
      posterUrl:
        "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/4173614.jpg",
      professionText: "Актеры",
      professionKey: "ACTOR",
    },
    {
      staffId: 223311,
      nameRu: "Гаррет Хедлунд",
      nameEn: "Garrett Hedlund",
      description: "Harry Anslinger",
      posterUrl:
        "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/223311.jpg",
      professionText: "Актеры",
      professionKey: "ACTOR",
    },
  ];
  const film = {
    filmId: 1302121,
    nameRu: "Соединённые Штаты против Билли Холидей",
    nameEn: "The United States vs. Billie Holiday",
    year: "2021",
    filmLength: "2:10",
    description:
      "В 1940-х правительство США начинает войну против наркотиков. Ведомые предубеждениями против цветного населения чиновники выбирают своей целью популярную певицу Билли Холидей.",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "музыка",
      },
    ],
    rating: "5.8",
    ratingVoteCount: 586,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1302121.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1302121.jpg",
    ratingChange: null,
  };
  const props = { film, staff };
  const TRenderer = TestRenderer.create(<Details {...props} />);

  it("renders correctly", () => {
    expect(TRenderer.toJSON()).toMatchSnapshot();
  });
  it("renders 1 div with className 'movie-card__text movie-card__row'", () => {
    const cName = "movie-card__text movie-card__row";

    expect(
      TRenderer.root.findAllByProps({
        className: `${cName}`,
      })
    ).toHaveLength(1);
  });
  it("renders 2 div with className ''", () => {
    const cName = "movie-card__text-col";

    expect(
      TRenderer.root.findAllByProps({ className: `${cName}` })
    ).toHaveLength(2);
  });
});
