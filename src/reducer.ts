// import movies from "./mocks/films.json";
import { MovieType } from "./types/types";
import { ALL_GENRES } from "./helpers/const";
import { getRandomNumber } from "./helpers/helpers";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { AxiosInstance } from "axios";

interface InitStateInterface {
  films: MovieType[];
  awaitFilm: MovieType;
  activeGenre: string;
  tk: null | string;
}

interface ActionCreatorInterface {
  type: string;
  payload: string | MovieType[] | MovieType;
}

const InitialState: InitStateInterface = {
  films: [] as MovieType[],
  awaitFilm: {} as MovieType,
  activeGenre: ALL_GENRES,
  tk: null,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_TK: `SET_TK`,
  SET_FILMS: `SET_FILMS`,
  SET_AWAIT_FILM: `SET_AWAIT_FILM`,
};

const ActionCreator = {
  setGenre: (genre: string): ActionCreatorInterface => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  setTk: (tk: string): ActionCreatorInterface => ({
    type: ActionType.SET_TK,
    payload: tk,
  }),
  setFilms: (films: MovieType[]): ActionCreatorInterface => ({
    type: ActionType.SET_FILMS,
    payload: films,
  }),
  setAwaitFilm: (awaitFilm: MovieType): ActionCreatorInterface => ({
    type: ActionType.SET_AWAIT_FILM,
    payload: awaitFilm,
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
    case ActionType.SET_TK:
      return {
        ...state,
        tk: action.payload as string,
      };
    case ActionType.SET_FILMS:
      return {
        ...state,
        films: action.payload as MovieType[],
      };
    case ActionType.SET_AWAIT_FILM:
      return {
        ...state,
        awaitFilm: action.payload as MovieType,
      };
    default:
      return state;
  }
};

type TAppState = ReturnType<typeof reducer>;
type TDispatch = ThunkDispatch<TAppState, void, AnyAction>;
type TGetState = () => TAppState;
type TInstance = {
  main: AxiosInstance;
  kp: AxiosInstance;
};
type TPromise = Promise<unknown>;

const Operation = {
  loadTk:
    (): ThunkAction<
      TPromise, // thunk return type
      TAppState, // state type
      any, // extra argument, (not used)
      ActionCreatorInterface // action type
    > =>
    (dispatch: TDispatch, getState: TGetState, api: TInstance): TPromise =>
      api.main
        .get("/06db2989-a3bc-4e63-a64e-9caf54eaa7d5")
        .then((response) => dispatch(ActionCreator.setTk(response.data)))
        .catch((error) => console.log(error)),
  loadFilms:
    (): ThunkAction<
      TPromise, // thunk return type
      TAppState, // state type
      any, // extra argument, (not used)
      ActionCreatorInterface // action type
    > =>
    (dispatch: TDispatch, getState: TGetState, api: TInstance): TPromise =>
      api.main
        .get("/e8bda8ad-de3b-4feb-ad2f-63e300f795b8")
        .then((response) =>
          dispatch(ActionCreator.setFilms(response.data.films))
        )
        .catch((error) => console.log(error)),
  loadAwaitFilm:
    (): ThunkAction<
      TPromise, // thunk return type
      TAppState, // state type
      any, // extra argument, (not used)
      ActionCreatorInterface // action type
    > =>
    (dispatch: TDispatch, getState: TGetState, api: TInstance): TPromise =>
      api.main
        .get("/d6462fb1-1290-45c0-8082-0db40626ef8e")
        .then((response) => {
          const awaitFilms = response.data.films;
          return dispatch(
            ActionCreator.setAwaitFilm(
              awaitFilms[getRandomNumber(0, awaitFilms.length - 1)]
            )
          );
        })
        .catch((error) => console.log(error)),
};

export { reducer, ActionCreator, Operation };
