import React from "react";

import { FilmsType } from "../../types/types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

const MoviesList: React.FC<FilmsType> = ({ films }) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallMovieCard film={film} key={film.filmId} />
      ))}
    </div>
  );
};

export default MoviesList;
