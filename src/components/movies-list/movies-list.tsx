import React from "react";

import { MovieType } from "../../types/types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMore from "../show-more/show-more";
import WithVideoPlayer from "../../hocs/withVideoPlayer";

interface Props {
  films: MovieType[];
  handleClick: () => void;
  isShowMore: boolean;
}

const CardWithVideoPlayer = WithVideoPlayer(SmallMovieCard);

const MoviesList = (props: Props): JSX.Element => {
  const { films, handleClick, isShowMore } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {!films.length && <p>Не найдено</p>}
        {films.map((item) => (
          <CardWithVideoPlayer film={item} key={item.filmId} />
        ))}
      </div>
      {isShowMore && <ShowMore onHandleClick={() => handleClick()} />}
    </React.Fragment>
  );
};

export default MoviesList;
