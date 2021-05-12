import movies from "./mocks/films.json";
import { FilmsType } from "./types/types";
import { GENRES } from "./helpers/const";

interface InitStateType {
  films: FilmsType;
  genre: string;
}

interface ActionType {
  SET_GENRE: string;
  GET_FILMS_BY_GENRE: string;
}

const InitialState: InitStateType = {
  films: [...movies],
  genre: GENRES[0],
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const ActionCreator = {
  setGenre: (genre: string) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  getFIlmsByGenre: (genre, films) => ({
    type: ActionCreator.GET_FILMS_BY_GENRE,
    payload: [],
  }),
};

const reducer = (state = InitialState, action): InitStateType => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
};

const Operation = {};

export { reducer, ActionCreator, Operation };
