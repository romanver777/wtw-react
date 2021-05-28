import React from "react";

import GenresList from "../genres-list/genres-list";
import MoviesList from "../movies-list/movies-list";
import withShowMore from "../../hocs/withShowMore";
import { PAGE_NAME } from "../../helpers/const";

interface PropsType {
  pageName: string;
}

const MoviesListWithShowMore = withShowMore(MoviesList);

const Catalog: React.FC<PropsType> = ({ pageName }) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {pageName === PAGE_NAME[0] ? <GenresList /> : null}
      <MoviesListWithShowMore pageName={pageName} />
    </section>
  );
};

export default Catalog;
