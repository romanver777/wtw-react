import React, { useState } from "react";
import { ReviewType } from "../../types/types";
import { convertDateTime } from "../../helpers/helpers";

type PropsType = {
  item: ReviewType;
};

const item: React.FC<PropsType> = ({ item }) => {
  const [isFullVisible, setFullVisible] = useState(false);

  const handleClick = () => {
    setFullVisible((prev) => !prev);
  };

  const getDescription = (item: string, isFull: boolean) => {
    if (isFull) return item;

    const arr = item.split(" ").slice(0, 100);
    arr.push("...");
    return arr.join(" ");
  };

  return (
    <div className="review" key={item.reviewId}>
      <blockquote className="review__quote">
        <p
          className="review__text"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {isFullVisible
            ? getDescription(item.reviewDescription, true)
            : getDescription(item.reviewDescription, false)}
        </p>
        <footer className="review__details">
          <cite className="review__author">{item.reviewAutor}</cite>
          <time className="review__date" dateTime={item.reviewData}>
            {convertDateTime(item.reviewData)}
          </time>
        </footer>
      </blockquote>
    </div>
  );
};

export default item;
