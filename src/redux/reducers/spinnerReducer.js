import { SET_HIDE_SPINNER, SET_SHOW_SPINNER } from "../constants/Constants";

let initialState = {
  isLoading: false,
};

export const spinnerReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_SHOW_SPINNER: {
      state.isLoading = true;
      return { ...state };
    }
    case SET_HIDE_SPINNER: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return state;
  }
};
