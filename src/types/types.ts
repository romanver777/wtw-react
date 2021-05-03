export interface MovieType {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  year: string;
  filmLength: string | null;
  description: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: string | null;
  ratingVoteCount: number | null;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: null;
  reviews: {
    reviewAutor: string;
    reviewData: string;
    reviewDescription: string;
    reviewId: number;
    reviewTitle: string;
    reviewType: string;
    userNegativeRating: null;
    userPositiveRating: null;
  }[];
  staff: {
    staffId: number;
    nameRu: string;
    nameEn: string;
    description: null;
    posterUrl: string;
    professionText: string;
    professionKey: string;
  }[];
}

export interface FilmsType {
  films: MovieType[];
}

export interface FilmType {
  film: MovieType;
}

export interface ReviewType {
  reviewAutor: string;
  reviewData: string;
  reviewDescription: string;
  reviewId: number;
  reviewTitle: string;
  reviewType: string;
  userNegativeRating: null;
  userPositiveRating: null;
}
