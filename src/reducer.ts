import movies from "./mocks/films.json";
import { MovieType } from "./types/types";
import { ALL_GENRES } from "./helpers/const";

interface InitStateInterface {
  films: MovieType[];
  activeGenre: string;
}

interface ActionCreatorInterface {
  type: string;
  payload: string | MovieType[] | MovieType;
}

const InitialState: InitStateInterface = {
  films: [...movies],
  activeGenre: ALL_GENRES,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
};

const ActionCreator = {
  setGenre: (genre: string): ActionCreatorInterface => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
};

const reducer = (
  state = InitialState,
  action: ActionCreatorInterface
): InitStateInterface => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        activeGenre: action.payload as string,
      };
    default:
      return state;
  }
};

const Operation = {};

export { reducer, ActionCreator, Operation };
