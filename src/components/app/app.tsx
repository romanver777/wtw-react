import React from "react";
import { Route, Switch } from "react-router-dom";

import { APP_ROUTE } from "../../helpers/const";
import { FilmsType } from "../../types/types";
import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";
import SignIn from "../sign-in/sign-in";

const App: React.FC<FilmsType> = ({ films }) => {
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

export default App;
