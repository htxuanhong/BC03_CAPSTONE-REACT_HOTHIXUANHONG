import {
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
