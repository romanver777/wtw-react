import React from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import { MovieType } from "../../types/types";
import { getMovieById } from "../../helpers/helpers";
import MovieCardFull from "../movie-card-full/movie-card-full";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

interface StateProps {
  films: MovieType[];
}

interface OwnProps {
  id: string;
}

interface MapProps {
  film: MovieType;
  films: MovieType[];
}

type Props = MapProps;

const PageMovie = (props: Props): JSX.Element => {
  const { film, films } = props;

  return (
    <React.Fragment>
      <MovieCardFull film={film} />
      <div className="page-content">
        <Catalog films={films} />
        <Footer />
      </div>
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
    films: state.films,
  };
};

export { PageMovie };
export default connect(mapStateToProps)(PageMovie);
