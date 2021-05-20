import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MovieType } from "../../types/types";
import { getAllGenres } from "../../helpers/helpers";
import { ActionCreator } from "../../reducer";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
}

interface MapProps {
  genresList: string[];
  activeGenre: string;
}

interface DispatchProps {
  setGenre: (genre: string) => void;
}

type Props = MapProps & DispatchProps;

const GenresList = (props: Props): JSX.Element => {
  const { genresList, activeGenre, setGenre } = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item, ind) => {
        return (
          <li
            className={
              item.toLowerCase() === activeGenre.toLowerCase()
                ? "catalog__genres-item catalog__genres-item--active"
                : "catalog__genres-item"
            }
            key={ind}
          >
            <Link
              to=""
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                setGenre(item);
              }}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: StateProps) => ({
  genresList: getAllGenres(state.films),
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = {
  setGenre: (genre: string) => ActionCreator.setGenre(genre),
};

export { GenresList };
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
