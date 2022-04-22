import * as helpers from "./helpers";
import { MovieType } from "../types/types";
import { GENRES_RUS_TO_ENG } from "./const";

const input: MovieType[] = [
  {
    filmId: 1,
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
        genre: "фантастика",
      },
      {
        genre: "фэнтези",
      },
      {
        genre: "боевик",
      },
    ],
    rating: "5.8",
    ratingVoteCount: 586,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1302121.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1302121.jpg",
    ratingChange: null,
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
    staff: [
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
    ],
  },
  {
    filmId: 2,
    nameRu: "Неуязвимый (сериал)",
    nameEn: "Invincible",
    year: "2021-...",
    filmLength: null,
    description: "Неуязвимый (сериал)",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "фэнтези",
      },
      {
        genre: "боевик",
      },
    ],
    rating: "8.1",
    ratingVoteCount: 1549,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1171895.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1171895.jpg",
    ratingChange: null,
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
    ],
    staff: [
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
    ],
  },
  {
    filmId: 3,
    nameRu: "Невероятные (сериал)",
    nameEn: "The Nevers",
    year: "2021-...",
    filmLength: null,
    description: "Невероятные (сериал)",
    countries: [
      {
        country: "Великобритания",
      },
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    rating: "7.0",
    ratingVoteCount: 882,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1245486.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1245486.jpg",
    ratingChange: null,
    reviews: [
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
      {
        reviewId: 3001374,
        reviewType: "NEUTRAL",
        reviewData: "2021-03-03T19:48:00",
        userPositiveRating: null,
        userNegativeRating: null,
        reviewAutor: "Egorche23",
        reviewTitle: null,
        reviewDescription:
          "Одаренный режиссер Ли Дэниелс (автор «Сокровища», «Газетчика» и «Дворецкого») решил воплотить на экране жизнь дивы, настоящей иконы для американских чернокожих — Билли Холидей. Кинолента представляет собой достаточно прямой биографический фильм, раскрывающий последнее десятилетие жизни леди Дей: борьба",
      },
    ],
    staff: [
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
    ],
  },
  {
    filmId: 4,
    nameRu: "Райя и последний дракон",
    nameEn: "Raya and the Last Dragon",
    year: "2021",
    filmLength: "1:47",
    description: "Райя и последний дракон",
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
        genre: "комедия",
      },
    ],
    rating: "7.6",
    ratingVoteCount: 43386,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1015471.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1015471.jpg",
    ratingChange: null,
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
    staff: [
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
    ],
  },
];

describe("func convertRatingLevel", () => {
  test("add string '0' to equal '-'", () => {
    expect(helpers.convertRatingLevel("0")).toBe("-");
  });
  test("add string 'sometxt' to equal '-'", () => {
    expect(helpers.convertRatingLevel("sometxt")).toBe("-");
  });
  test("add null to equal '-'", () => {
    expect(helpers.convertRatingLevel(null)).toBe("-");
  });
  test("add string '-5' to equal '-'", () => {
    expect(helpers.convertRatingLevel("-5")).toBe("-");
  });
  test("add string '1' to equal 'Плохо'", () => {
    expect(helpers.convertRatingLevel("1")).toBe("Плохо");
  });
  test("add string '2' to equal 'Плохо'", () => {
    expect(helpers.convertRatingLevel("2")).toBe("Плохо");
  });
  test("add string '3' to equal 'Плохо'", () => {
    expect(helpers.convertRatingLevel("3")).toBe("Плохо");
  });
  test("add string '4' to equal 'Удовлетворительно'", () => {
    expect(helpers.convertRatingLevel("4")).toBe("Удовлетворительно");
  });
  test("add string '5' to equal 'Хорошо'", () => {
    expect(helpers.convertRatingLevel("5")).toBe("Хорошо");
  });
  test("add string '6' to equal 'Очень хорошо'", () => {
    expect(helpers.convertRatingLevel("6")).toBe("Очень хорошо");
  });
  test("add string '7' to equal 'Отлично'", () => {
    expect(helpers.convertRatingLevel("7")).toBe("Отлично");
  });
  test("add string '8' to equal 'Превосходно'", () => {
    expect(helpers.convertRatingLevel("8")).toBe("Превосходно");
  });
  test("add string '9' to equal 'Превосходно'", () => {
    expect(helpers.convertRatingLevel("9")).toBe("Превосходно");
  });
  test("add string '10' to equal 'Превосходно'", () => {
    expect(helpers.convertRatingLevel("9")).toBe("Превосходно");
  });
});

describe("func convertFirstLetterToUp", () => {
  test("it should convert 'word' to 'Word'", () => {
    expect(helpers.convertFirstLetterToUp("word")).toEqual("Word");
  });
  test("it should convert 'some words' to 'Some words'", () => {
    expect(helpers.convertFirstLetterToUp("some words")).toEqual("Some words");
  });
});

