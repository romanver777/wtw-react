import React from "react";
import { Link } from "react-router-dom";

import { APP_ROUTE } from "../../helpers/const";

const UserBlock: React.FC = () => {
  const isAuth = false;
  return (
    <div className="user-block">
      {isAuth ? (
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      ) : (
        <Link to={APP_ROUTE.LOGIN} className="user-block__link">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default UserBlock;
