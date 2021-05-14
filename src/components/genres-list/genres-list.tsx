import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ActionCreator } from "../../reducer";

interface OwnProps {
  genresList: string[];
  activeGenre: string;
}

interface DispatchProps {
  setGenre: (genre: string) => void;
}

type Props = DispatchProps & OwnProps;

const GenresList = (props: Props): JSX.Element => {
  const { genresList, activeGenre } = props;
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

const mapDispatchToProps = {
  setGenre: (genre: string) => ActionCreator.setGenre(genre),
};

export { GenresList };
export default connect(null, mapDispatchToProps)(GenresList);
