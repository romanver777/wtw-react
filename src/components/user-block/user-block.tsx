import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";

interface StateProps {
  isAuth: boolean;
}

type Props = StateProps;

const UserBlock = (props: Props): JSX.Element => {
  const { isAuth } = props;

  return (
    <div className="user-block">
      {isAuth ? (
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      ) : (
        <Link to={APP_ROUTE.LOGIN} className="user-block__link">
          Вход
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state: StateProps) => ({
  isAuth: state.isAuth,
});

export { UserBlock };
export default connect(mapStateToProps)(UserBlock);
