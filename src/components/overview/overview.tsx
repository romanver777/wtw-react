import React from "react";

import { MovieType, StaffType } from "../../types/types";
import { convertRatingLevel } from "../../helpers/helpers";
import { STAFF_PER_PAGE } from "../../helpers/const";

interface PropsType {
  film: MovieType;
  staff: StaffType[];
}

const Overview: React.FC<PropsType> = ({ film, staff }) => {
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
          <strong>Режиссер: {staff[0].nameRu}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            В ролях:&nbsp;
            {staff.slice(1, STAFF_PER_PAGE).map((item, ind) => {
              if (ind < staff.slice(1, STAFF_PER_PAGE).length - 1)
                return item.nameRu + ", ";
              return item.nameRu + " " + "и другие";
            })}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Overview;
