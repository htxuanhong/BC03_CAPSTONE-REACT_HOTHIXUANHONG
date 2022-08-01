import { SET_USER_INFOR } from "../constants/Constants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  };
};
