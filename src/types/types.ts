export interface MovieType {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  year: string;
  filmLength: string | null;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: string | null;
  ratingVoteCount: number | null;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: null;
}

export interface FilmsType {
  films: MovieType[];
}

export interface FilmType {
  film: MovieType;
}
