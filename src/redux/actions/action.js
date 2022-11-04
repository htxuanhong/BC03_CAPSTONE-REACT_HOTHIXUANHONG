import { movieService } from "../../services/movieService";
import {
  Get_MOVIE_BY_THEATER,
  SET_HIDE_SPINNER,
  SET_SHOW_SPINNER,
  SET_USER_INFOR,
} from "../constants/Constants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  };
};

export const setShowSpinner = () => {
  return { type: SET_SHOW_SPINNER };
};

export const setHideSpinner = () => {
  return { type: SET_HIDE_SPINNER };
};

export const getMovieByTheaterSer = () => {
  return (dispatch) => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        dispatch({
          type: Get_MOVIE_BY_THEATER,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
