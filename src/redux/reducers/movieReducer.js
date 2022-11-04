import { Get_MOVIE_BY_THEATER } from "../constants/Constants";

const initialState = {
  movieListByTheater: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Get_MOVIE_BY_THEATER:
      state.movieListByTheater = payload;
      return { ...state };

    default:
      return state;
  }
};
