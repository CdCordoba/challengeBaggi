import { GET_ALL_MOVIES } from "../actions/index";

const initialState = {
  allMovies: {},
  movies: {},
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        allMovies: payload,
        movies: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
