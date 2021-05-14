import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAllGenres } from "../../helpers/helpers";
import { ActionCreator } from "../../reducer";
import { MovieType } from "../../types/types";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
}

interface OwnProps {
  allGenres: string[];
  activeGenre: string;
}

interface DispatchProps {
  setGenre: (genre: string) => void;
}

type Props = DispatchProps & OwnProps;

const GenresList = (props: Props): JSX.Element => {
  const { allGenres, activeGenre } = props;
  return (
    <ul className="catalog__genres-list">
      {allGenres.map((item, ind) => {
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
                props.setGenre(item);
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
  activeGenre: state.activeGenre,
  allGenres: getAllGenres(state.films),
});

const mapDispatchToProps = {
  setGenre: (genre: string) => ActionCreator.setGenre(genre),
};

export { GenresList };
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
