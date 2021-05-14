import React from "react";
import { connect } from "react-redux";

import { MovieType } from "../../types/types";
import { getMoviesByGenre } from "../../helpers/helpers";
import SmallMovieCard from "../small-movie-card/small-movie-card";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
}

interface OwnProps {
  films: MovieType[];
}

const MoviesList = (props: OwnProps): JSX.Element => {
  const { films } = props;
  return (
    <div className="catalog__movies-list">
      {films.map((item) => (
        <SmallMovieCard film={item} key={item.filmId} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: StateProps) => ({
  films: getMoviesByGenre(state.films, state.activeGenre),
});

export { MoviesList };
export default connect(mapStateToProps)(MoviesList);
