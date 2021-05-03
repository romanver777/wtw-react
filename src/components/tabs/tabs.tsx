import React from "react";
import { useState } from "react";

import { FilmType } from "../../types/types";
import { tabsName } from "../../helpers/const";
import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";

const Tabs: React.FC<FilmType> = ({ film }) => {
  const [activeTab, setActiveTab] = useState(tabsName[0]);
  const switchTabs = (tab: string) => {
    switch (tab) {
      case tabsName[0]:
        return <Overview film={film} />;
        break;
      case tabsName[1]:
        return <Details />;
        break;
      case tabsName[2]:
        return <Reviews reviews={film.reviews} />;
        break;
      default:
        return <Overview film={film} />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsName.map((tab, ind) => {
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
