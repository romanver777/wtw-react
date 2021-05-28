import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { MovieType, ReviewType, StaffType } from "../../types/types";
import { PAGE_NAME } from "../../helpers/const";
import { getMovieById } from "../../helpers/helpers";
import MovieCardFull from "../movie-card-full/movie-card-full";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import { Operation, ActionCreator } from "../../reducer";

interface StateProps {
  films: MovieType[];
  currentFilm: MovieType;
  reviews: ReviewType[];
  staff: StaffType[];
}

interface OwnProps {
  id: string;
}

interface MapProps {
  film: MovieType;
  prevFilm: MovieType;
  films: MovieType[];
  reviews: ReviewType[];
  staff: StaffType[];
}

interface DispatchProps {
  loadFilmData: (film: MovieType) => void;
}

type Props = MapProps & DispatchProps;

const PageMovie = (props: Props): JSX.Element => {
  const { film, prevFilm, loadFilmData, reviews, staff } = props;

  useEffect(() => {
    if (film !== prevFilm) loadFilmData(film);
  });

  return (
    <React.Fragment>
      {reviews && staff && (
        <React.Fragment>
          <MovieCardFull film={film} reviews={reviews} staff={staff} />
          <div className="page-content">
            <Catalog pageName={PAGE_NAME[1]} />
            <Footer />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (
  state: StateProps,
  ownProps: RouteComponentProps<OwnProps>
) => {
  const { id } = ownProps.match.params;
  return {
    id,
    film: getMovieById(state.films, id) as MovieType,
    prevFilm: state.currentFilm,
    films: state.films,
    reviews: state.reviews,
    staff: state.staff,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmData(film: MovieType) {
    dispatch(ActionCreator.setCurrentFilm(film));
    dispatch(Operation.loadReviews(film.filmId));
    dispatch(Operation.loadStaff(film.filmId));
  },
});

export { PageMovie };
export default connect(mapStateToProps, mapDispatchToProps)(PageMovie);
