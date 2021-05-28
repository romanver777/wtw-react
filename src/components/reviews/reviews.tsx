import React from "react";

import { ReviewType } from "../../types/types";
import { convertDateTime } from "../../helpers/helpers";

interface PropsType {
  reviews: ReviewType[];
}

const Reviews: React.FC<PropsType> = ({ reviews }) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((item) => {
          return (
            <div className="review" key={item.reviewId}>
              <blockquote className="review__quote">
                <p className="review__text">{item.reviewDescription}</p>

                <footer className="review__details">
                  <cite className="review__author">{item.reviewAutor}</cite>
                  <time className="review__date" dateTime={item.reviewData}>
                    {convertDateTime(item.reviewData)}
                  </time>
                </footer>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
