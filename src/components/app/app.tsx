import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { APP_ROUTE } from "../../helpers/const";
import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";
import SignIn from "../sign-in/sign-in";
import { MovieType } from "../../types/types";

interface StateProps {
  films: MovieType[];
  awaitFilm: MovieType;
}

type PropsType = StateProps;

const App = (props: PropsType): JSX.Element => {
  const { films, awaitFilm } = props;
  console.log("af", awaitFilm);
  return (
    <React.Fragment>
      {!films.length && <div>Loading...</div>}
      {films && !!films.length && (
        <Switch>
          <Route exact path={APP_ROUTE.ROOT} component={PageMain} />
          <Route path={APP_ROUTE.FILM_ID} component={PageMovie} />
          <Route path={APP_ROUTE.LOGIN} component={SignIn} />
        </Switch>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: StateProps) => ({
  films: state.films,
  awaitFilm: state.awaitFilm,
});

export { App };
export default connect(mapStateToProps)(App);
