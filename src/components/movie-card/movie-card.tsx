import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { PAGE, APP_ROUTE } from "../../helpers/const";
import { MovieType } from "../../types/types";
import Header from "../header/header";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

interface StateProps {
  isAuth: boolean;
  awaitFilm: MovieType;
}

interface MapProps {
  isAuth: boolean;
  film: MovieType;
}

type Props = MapProps;

const MovieCard = (props: Props): JSX.Element => {
  const { isAuth, film } = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={film.posterUrl} alt={film.nameRu} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header page={PAGE.MOVIE_CARD}>
        <Logo clName="" />
        <UserBlock />
      </Header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={film.posterUrl}
              alt={film.nameRu}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.nameRu}</h2>
            <p className="movie-card__meta">
              {film.genres.map((item, ind) => {
                return (
                  <span className="movie-card__genre" key={ind}>
                    {item.genre}
                  </span>
                );
              })}
              <span className="movie-card__year">{film.year}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                to={!isAuth ? APP_ROUTE.LOGIN : APP_ROUTE.ROOT}
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Смотреть</span>
              </Link>
              <Link
                to={!isAuth ? APP_ROUTE.LOGIN : APP_ROUTE.ROOT}
                className="btn btn--list movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>Сохранить</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: StateProps) => ({
  isAuth: state.isAuth,
  film: state.awaitFilm,
});

export { MovieCard };
export default connect(mapStateToProps)(MovieCard);
