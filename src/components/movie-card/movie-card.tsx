import React from "react";
import { connect } from "react-redux";
import history from "../../history";

import { PAGE, APP_ROUTE } from "../../helpers/const";
import { MovieType } from "../../types/types";
import Header from "../header/header";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MovieCardButtonsList from "../movie-card-buttons-list/movie-card-buttons-list";
import MovieCardButton from "../movie-card-button/movie-card-button";

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

  const handleClick = () => {
    if (!isAuth) history.push(APP_ROUTE.LOGIN);
  };

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

            <MovieCardButtonsList handleClick={() => handleClick()}>
              <MovieCardButton
                xlink="#play-s"
                title="Смотреть"
                className="btn--play"
                onHandleClick={() => handleClick()}
              />
              <MovieCardButton
                xlink="#add"
                title="Сохранить"
                className="btn--list"
                onHandleClick={() => handleClick()}
              />
            </MovieCardButtonsList>
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
