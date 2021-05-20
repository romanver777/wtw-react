import React, { useState } from "react";
import { connect } from "react-redux";

import { MovieType } from "../../types/types";
import { MOVIES_PER_MAIN_PAGE } from "../../helpers/const";
import { getMoviesByGenre } from "../../helpers/helpers";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMore from "../show-more/show-more";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
}

interface MapProps {
  filteredFilms: MovieType[];
}

type Props = MapProps;

const MoviesList = (props: Props): JSX.Element => {
  const [prevFilmsList, setFilmsList] = useState(props.filteredFilms);
  const [clickCount, setClickCount] = useState(1);

  const handleClick = () => setClickCount(clickCount + 1);

  if (props.filteredFilms !== prevFilmsList) {
    setFilmsList(props.filteredFilms);

    if (clickCount > 1) setClickCount(1);
  }

  const visibleFilms = prevFilmsList.slice(
    0,
    clickCount * MOVIES_PER_MAIN_PAGE
  );

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {visibleFilms.map((item) => (
          <SmallMovieCard film={item} key={item.filmId} />
        ))}
      </div>
      {prevFilmsList.length !== visibleFilms.length ? (
        <ShowMore onHandleClick={() => handleClick()} />
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateProps) => ({
  filteredFilms: getMoviesByGenre(state.films, state.activeGenre),
});

export { MoviesList };
export default connect(mapStateToProps)(MoviesList);
