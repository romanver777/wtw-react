import React from "react";

import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import withShowMore from "../../hocs/withShowMore";

const MoviesListWithShowMore = withShowMore(MoviesList);

const Catalog = (): React.FC | JSX.Element => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <MoviesListWithShowMore />
    </section>
  );
};

export default Catalog;
