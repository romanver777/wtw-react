import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { APP_ROUTE } from "../../helpers/const";

interface ClNameType {
  clName: string;
}

const Logo: React.FC<ClNameType> = ({ clName }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleCLick = () => {
    pathname !== "/" ? history.go(-1) : history.go(0);
  };

  return (
    <div className="logo">
      <Link
        to={APP_ROUTE.ROOT}
        className={`logo__link ${clName}`}
        onClick={handleCLick}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
