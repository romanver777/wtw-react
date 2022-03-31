import React, { useState, useEffect } from "react";

import Review from "../review/review";
import { ReviewType } from "../../types/types";
import ShowMore from "../show-more/show-more";

interface PropsType {
  reviews: ReviewType[];
}

const ITEMS_PER_PAGE = 4;
const visibleReviews = (
  items: ReviewType[],
  itemsPerPage: number,
  page: number
) => items.slice(0, itemsPerPage * page);

const Reviews: React.FC<PropsType> = ({ reviews }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(
    visibleReviews(reviews, ITEMS_PER_PAGE, page)
  );
  const [isShow, setIsShow] = useState(!!reviews.length);
  console.log(reviews);

  useEffect(() => {
    if (page + 1 > Math.ceil(reviews.length / ITEMS_PER_PAGE)) {
      setIsShow(false);
    }
    setItems(visibleReviews(reviews, ITEMS_PER_PAGE, page));
  }, [page]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {items.map((item) => (
            <Review item={item} key={item.reviewId} />
          ))}
        </div>
      </div>
      {isShow && <ShowMore onHandleClick={handleClick} modName="darkborder" />}
    </>
  );
};

export default Reviews;
