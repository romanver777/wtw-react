import React, { useState } from "react";
import { connect } from "react-redux";

import { MovieType } from "../../types/types";
import { MOVIES_PER_MAIN_PAGE } from "../../helpers/const";
import {
  getAllGenres,
  getMoviesByGenre,
  getMaxPagesCount,
} from "../../helpers/helpers";
import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import ShowMore from "../show-more/show-more";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
}

interface OwnProps {
  films: MovieType[];
}

interface MapProps {
  ffilms: MovieType[];
  activeGenre: string;
  genresList: string[];
  filteredFilms: MovieType[];
}

type Props = MapProps;

const Catalog = (props: Props): JSX.Element => {
  const [prevFilmsList, setFilmsList] = useState(props.filteredFilms);
  const [maxPagesNumber, setMaxPagesNumber] = useState(
    getMaxPagesCount(prevFilmsList, MOVIES_PER_MAIN_PAGE)
  );
  const [startPagesNumber, setStartPagesNumber] = useState(1);

  const handleClick = () => setStartPagesNumber(startPagesNumber + 1);

  if (props.filteredFilms !== prevFilmsList) {
    setFilmsList(props.filteredFilms);

    if (
      getMaxPagesCount(props.filteredFilms, MOVIES_PER_MAIN_PAGE) !==
      maxPagesNumber
    )
      setMaxPagesNumber(
        getMaxPagesCount(props.filteredFilms, MOVIES_PER_MAIN_PAGE)
      );
    if (startPagesNumber > 1) setStartPagesNumber(1);
  }

  const sliceFilteredfilms = (filteredFilms: MovieType[], endNumber: number) =>
    filteredFilms.slice(0, endNumber);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList
        genresList={props.genresList}
        activeGenre={props.activeGenre}
      />
      <MoviesList
        filteredFilms={sliceFilteredfilms(
          props.filteredFilms,
          startPagesNumber * MOVIES_PER_MAIN_PAGE
        )}
      />
      {startPagesNumber !== maxPagesNumber ? (
        <ShowMore onHandleClick={() => handleClick()} />
      ) : null}
    </section>
  );
};

const mapStateToProps = (state: StateProps, ownProps: OwnProps) => ({
  ffilms: ownProps.films,
  activeGenre: state.activeGenre,
  genresList: getAllGenres(state.films),
  filteredFilms: getMoviesByGenre(state.films, state.activeGenre),
});

export { Catalog };
export default connect(mapStateToProps)(Catalog);
