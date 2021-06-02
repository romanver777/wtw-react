import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";
import { FilmType, MovieType, VideoType } from "../../types/types";
import { ActionCreator, Operation } from "../../reducer";
import VideoPlayer from "../video-player/video-player";

interface StateProps {
  hoveredFilm: MovieType;
  hoveredVideoData: VideoType;
}

interface DispatchProps {
  setHoveredFilm: (film: MovieType) => void;
  removeHoveredFilm: () => void;
  loadVideoData: (id: number) => void;
  removeHoveredVideoData: () => void;
}

type PropsType = FilmType & StateProps & DispatchProps;

const SmallMovieCard: React.FC<PropsType> = ({
  film,
  hoveredFilm,
  hoveredVideoData,
  setHoveredFilm,
  removeHoveredFilm,
  loadVideoData,
  removeHoveredVideoData,
}) => {
  let timer: NodeJS.Timeout;
  const handleMouseEnter = (film: MovieType) => {
    timer = setTimeout(() => {
      setHoveredFilm(film);
      loadVideoData(film.filmId);
    }, 1500);
  };
  const handleMouseLeave = () => {
    clearTimeout(timer);
    if (hoveredFilm) removeHoveredFilm();
    if (hoveredVideoData) removeHoveredVideoData();
  };
  const handleMouseMove = () => {
    if (!hoveredFilm && hoveredVideoData) removeHoveredVideoData();
  };

  const isActiveFilm = () => {
    if (hoveredFilm) return film.filmId === hoveredFilm.filmId;
    return false;
  };

  return (
    <React.Fragment>
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => handleMouseEnter(film)}
        onMouseLeave={() => handleMouseLeave()}
        onMouseMove={() => handleMouseMove()}
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
        {hoveredVideoData && isActiveFilm() && (
          <VideoPlayer data={hoveredVideoData} />
        )}
      </article>
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateProps) => ({
  hoveredFilm: state.hoveredFilm,
  hoveredVideoData: state.hoveredVideoData,
});

const MapDispatchToProps = (dispatch) => ({
  setHoveredFilm: (film: MovieType) =>
    dispatch(ActionCreator.setHoveredFilm(film)),
  loadVideoData: (filmId: number) => dispatch(Operation.loadVideoData(filmId)),
  removeHoveredFilm: () => dispatch(ActionCreator.removeHoveredFilm()),
  removeHoveredVideoData: () =>
    dispatch(ActionCreator.removeHoveredVideoData()),
});

export { SmallMovieCard };
export default connect(mapStateToProps, MapDispatchToProps)(SmallMovieCard);
