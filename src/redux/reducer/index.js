import {
  GET_ALL_MOVIES,
  GET_MOVIE_BY_SEARCH,
  FILTER_BY_STARS,
} from "../actions/index";

const initialState = {
  allMovies: {},
  movies: {},
  notFound: false,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        allMovies: payload,
        movies: payload,
        notFound: false,
      };
    case GET_MOVIE_BY_SEARCH:
      if (payload.results.length) {
        return {
          ...state,
          movies: payload,
          notFound: false,
        };
      } else {
        return {
          ...state,
          notFound: true,
        };
      }
    case FILTER_BY_STARS:
      let newMovies = state.allMovies.results.filter(
        (e) => Math.ceil(e.vote_average / 2) === payload
      );
      return {
        ...state,
        movies: { results: newMovies },
        notFound: newMovies.length ? false : true,
      };

    default:
      return state;
  }
};

export default rootReducer;
