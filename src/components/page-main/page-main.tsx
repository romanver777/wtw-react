import React from "react";

import { PAGE_NAME } from "../../helpers/const";
import MovieCard from "../movie-card/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

const PageMain = (): JSX.Element => {
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

export default PageMain;
