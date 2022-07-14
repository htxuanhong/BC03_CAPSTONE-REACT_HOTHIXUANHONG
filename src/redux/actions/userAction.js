import { SET_USER_INFOR } from "../constants/userConstants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  };
};
