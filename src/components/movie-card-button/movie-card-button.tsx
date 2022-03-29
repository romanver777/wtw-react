import React from "react";

type ButtonType = {
  xlink: string;
  title: string;
  className: string;
  onHandleClick: () => void;
};

const MovieCardButton = ({
  xlink,
  title,
  className,
  onHandleClick,
}: ButtonType): JSX.Element => {
  return (
    <button
      className={`btn ${className} movie-card__button`}
      type="button"
      onClick={() => onHandleClick()}
    >
      {xlink && (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={xlink}></use>
        </svg>
      )}
      <span>{title}</span>
    </button>
  );
};

export default MovieCardButton;
