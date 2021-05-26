import React from "react";
import { Route, Switch } from "react-router-dom";

import { APP_ROUTE } from "../../helpers/const";
import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";
import SignIn from "../sign-in/sign-in";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={APP_ROUTE.ROOT} component={PageMain} />
      <Route path={APP_ROUTE.FILM_ID} component={PageMovie} />
      <Route path={APP_ROUTE.LOGIN}>
        <SignIn />
      </Route>
    </Switch>
  );
};

export default App;
