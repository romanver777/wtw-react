import React, { useState } from "react";
import { connect, ConnectedComponent } from "react-redux";

import { MovieType } from "../types/types";
import { getMoviesByGenre } from "../helpers/helpers";
import { MOVIES_PER_MAIN_PAGE } from "../helpers/const";

interface StateProps {
  films: MovieType[];
  activeGenre: string;
}

interface WrapComponentProps {
  filteredFilms: MovieType[];
}

interface InjectedProps {
  films: MovieType[];
  handleClick: () => void;
  isShowMore: boolean;
}

const withShowMore = <P extends WrapComponentProps>(
  Component: React.ComponentType<P>
): React.FC<P & InjectedProps> => {
  const Hoc = (props: WrapComponentProps) => {
    const [prevFilmsList, setFilmsList] = useState(props.filteredFilms);
    const [clickCount, setClickCount] = useState(1);

    const handleClick = () => setClickCount(clickCount + 1);

    if (props.filteredFilms !== prevFilmsList) {
      setFilmsList(props.filteredFilms);

      if (clickCount > 1) setClickCount(1);
    }

    const visibleFilms = prevFilmsList.slice(
      0,
      clickCount * MOVIES_PER_MAIN_PAGE
    );

    return (
      <Component
        {...props}
        films={visibleFilms}
        handleClick={handleClick}
        isShowMore={prevFilmsList.length !== visibleFilms.length}
      />
    );
  };

  const mapStateToProps = (state: StateProps) => ({
    filteredFilms: getMoviesByGenre(state.films, state.activeGenre),
  });

  return connect(mapStateToProps)(Hoc);
};

export default withShowMore;
