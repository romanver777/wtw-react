import React from "react";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { Link } from "react-router-dom";

import { MovieType } from "../../types/types";
import { ActionCreator } from "../../reducer";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
  genresList: string[];
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
    <React.Fragment>
      {genresList && genresList.length && (
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
                    if (activeGenre != item) setGenre(item);
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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setGenre: (genre: string) => dispatch(ActionCreator.setGenre(genre)),
});

export { GenresList };
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
