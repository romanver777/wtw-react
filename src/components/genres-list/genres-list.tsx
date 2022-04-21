import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MovieType } from "../../types/types";
import { GENRES_RUS_TO_ENG } from "../../helpers/const";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
  genresList: string[];
}

interface MapProps {
  genresList: string[];
  activeGenre: string;
}

type Props = MapProps;

const GenresList = (props: Props): JSX.Element => {
  const { genresList, activeGenre } = props;

  return (
    <React.Fragment>
      {genresList && genresList.length && (
        <ul className="catalog__genres-list">
          {genresList.map((item, ind) => {
            return (
              <li
                className={
                  item === activeGenre
                    ? "catalog__genres-item catalog__genres-item--active"
                    : "catalog__genres-item"
                }
                key={ind}
              >
                <Link
                  to={`/?genre=${GENRES_RUS_TO_ENG[item]}`}
                  className="catalog__genres-link"
                  onClick={(e) => {
                    if (activeGenre === item) e.preventDefault();
                  }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateProps) => ({
  genresList: state.genresList,
  activeGenre: state.activeGenre,
});

export { GenresList };
export default connect(mapStateToProps)(GenresList);
