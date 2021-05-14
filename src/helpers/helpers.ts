import { ALL_GENRES } from "../helpers/const";
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

const convertFirstLetterToUp = (str: string): string =>
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
