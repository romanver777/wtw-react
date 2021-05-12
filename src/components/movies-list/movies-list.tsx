import React from "react";
import { connect } from "react-redux";

import { FilmsType } from "../../types/types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

interface StateProps {
  films: FilmsType;
}

const MoviesList: React.FC<StateProps> = ({ films }) => {
  return (
    <div className="catalog__movies-list">
      {films.map((item) => (
        <SmallMovieCard film={item} key={item.filmId} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: StateProps) => ({
  films: state.films,
});

export { MoviesList };
export default connect(mapStateToProps)(MoviesList);
