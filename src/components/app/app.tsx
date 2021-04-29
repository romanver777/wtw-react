import React from "react";

import { FilmsType } from "../../types/types";
import PageMain from "../page-main/page-main";

const App: React.FC<FilmsType> = ({ films }) => {
  return <PageMain films={films} />;
};

export default App;
