import React from "react";

import { FilmType } from "../../types/types";

const Details: React.FC<FilmType> = ({ film }) => {
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Режиссер</strong>
          <span className="movie-card__details-value">
            {film.staff[0].nameRu}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">В ролях</strong>
          <span className="movie-card__details-value">
            {film.staff.map((item, ind) => {
              return ind > 0 && ind < film.staff.length - 1
                ? item.nameRu + ", "
                : ind == film.staff.length - 1
                ? item.nameRu + " "
                : null;
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
