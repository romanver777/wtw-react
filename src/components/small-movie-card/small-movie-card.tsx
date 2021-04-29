import React from "react";

import { FilmType } from "../../types/types";

const SmallMovieCard: React.FC<FilmType> = ({ film }) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={film.posterUrl} alt={film.nameRu} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {film.nameRu}
        </a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;
