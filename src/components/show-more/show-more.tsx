import React from "react";

type Props = {
  onHandleClick: () => void;
  modName?: string;
};

const ShowMore = (props: Props): JSX.Element => {
  let className: string;

  if (props.modName) {
    className = "catalog__button catalog__button-dark";
  } else {
    className = "catalog__button";
  }

  return (
    <div className="catalog__more">
      <button
        className={className}
        type="button"
        onClick={() => props.onHandleClick()}
      >
        Больше
      </button>
    </div>
  );
};

export default ShowMore;
