// import movies from "./mocks/films.json";
import { MovieType, ReviewType, StaffType } from "./types/types";
import { ALL_GENRES } from "./helpers/const";
import { getAllGenres, getRandomNumber } from "./helpers/helpers";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { AxiosInstance } from "axios";

interface InitStateInterface {
  films: null | MovieType[];
  awaitFilm: null | MovieType;
  currentFilm: null | MovieType;
  activeGenre: string;
  genresList: null | string[];
  tk: null | string;
  reviews: null | ReviewType[];
  staff: null | StaffType[];
}

interface ActionCreatorInterface {
  type: string;
  payload:
    | string
    | string[]
    | MovieType[]
    | MovieType
    | ReviewType[]
    | StaffType[];
}

const InitialState: InitStateInterface = {
  films: null,
  awaitFilm: null,
  currentFilm: null,
  activeGenre: ALL_GENRES,
  genresList: null,
  tk: null,
  reviews: null,
  staff: null,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_GENRES_LIST: `SET_GENRES_LIST`,
  SET_TK: `SET_TK`,
  SET_FILMS: `SET_FILMS`,
  SET_AWAIT_FILM: `SET_AWAIT_FILM`,
  SET_CURRENT_FILM: `SET_CURRENT_FILM`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_STAFF: `SET_STAFF`,
};

const ActionCreator = {
  setGenre: (genre: string): ActionCreatorInterface => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),
  setGenresList: (list: string[]): ActionCreatorInterface => ({
    type: ActionType.SET_GENRES_LIST,
    payload: list,
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
  setCurrentFilm: (film: MovieType): ActionCreatorInterface => ({
    type: ActionType.SET_CURRENT_FILM,
    payload: film,
  }),
  setReviews: (reviews: ReviewType[]): ActionCreatorInterface => ({
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  }),
  setStaff: (staff: StaffType[]): ActionCreatorInterface => ({
    type: ActionType.SET_STAFF,
    payload: staff,
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
    case ActionType.SET_GENRES_LIST:
      return {
        ...state,
        genresList: action.payload as string[],
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
    case ActionType.SET_CURRENT_FILM:
      return {
        ...state,
        currentFilm: action.payload as MovieType,
      };
    case ActionType.SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload as ReviewType[],
      };
    case ActionType.SET_STAFF:
      return {
        ...state,
        staff: action.payload as StaffType[],
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
        .then((response) => {
          dispatch(ActionCreator.setFilms(response.data.films));
          dispatch(
            ActionCreator.setGenresList(getAllGenres(response.data.films))
          );
        })
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
  loadReviews:
    (
      id: number
    ): ThunkAction<
      TPromise, // thunk return type
      TAppState, // state type
      any, // extra argument, (not used)
      ActionCreatorInterface // action type
    > =>
    (dispatch: TDispatch, getState: TGetState, api: TInstance): TPromise =>
      api.kp
        .get(`/v1/reviews?filmId=${id}&page=1`, {
          headers: {
            "X-API-KEY": getState().tk,
          },
        })
        .then((response) =>
          dispatch(ActionCreator.setReviews(response.data.reviews))
        )
        .catch((error) => console.log(error.toJSON())),
  loadStaff:
    (
      id: number
    ): ThunkAction<
      TPromise, // thunk return type
      TAppState, // state type
      any, // extra argument, (not used)
      ActionCreatorInterface // action type
    > =>
    (dispatch: TDispatch, getState: TGetState, api: TInstance): TPromise =>
      api.kp
        .get(`/v1/staff?filmId=${id}`, {
          headers: {
            "X-API-KEY": getState().tk,
          },
        })
        .then((response) => dispatch(ActionCreator.setStaff(response.data)))
        .catch((error) => console.log(error.toJSON())),
};

export { reducer, ActionCreator, Operation };
