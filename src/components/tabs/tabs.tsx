import React, { useEffect } from "react";
import { useState } from "react";

import { MovieType, ReviewType, StaffType } from "../../types/types";
import { TABSNAME } from "../../helpers/const";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";

interface PropsType {
  film: MovieType;
  reviews: ReviewType[];
  staff: StaffType[];
  initTab: string;
}

const Tabs: React.FC<PropsType> = ({ film, reviews, staff, initTab }) => {
  const [activeTab, setActiveTab] = useState(initTab);
  const [prevFilm, setPrevFilm] = useState(film);
  const switchTabs = (tab: string) => {
    switch (tab) {
      case TABSNAME[0]:
        return <Overview film={film} staff={staff} />;
        break;
      case TABSNAME[1]:
        return <Details film={film} staff={staff} />;
        break;
      case TABSNAME[2]:
        return <Reviews reviews={reviews} />;
        break;
      default:
        return <Overview film={film} staff={staff} />;
    }
  };

  useEffect(() => {
    if (prevFilm != film) {
      setPrevFilm(film);
      setActiveTab(initTab);
    }
  });

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TABSNAME.map((tab, ind) => {
            return (
              <li
                className={
                  activeTab === tab
                    ? "movie-nav__item movie-nav__item--active"
                    : "movie-nav__item"
                }
                key={ind}
              >
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {switchTabs(activeTab)}
    </div>
  );
};

export default Tabs;
