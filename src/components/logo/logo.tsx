import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTE } from "../../helpers/const";

interface ClNameType {
  clName: string;
}

const Logo: React.FC<ClNameType> = ({ clName }) => {
  return (
    <div className="logo">
      <Link to={APP_ROUTE.ROOT} className={`logo__link ${clName}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
