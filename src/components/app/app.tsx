import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";
import { MovieType } from "../../types/types";
import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";
import SignIn from "../sign-in/sign-in";

interface StateProps {
  films: MovieType[];
}

const App: React.FC<StateProps> = ({ films }) => {
  return (
    <Switch>
      <Route exact path={APP_ROUTE.ROOT}>
        <PageMain films={films} />
      </Route>
      <Route path={APP_ROUTE.FILM_ID} component={PageMovie} />
      <Route path={APP_ROUTE.LOGIN}>
        <SignIn />
      </Route>
    </Switch>
  );
};

const mapStateToProps = (state: StateProps) => ({
  films: state.films,
});

export { App };
export default connect(mapStateToProps)(App);
