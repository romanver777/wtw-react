import React from "react";
import history from "../../history";

import { PAGE, LOGO_POSITION, TABSNAME, APP_ROUTE } from "../../helpers/const";
import { MovieType, ReviewType, StaffType } from "../../types/types";

import Header from "../header/header";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import Tabs from "../tabs/tabs";
import MovieCardButtonsList from "../movie-card-buttons-list/movie-card-buttons-list";
import MovieCardButton from "../movie-card-button/movie-card-button";

interface PropsType {
  isAuth: boolean;
  film: MovieType;
  reviews: ReviewType[];
  staff: StaffType[];
}

const MovieCardFull: React.FC<PropsType> = ({
  isAuth,
  film,
  reviews,
  staff,
}) => {
  const handleClick = () => {
    if (!isAuth) history.push(APP_ROUTE.LOGIN);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.posterUrl} alt={film.nameRu} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header page={PAGE.MOVIE_CARD}>
          <Logo clName={LOGO_POSITION.HEADER} />
          <UserBlock />
        </Header>

        <div className="movie-card__wrap">
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
                <MovieCardButton
                  xlink=""
                  title="Написать отзыв"
                  className=""
                  onHandleClick={() => handleClick()}
                />
              </MovieCardButtonsList>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src={film.posterUrl}
              alt={film.nameRu}
              width="218"
              height="327"
            />
          </div>
          <Tabs
            film={film}
            reviews={reviews}
            staff={staff}
            initTab={TABSNAME[0]}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieCardFull;
