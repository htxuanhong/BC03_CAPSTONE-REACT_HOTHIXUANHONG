import { localStorageService } from "../../services/localStorageService";
import { SET_USER_INFOR } from "../constants/Constants";

let initailState = {
  userInfor: localStorageService.getUserInfor(),
};

export const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case SET_USER_INFOR: {
      state.userInfor = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
