import * as helpers from "./helpers";

const input = [
  {
    filmId: 1,
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
  },
  {
    filmId: 2,
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
  },
  {
    filmId: 3,
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
  },
  {
    filmId: 4,
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
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
  const fantastic = [
    {
      filmId: 1,
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
    },
  ];
  const fantasy = [
    {
      filmId: 1,
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
    },
    {
      filmId: 2,
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
    },
  ];
  const action = [
    {
      filmId: 1,
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
    },
    {
      filmId: 2,
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
    },
  ];
  const cartoon = [
    {
      filmId: 2,
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
    },
  ];
  const drama = [
    {
      filmId: 3,
      genres: [
        {
          genre: "драма",
        },
        {
          genre: "комедия",
        },
      ],
    },
    {
      filmId: 4,
      genres: [
        {
          genre: "драма",
        },
        {
          genre: "комедия",
        },
      ],
    },
  ];
  const comedy = [
    {
      filmId: 3,
      genres: [
        {
          genre: "драма",
        },
        {
          genre: "комедия",
        },
      ],
    },
    {
      filmId: 4,
      genres: [
        {
          genre: "драма",
        },
        {
          genre: "комедия",
        },
      ],
    },
  ];

  test("it should filter by 'фантастика'", () => {
    expect(helpers.getMoviesByGenre(input, "фантастика")).toEqual(fantastic);
  });
  test("it should filter by 'Фантастика'", () => {
    expect(helpers.getMoviesByGenre(input, "фантастика")).toEqual(fantastic);
  });
  test("it should filter by 'ФАНТАСТИКА'", () => {
    expect(helpers.getMoviesByGenre(input, "фантастика")).toEqual(fantastic);
  });
  test("it should filter by 'фантАстика'", () => {
    expect(helpers.getMoviesByGenre(input, "фантастика")).toEqual(fantastic);
  });
  test("it should filter by 'фэнтези'", () => {
    expect(helpers.getMoviesByGenre(input, "фэнтези")).toEqual(fantasy);
  });
  test("it should filter by 'боевик'", () => {
    expect(helpers.getMoviesByGenre(input, "боевик")).toEqual(action);
  });
  test("it should filter by 'мультфильм'", () => {
    expect(helpers.getMoviesByGenre(input, "мультфильм")).toEqual(cartoon);
  });
  test("it should filter by 'драма'", () => {
    expect(helpers.getMoviesByGenre(input, "драма")).toEqual(drama);
  });
  test("it should filter by 'комедия'", () => {
    expect(helpers.getMoviesByGenre(input, "комедия")).toEqual(comedy);
  });
  test("it should filter by 'все жанры'", () => {
    expect(helpers.getMoviesByGenre(input, "все жанры")).toEqual(input);
  });
});

describe("func getMovieById", () => {
  const outputId2 = {
    filmId: 2,
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
  };
  const outputId4 = {
    filmId: 4,
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
  };

  test("it should filter by id 2", () => {
    expect(helpers.getMovieById(input, "2")).toEqual(outputId2);
  });
  test("it should filter by id 2", () => {
    expect(helpers.getMovieById(input, 2)).toEqual(outputId2);
  });
  test("it should filter by id 4", () => {
    expect(helpers.getMovieById(input, 4)).toEqual(outputId4);
  });
  test("it should filter by id 48, it`s undefined", () => {
    expect(helpers.getMovieById(input, 48)).toBeUndefined();
  });
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

  test("it should get all genres and add default to start", () => {
    expect(helpers.getAllGenres(input)).toEqual(allGenres);
  });
});

describe("func getMaxPagesCount", () => {
  test("it should get pages count by 1 items per page", () => {
    expect(helpers.getMaxPagesCount(input, 1)).toBe(4);
  });
  test("it should get pages count by '1' items per page", () => {
    expect(helpers.getMaxPagesCount(input, "1")).toBe(4);
  });
  test("it should get pages count by 2 items per page", () => {
    expect(helpers.getMaxPagesCount(input, 2)).toBe(2);
  });
  test("it should get pages count by 3 items per page", () => {
    expect(helpers.getMaxPagesCount(input, 3)).toBe(2);
  });
  test("it should get pages count by 4 items per page", () => {
    expect(helpers.getMaxPagesCount(input, 4)).toBe(1);
  });
  test("it should get pages count by 5 items per page", () => {
    expect(helpers.getMaxPagesCount(input, 5)).toBe(1);
  });
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
