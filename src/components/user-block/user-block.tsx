import React from "react";

const UserBLock: React.FC = () => {
  const isAuth = false;
  return (
    <div className="user-block">
      {isAuth ? (
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      ) : (
        <a href="sign-in.html" className="user-block__link">
          Sign in
        </a>
      )}
    </div>
  );
};

export default UserBLock;
