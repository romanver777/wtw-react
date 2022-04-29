import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";
import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";
import SignIn from "../sign-in/sign-in";
import ErrorPage from "../error-page/error-page";

interface StateProps {
  isLoading: boolean;
  isInitError: boolean;
}

type PropsType = StateProps;

const App = (props: PropsType): JSX.Element => {
  const { isLoading, isInitError } = props;

  if (isInitError) return <ErrorPage text="Что-то пошло не так." />;
  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={APP_ROUTE.ROOT} component={PageMain} />
        <Route path={APP_ROUTE.FILM_ID} component={PageMovie} />
        <Route path={APP_ROUTE.LOGIN} component={SignIn} />
        <Route path={APP_ROUTE.ERROR} component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateProps) => ({
  isLoading: state.isLoading,
  isInitError: state.isInitError,
});

export { App };
export default connect(mapStateToProps)(App);
