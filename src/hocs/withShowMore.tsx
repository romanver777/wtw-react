import React, { useEffect, useState, ComponentType } from "react";
import { connect } from "react-redux";

import { MovieType } from "../types/types";
import { getMoviesByGenre } from "../helpers/helpers";
import { MOVIES_PER_MAIN_PAGE, PAGE_NAME } from "../helpers/const";

type StateProps = {
  films: MovieType[];
  currentFilm: MovieType;
  activeGenre: string;
};

type WrapComponentProps = {
  pageName: string;
};

type InjectedProps = {
  films: MovieType[];
  handleClick: () => void;
  isShowMore: boolean;
};
type MapProps = ReturnType<typeof mapStateToProps>;
type AllProps = MapProps & WrapComponentProps & InjectedProps;
type HocProps = MapProps & WrapComponentProps;

const mapStateToProps = (state: StateProps, ownProps: WrapComponentProps) => {
  if (ownProps.pageName === PAGE_NAME[0]) {
    return {
      filteredFilms: getMoviesByGenre(state.films, state.activeGenre),
    };
  }
  const filtered = getMoviesByGenre(state.films, state.currentFilm.genres);
  if (filtered.length) {
    return {
      filteredFilms: filtered.filter((el) => el !== state.currentFilm),
    };
  } else {
    return {
      filteredFilms: [],
    };
  }
};

const withShowMore = <T extends AllProps>(
  Component: ComponentType<T>
): ComponentType<Omit<T, keyof InjectedProps | "filteredFilms">> => {
  const Hoc = (props: HocProps) => {
    const [prevFilmsList, setFilmsList] = useState(props.filteredFilms);
    const [clickCount, setClickCount] = useState(1);

    const handleClick = () => setClickCount(clickCount + 1);

    useEffect(() => {
      if (props.filteredFilms !== prevFilmsList) {
        setFilmsList(props.filteredFilms);
        if (clickCount > 1) setClickCount(1);
      }
    });

    const visibleFilms = prevFilmsList.slice(
      0,
      clickCount * MOVIES_PER_MAIN_PAGE
    );

    return (
      <Component
        {...(props as T)}
        films={visibleFilms}
        handleClick={handleClick}
        isShowMore={prevFilmsList.length !== visibleFilms.length}
      />
    );
  };

  return connect(mapStateToProps)(Hoc);
};

export default withShowMore;
