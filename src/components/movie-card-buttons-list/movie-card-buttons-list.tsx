import React from "react";

type ButtonsType = {
  children?: JSX.Element | JSX.Element[];
  handleClick: () => void;
};

const MovieCardButtons = ({ children }: ButtonsType): JSX.Element => {
  return <div className="movie-card__buttons">{children}</div>;
};

export default MovieCardButtons;
