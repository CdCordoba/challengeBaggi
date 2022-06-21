import axios from "axios";

export const GET_ALL_MOVIES = "GET_ALL_MOVIES";

export function getAllMovies() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=155c5f99d842382e13245f8fa338b732`
      );
      return dispatch({ type: GET_ALL_MOVIES, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
}
