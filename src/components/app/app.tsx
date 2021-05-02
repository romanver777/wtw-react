import React from "react";

import { FilmsType } from "../../types/types";
// import PageMain from "../page-main/page-main";
import PageMovie from "../page-movie/page-movie";

const App: React.FC<FilmsType> = ({ films }) => {
  // return <PageMain films={films} />;
  return <PageMovie films={films} film={films[0]} />;
};

export default App;
