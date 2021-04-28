import React, { ReactElement } from "react";
import Main from "../main/main";

export type PropType = {
  films: string;
};

const App: React.FC<PropType> = ({ films }: PropType): ReactElement => {
  return <Main films={films} />;
};

export default App;
