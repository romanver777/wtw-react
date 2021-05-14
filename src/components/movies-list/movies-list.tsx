import React from "react";

import { MovieType } from "../../types/types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

interface Props {
  filteredFilms: MovieType[];
}

const MoviesList = (props: Props): JSX.Element => {
  const { filteredFilms } = props;
  return (
    <div className="catalog__movies-list">
      {filteredFilms.map((item) => (
        <SmallMovieCard film={item} key={item.filmId} />
      ))}
    </div>
  );
};

export default MoviesList;
