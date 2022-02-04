import { ALL_GENRES, URL } from "../helpers/const";
import { MovieType } from "../types/types";

export const convertRatingLevel = (rt: string | null): string => {
  const rating = Number(rt);
  if (rating > 0 && rating < 4) return "Плохо";
  if (rating >= 4 && rating < 5) return "Удовлетворительно";
  if (rating >= 5 && rating < 6) return "Хорошо";
  if (rating >= 6 && rating < 7) return "Очень хорошо";
  if (rating >= 7 && rating < 8) return "Отлично";
  if (rating >= 8) return "Превосходно";
  return "-";
};

export const convertDateTime = (date: string): string => {
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const getMoviesByGenre = (
  movies: MovieType[],
  genre: string
): MovieType[] => {
  if (genre.toLowerCase() === ALL_GENRES.toLowerCase()) {
    return movies;
  } else {
    return movies.filter((item) =>
      item.genres.find((it) => it.genre.toLowerCase() === genre.toLowerCase())
    );
  }
};

export const getMovieById = (
  movies: MovieType[],
  id: string
): MovieType | undefined => movies.find((el) => el.filmId == +id);

export const convertFirstLetterToUp = (str: string): string =>
  str[0].toUpperCase() + str.substring(1);

export const getAllGenres = (movies: MovieType[]): string[] => {
  const genres = new Set();

  movies.forEach((item) => {
    item.genres.forEach((it) => {
      genres.add(it.genre);
    });
  });
  const arr = Array.from(genres) as string[];
  arr.unshift(ALL_GENRES);
  return arr.map((item) => convertFirstLetterToUp(item));
};

export const getMaxPagesCount = (
  films: MovieType[],
  moviesPerPage: number
): number => Math.ceil(films.length / moviesPerPage);

export const getRandomNumber = (from: number, to: number): number =>
  Math.floor(Math.random() * (to - from + 1));

export const convertUrl = (oldUrl: string): string =>
  `https://youtube.com/embed/${oldUrl.replace(
    URL.PATTERN_YT,
    ""
  )}?autoplay=1&mute=1&controls=0`;

export const validateEmail = (str: string): RegExpExecArray | null => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return reg.exec(str);
};
export const validatePass = (str: string, min = 4, max = 15): boolean =>
  str.length >= min && str.length < max;
