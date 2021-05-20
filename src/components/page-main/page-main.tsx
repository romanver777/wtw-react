import React from "react";

import MovieCard from "../movie-card/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

const PageMain = (): JSX.Element => {
  return (
    <React.Fragment>
      <MovieCard />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default PageMain;
