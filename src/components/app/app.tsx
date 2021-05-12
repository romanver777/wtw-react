import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";
import { FilmsType } from "../../types/types";
import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";
import SignIn from "../sign-in/sign-in";

interface StateProps {
  films: FilmsType;
  genre: string;
}

const App: React.FC<StateProps> = ({ films }) => {
  return (
    <Switch>
      <Route exact path={APP_ROUTE.ROOT}>
        <PageMain films={films} />
      </Route>
      <Route path={APP_ROUTE.FILM}>
        <PageMovie films={films} film={films[0]} />
      </Route>
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
