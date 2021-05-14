import React from "react";

type Props = {
  onHandleClick: () => void;
};

const ShowMore = (props: Props): JSX.Element => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => props.onHandleClick()}
      >
        Больше
      </button>
    </div>
  );
};

export default ShowMore;
