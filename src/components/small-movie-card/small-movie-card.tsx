import React from "react";
import { Link } from "react-router-dom";

import { APP_ROUTE } from "../../helpers/const";
import { MovieType, VideoDataType } from "../../types/types";
import VideoPlayer from "../video-player/video-player";

type PropsType = {
  tk: string;
  film: MovieType;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isOpen: boolean;
  data: VideoDataType | null;
};

const SmallMovieCard: React.FC<PropsType> = ({
  film,
  handleMouseEnter,
  handleMouseLeave,
  isOpen,
  data,
}) => {
  return (
    <React.Fragment>
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="small-movie-card__image">
          <img src={film.posterUrl} alt={film.nameRu} />
        </div>
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            to={`${APP_ROUTE.FILM}${film.filmId}`}
          >
            {film.nameRu}
          </Link>
        </h3>
        {isOpen && <VideoPlayer data={data} isFullScreen={false} />}
      </article>
    </React.Fragment>
  );
};

export default SmallMovieCard;
