import React from "react";

import { FilmsType } from "../../types/types";
import MovieCard from "../movie-card/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

const PageMain: React.FC<FilmsType> = ({ films }) => {
  return (
    <React.Fragment>
      <MovieCard film={films[0]} />
      <div className="page-content">
        <Catalog films={films} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default PageMain;
