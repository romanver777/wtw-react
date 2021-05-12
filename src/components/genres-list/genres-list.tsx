import React from "react";
import { connect } from "react-redux";

import { GENRES } from "../../helpers/const";
import { ActionCreator } from "../../reducer";

interface StateProps {
  genre: string;
}

interface DispatchProps {
  setGenre: (genre: string) => void;
}

type Props = StateProps & DispatchProps;

const GenresList = (props: Props): JSX.Element => {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((item, ind) => {
        return (
          <li
            className={
              item === props.genre
                ? "catalog__genres-item catalog__genres-item--active"
                : "catalog__genres-item"
            }
            key={ind}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => props.setGenre(item)}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state: StateProps) => ({
  genre: state.genre,
});

const mapDispatchToProps = {
  setGenre: (genre: string) => ActionCreator.setGenre(genre),
};

export { GenresList };
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
