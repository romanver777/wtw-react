import React from "react";
import { useState } from "react";

import { genres } from "../../helpers/const";

const GenresList: React.FC = () => {
  const [activeLink, setActiveLink] = useState(genres[0]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, ind) => {
        return (
          <li
            className={
              activeLink === genre
                ? "catalog__genres-item catalog__genres-item--active"
                : "catalog__genres-item"
            }
            key={ind}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={() => setActiveLink(genre)}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default GenresList;