describe("func convertDateTime", () => {
  test("it should convert date '2021-03-22T12:29:00' to '22 марта 2021 г., 12:29'", () => {
    expect(helpers.convertDateTime("2021-03-22T12:29:00")).toMatch(
      /22 марта 2021 г., 12:29/
    );
  });
  test("it should convert date '2014-11-22T10:29:30' to '22 ноября 2014 г., 10:29'", () => {
    expect(helpers.convertDateTime("2014-11-22T10:29:30")).toMatch(
      /22 ноября 2014 г., 10:29/
    );
  });
});

describe("func getMoviesByGenre", () => {
  const fantastic = [1];
  const fantasy = [1, 2];
  const action = [1, 2];
  const cartoon = [2];
  const drama = [3, 4];
  const comedy = [3, 4];
  const allGenres = [1, 2, 3, 4];

  const genre1 = [
    {
      genre: "Мультфильм",
    },
  ];
  const genre2 = [
    {
      genre: "Фэнтези",
    },
    {
      genre: "Боевик",
    },
  ];
  const genre2_1 = [
    {
      genre: "Комедия",
    },
    {
      genre: "Драма",
    },
  ];
  const genre3 = [
    {
      genre: "Комедия",
    },
    {
      genre: "Драма",
    },
    {
      genre: "Боевик",
    },
  ];
  const genre3_1 = [
    {
      genre: "Фантастика",
    },
    {
      genre: "Драма",
    },
    {
      genre: "Фэнтези",
    },
  ];
  const result_genre1 = [2];
  const result_genre2 = [1, 2];
  const result_genre2_1 = [3, 4];
  const result_genre3 = [3, 4];
  const result_genre3_1 = [1];

  test("it should filter by 'фантастика'", () =>
    expect(
      helpers.getMoviesByGenre(input, "фантастика").map((el) => el.filmId)
    ).toEqual(fantastic));
  test("it should filter by 'Фантастика'", () =>
    expect(
      helpers.getMoviesByGenre(input, "Фантастика").map((el) => el.filmId)
    ).toEqual(fantastic));
  test("it should filter by 'ФАНТАСТИКА'", () =>
    expect(
      helpers.getMoviesByGenre(input, "ФАНТАСТИКА").map((el) => el.filmId)
    ).toEqual(fantastic));
  test("it should filter by 'фантАстика'", () =>
    expect(
      helpers.getMoviesByGenre(input, "фантАстика").map((el) => el.filmId)
    ).toEqual(fantastic));
  test("it should filter by 'фэнтези'", () =>
    expect(
      helpers.getMoviesByGenre(input, "фэнтези").map((el) => el.filmId)
    ).toEqual(fantasy));
  test("it should filter by 'боевик'", () =>
    expect(
      helpers.getMoviesByGenre(input, "боевик").map((el) => el.filmId)
    ).toEqual(action));
  test("it should filter by 'мультфильм'", () =>
    expect(
      helpers.getMoviesByGenre(input, "мультфильм").map((el) => el.filmId)
    ).toEqual(cartoon));
  test("it should filter by 'драма'", () =>
    expect(
      helpers.getMoviesByGenre(input, "драма").map((el) => el.filmId)
    ).toEqual(drama));
  test("it should filter by 'комедия'", () =>
    expect(
      helpers.getMoviesByGenre(input, "комедия").map((el) => el.filmId)
    ).toEqual(comedy));
  test("it should filter by 'все жанры'", () =>
    expect(
      helpers.getMoviesByGenre(input, "все жанры").map((el) => el.filmId)
    ).toEqual(allGenres));

  test("it should filter by 1 genre array", () =>
    expect(
      helpers.getMoviesByGenre(input, genre1).map((el) => el.filmId)
    ).toEqual(result_genre1));
  test("it should filter by 2 genres array", () =>
    expect(
      helpers.getMoviesByGenre(input, genre2).map((el) => el.filmId)
    ).toEqual(result_genre2));
  test("it should filter by 2 genres array", () =>
    expect(
      helpers.getMoviesByGenre(input, genre2_1).map((el) => el.filmId)
    ).toEqual(result_genre2_1));

  test("it should filter by 3 genres array", () =>
    expect(
      helpers.getMoviesByGenre(input, genre3).map((el) => el.filmId)
    ).toEqual(result_genre3));
  test("it should filter by 3 genres array", () =>
    expect(
      helpers.getMoviesByGenre(input, genre3_1).map((el) => el.filmId)
    ).toEqual(result_genre3_1));
});

