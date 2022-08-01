import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
};

let spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setSpinnerStarted: (state, action) => {
      state.isLoading = true;
    },
    setSpinnerEnded: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { setSpinnerEnded, setSpinnerStarted } = spinnerSlice.actions;

export default spinnerSlice.reducer;
