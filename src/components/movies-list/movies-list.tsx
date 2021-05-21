import React from "react";

import { MovieType } from "../../types/types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMore from "../show-more/show-more";

interface Props {
  films: MovieType[];
  handleClick: () => void;
  isShowMore: boolean;
}

const MoviesList = (props: Props): JSX.Element => {
  const { films, handleClick, isShowMore } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((item) => (
          <SmallMovieCard film={item} key={item.filmId} />
        ))}
      </div>
      {isShowMore ? <ShowMore onHandleClick={() => handleClick()} /> : null}
    </React.Fragment>
  );
};

export default MoviesList;