describe("func getMovieById", () => {
  const outputId2 = {
    filmId: 2,
    nameRu: "Неуязвимый (сериал)",
    nameEn: "Invincible",
    year: "2021-...",
    filmLength: null,
    description: "Неуязвимый (сериал)",
    countries: [
      {
        country: "США",
      },
    ],
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "фэнтези",
      },
      {
        genre: "боевик",
      },
    ],
    rating: "8.1",
    ratingVoteCount: 1549,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1171895.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1171895.jpg",
    ratingChange: null,
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
    ],
    staff: [
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
    ],
  };
  const outputId4 = {
    filmId: 4,
    nameRu: "Райя и последний дракон",
    nameEn: "Raya and the Last Dragon",
    year: "2021",
    filmLength: "1:47",
    description: "Райя и последний дракон",
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
        genre: "комедия",
      },
    ],
    rating: "7.6",
    ratingVoteCount: 43386,
    posterUrl:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/1015471.jpg",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1015471.jpg",
    ratingChange: null,
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
    staff: [
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
    ],
  };

  test("it should filter by id 2", () =>
    expect(helpers.getMovieById(input, "2")).toEqual(outputId2));
  test("it should filter by id 2", () =>
    expect(helpers.getMovieById(input, 2)).toEqual(outputId2));
  test("it should filter by id 4", () =>
    expect(helpers.getMovieById(input, 4)).toEqual(outputId4));
  test("it should filter by id 48, it`s undefined", () =>
    expect(helpers.getMovieById(input, 48)).toBeUndefined());
});

describe("func getAllGenres", () => {
  const allGenres = [
    "Все жанры",
    "Фантастика",
    "Фэнтези",
    "Боевик",
    "Мультфильм",
    "Драма",
    "Комедия",
  ];

  test("it should get all genres and add default to start", () =>
    expect(helpers.getAllGenres(input)).toEqual(allGenres));
});

describe("func getMaxPagesCount", () => {
  test("it should get pages count by 1 items per page", () =>
    expect(helpers.getMaxPagesCount(input, 1)).toBe(4));
  test("it should get pages count by '1' items per page", () =>
    expect(helpers.getMaxPagesCount(input, "1")).toBe(4));
  test("it should get pages count by 2 items per page", () =>
    expect(helpers.getMaxPagesCount(input, 2)).toBe(2));
  test("it should get pages count by 3 items per page", () =>
    expect(helpers.getMaxPagesCount(input, 3)).toBe(2));
  test("it should get pages count by 4 items per page", () =>
    expect(helpers.getMaxPagesCount(input, 4)).toBe(1));
  test("it should get pages count by 5 items per page", () =>
    expect(helpers.getMaxPagesCount(input, 5)).toBe(1));
});

// getRandomNumber
describe("func getRandomNumber", () => {
  global.Math.random = () => 0.584381;
  it("it should be 15 with 0.5 input random number ", () => {
    expect(helpers.getRandomNumber(0, 30)).toBe(18);
  });
});

// convertUrl
describe("func convertUrl", () => {
  const oldUrl = "https://www.youtube.com/watch?v=xFxgu0ScjJ0";
  const newUrl =
    "https://youtube.com/embed/xFxgu0ScjJ0?autoplay=1&mute=1&controls=0";

  it("should be newUrl", () => {
    expect(helpers.convertUrl(oldUrl)).toBe(newUrl);
  });
});

// validateEmail
describe("func validateEmail", () => {
  const email1 = "qwer23@to.to";
  const email2 = "qwer23@toto";
  const email3 = "qwer23to.to";
  const email4 = "qwer23@t@o.to";
  // const result = ['qwer23@to.to', index: 0, input: 'qwer23@to.to', groups: undefined];

  it("should be array with 1 element is email1", () => {
    const result = helpers.validateEmail(email1);
    expect(result?.input).toEqual(email1);
  });
  it("should be null", () => {
    expect(helpers.validateEmail(email2)).toEqual(null);
  });
  it("should be null", () => {
    expect(helpers.validateEmail(email3)).toEqual(null);
  });
  it("should be null", () => {
    expect(helpers.validateEmail(email4)).toEqual(null);
  });
});

// validatePass
describe("func validatePass", () => {
  const pass1 = "er1";
  const pass2 = "er1wergkrhvbhd7rgfvbfyf";
  const pass3 = "euhuhk7";

  it("should be false", () => {
    expect(helpers.validatePass(pass1)).toBeFalsy();
  });
  it("should be false", () => {
    expect(helpers.validatePass(pass2)).toBeFalsy();
  });
  it("should be false", () => {
    expect(helpers.validatePass(pass3)).toBeTruthy();
  });
});

// getKeyByValue
describe("func getKeyByValue", () => {
  const value = "noir";
  const value1 = "cartoon";

  it("should be 'noir' => 'Фильм-нуар'", () => {
    expect(helpers.getKeyByValue(GENRES_RUS_TO_ENG, value)).toBe("Фильм-нуар");
  });
  it("should be 'cartoon' => 'Мультфильм'", () => {
    expect(helpers.getKeyByValue(GENRES_RUS_TO_ENG, value1)).toBe(`Mультфильм`);
  });
});
