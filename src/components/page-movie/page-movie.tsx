import React from "react";

import { MovieType } from "../../types/types";
import MovieCardFull from "../movie-card-full/movie-card-full";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

interface PageMovie {
  films: MovieType[];
  film: MovieType;
}

const PageMovie: React.FC<PageMovie> = ({ films, film }) => {
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

export default PageMovie;
