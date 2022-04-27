export const ALL_GENRES = `Все жанры`;

export const GENRES_RUS_TO_ENG: { [key: string]: string } = {
  "Все жанры": "all-genres",
  Драма: "drama",
  Фэнтези: "fantasy",
  Криминал: "crime",
  Мелодрама: "melodrama",
  Комедия: "comedy",
  Биография: "bio",
  История: "history",
  Фантастика: "fantastic",
  Боевик: "action",
  Триллер: "thriller",
  Мультфильм: "cartoon",
  Мюзикл: "musical",
  Приключения: "adventures",
  Военный: "war",
  Детектив: "detective",
  Семейный: "family",
  Аниме: "anime",
  Вестерн: "western",
  Музыка: "music",
  Документальный: "documentary",
  Спорт: "sport",
  "Фильм-нуар": "noir",
  Ужасы: "horror",
};

export const PAGE_NAME = ["main", "movie"];

export const MOVIES_PER_MAIN_PAGE = 8;

export const STAFF_PER_PAGE = 10;

export const TABSNAME: Array<string> = ["Описание", "Информация", "Отзывы"];

export const PAGE: { [key: string]: string } = {
  MOVIE_CARD: "movie-card",
  USER_PAGE: "user-page",
};

export const USER_PAGE_TITLE = {
  SIGN_IN: "Выполните вход",
  MY_LIST: "Мой список",
  SIMILAR_MOVIES: "Похожие фильмы",
  ERROR: "Ошибка",
};

export const APP_ROUTE = {
  ROOT: "/",
  FILM: "/film/",
  FILM_ID: "/film/:id",
  LOGIN: "/login",
  ERROR: "*",
};

export const LOGO_POSITION = {
  HEADER: "",
  FOOTER: "logo__link--light",
};

export const URL = {
  KP_BASE: "https://kinopoiskapiunofficial.tech/api/",
  MAIN_BASE: "https://run.mocky.io/v3/",
  PATTERN_YT: "https://www.youtube.com/watch?v=",
};
