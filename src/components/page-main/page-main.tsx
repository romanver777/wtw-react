import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { PAGE_NAME, GENRES_RUS_TO_ENG, ALL_GENRES } from "../../helpers/const";
import { getKeyByValue } from "../../helpers/helpers";
import MovieCard from "../movie-card/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import { ActionCreator } from "../../reducer";

type PropsType = {
  setGenre: (genre: string) => void;
};

const PageMain: React.FC<PropsType> = ({ setGenre }) => {
  const location = useLocation();
  const genreName = new URLSearchParams(location.search).get("genre");

  useEffect(() => {
    if (genreName) {
      setGenre(getKeyByValue(GENRES_RUS_TO_ENG, genreName));
    } else {
      setGenre(ALL_GENRES);
    }
  });

  return (
    <React.Fragment>
      <MovieCard />
      <div className="page-content">
        <Catalog pageName={PAGE_NAME[0]} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGenre: (genre: string) => dispatch(ActionCreator.setGenre(genre)),
});

export { PageMain };
export default connect(null, mapDispatchToProps)(PageMain);
