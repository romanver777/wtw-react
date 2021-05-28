import React from "react";

import { MovieType, StaffType } from "../../types/types";
import { STAFF_PER_PAGE } from "../../helpers/const";

interface PropsType {
  film: MovieType;
  staff: StaffType[];
}

const Details: React.FC<PropsType> = ({ film, staff }) => {
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Режиссер</strong>
          <span className="movie-card__details-value">{staff[0].nameRu}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">В ролях</strong>
          <span className="movie-card__details-value">
            {staff.slice(1, STAFF_PER_PAGE).map((item, ind) => {
              if (ind < staff.slice(1, STAFF_PER_PAGE).length - 1)
                return item.nameRu + ", ";
              return item.nameRu + " ";
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Длительность</strong>
          <span className="movie-card__details-value">{film.filmLength}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Жанр</strong>
          {film.genres.map((item, ind) => {
            return (
              <span className="movie-card__details-value" key={ind}>
                {film.genres.length - 1 === ind
                  ? item.genre
                  : `${item.genre}, `}
              </span>
            );
          })}
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Выход в прокат</strong>
          <span className="movie-card__details-value">{film.year}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
