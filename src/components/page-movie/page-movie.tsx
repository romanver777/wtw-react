import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { MovieType, ReviewType, StaffType } from "../../types/types";
import { PAGE_NAME } from "../../helpers/const";
import { getMovieById } from "../../helpers/helpers";
import MovieCardFull from "../movie-card-full/movie-card-full";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import ErrorPage from "../error-page/error-page";
import { Operation, ActionCreator } from "../../reducer";

interface StateProps {
  isAuth: boolean;
  films: MovieType[];
  currentFilm: MovieType;
  reviews: ReviewType[];
  staff: StaffType[];
  isMovieError: boolean;
}

interface OwnProps {
  id: string;
}

interface MapProps {
  isAuth: boolean;
  film: MovieType;
  prevFilm: MovieType;
  films: MovieType[];
  reviews: ReviewType[];
  staff: StaffType[];
  isMovieError: boolean;
}

interface DispatchProps {
  loadFilmData: (film: MovieType) => void;
}

type Props = MapProps & DispatchProps;

const PageMovie = (props: Props): JSX.Element => {
  const { isAuth, film, prevFilm, loadFilmData, reviews, staff, isMovieError } =
    props;

  useEffect(() => {
    if (film && film !== prevFilm) loadFilmData(film);
  });

  if (!film) return <ErrorPage />;
  return (
    <>
      {isMovieError && <ErrorPage text="Что-то пошло не так." />}
      {!isMovieError && reviews && staff && (
        <>
          <MovieCardFull
            isAuth={isAuth}
            film={film}
            reviews={reviews}
            staff={staff}
          />
          <div className="page-content">
            <Catalog pageName={PAGE_NAME[1]} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (
  state: StateProps,
  ownProps: RouteComponentProps<OwnProps>
) => {
  const { id } = ownProps.match.params;
  return {
    isAuth: state.isAuth,
    id,
    film: getMovieById(state.films, id) as MovieType,
    prevFilm: state.currentFilm,
    films: state.films,
    reviews: state.reviews,
    staff: state.staff,
    isMovieError: state.isMovieError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmData(film: MovieType) {
    dispatch(ActionCreator.setCurrentFilm(film));
    dispatch(Operation.loadPageMovieData(film.filmId));
  },
});

export { PageMovie };
export default connect(mapStateToProps, mapDispatchToProps)(PageMovie);
