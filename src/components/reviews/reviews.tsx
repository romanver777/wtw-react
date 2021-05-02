import React from "react";

import { ReviewType } from "../../types/types";

interface ReviewsType {
  reviews: ReviewType[];
}

const Reviews: React.FC<ReviewsType> = ({ reviews }) => {
  console.log(reviews);
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
                  <time className="review__date" dateTime="2016-12-24">
                    December 24, 2016
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
