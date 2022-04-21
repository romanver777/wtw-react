/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router } from "react-router";
import history from "../../history";
import { reducer } from "../../reducer";

import PageMain from "./page-main";
import { ALL_GENRES } from "../../helpers/const";
import films from "../../mocks/films.json";

const initState = {
  films,
  awaitFilm: films[1],
  currentFilm: films[0],
  activeGenre: ALL_GENRES,
  genresList: ["Все жанры", "Комедия", "Фантастика"],
};
const store = createStore(reducer, initState);

describe("PageMain component", () => {
  const Trenderer = TestRenderer.create(
    <Provider store={store}>
      <Router history={history}>
        <PageMain />
      </Router>
    </Provider>
  );
  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });
});
