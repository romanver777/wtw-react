import React from "react";

import { FilmType } from "../../types/types";
import { convertRatingLevel } from "../../helpers/helpers";

const Overview: React.FC<FilmType> = ({ film }) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {convertRatingLevel(film.rating)}
          </span>
          <span className="movie-rating__count">
            {film.ratingVoteCount} голосов
          </span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>
        <p className="movie-card__director">
          <strong>Режиссер: {film.staff[0].nameRu}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            В ролях:&nbsp;
            {film.staff.map((item, ind) => {
              return ind > 0 && ind < film.staff.length - 1
                ? item.nameRu + ", "
                : ind == film.staff.length - 1
                ? item.nameRu + " "
                : null;
            })}
            и другие
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Overview;
