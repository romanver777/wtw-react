import React from "react";
import { Link } from "react-router-dom";

import { APP_ROUTE } from "../../helpers/const";
import { FilmType } from "../../types/types";

const SmallMovieCard: React.FC<FilmType> = ({ film }) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={film.posterUrl} alt={film.nameRu} />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${APP_ROUTE.FILM}${film.filmId}`}
        >
          {film.nameRu}
        </Link>
      </h3>
    </article>
  );
};

export default SmallMovieCard;
