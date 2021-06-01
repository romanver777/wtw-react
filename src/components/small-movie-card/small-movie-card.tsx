import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";
import { FilmType, MovieType } from "../../types/types";
import { ActionCreator } from "../../reducer";

interface StateProps {
  hoveredFilm: MovieType;
}

interface DispatchProps {
  setHoveredFilm: (film: MovieType) => void;
  removeHoveredFilm: () => void;
}

type PropsType = FilmType & StateProps & DispatchProps;

const SmallMovieCard: React.FC<PropsType> = ({
  film,
  setHoveredFilm,
  removeHoveredFilm,
  hoveredFilm,
}) => {
  let timer: NodeJS.Timeout;
  const handleMouseEnter = (film: MovieType) =>
    (timer = setTimeout(() => setHoveredFilm(film), 1000));
  const handlerMouseLeave = () => {
    clearTimeout(timer);
    if (hoveredFilm) removeHoveredFilm();
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleMouseEnter(film)}
      onMouseLeave={() => handlerMouseLeave()}
    >
      <div className="small-movie-card__image">
        <img src={film.posterUrl} alt={film.nameRu} />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${APP_ROUTE.FILM}${film.filmId}`}
        >
          {film.nameRu}
        </Link>
      </h3>
    </article>
  );
};

const mapStateToProps = (state: StateProps) => ({
  hoveredFilm: state.hoveredFilm,
});

const MapDispatchToProps = (dispatch) => ({
  setHoveredFilm: (film: MovieType) =>
    dispatch(ActionCreator.setHoveredFilm(film)),
  removeHoveredFilm: () => dispatch(ActionCreator.removeHoveredFilm()),
});

export { SmallMovieCard };
export default connect(mapStateToProps, MapDispatchToProps)(SmallMovieCard);
