import React, { ReactElement } from "react";

import { PropType } from "../app/app";

import MovieCard from "../movie-card/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

const Main: React.FC<PropType> = ({ films }: PropType): ReactElement => {
  console.log("films-----", films);

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

export default Main;
