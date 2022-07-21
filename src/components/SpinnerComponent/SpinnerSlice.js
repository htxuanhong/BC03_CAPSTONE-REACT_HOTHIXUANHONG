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

export const { setSpinnerStarted, setSpinnerEnded } = spinnerSlice.actions;

export default spinnerSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { userService } from "../../services/userService";

// let initialState = {
//   user: null,
//   loading: false,
// };

// export const setUserLoginActionService = createAsyncThunk(
//   "/userSlice/login",
//   async (dataLogin) => {
//     let result = await userService.postDangNhap(dataLogin);

//     return result.data.content;
//   }
// );

// const userSlice = createSlice({
//   name: "userSlice",
//   initialState,

//   reducers: {
//     setUserLogin: (state, { payload }) => {
//       state.user = payload;
//     },
//   },

//   extraReducers: {
//     // pending
//     [setUserLoginActionService.pending]: (state, action) => {
//       state.loading = true;
//     },
//     // success
//     [setUserLoginActionService.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },

//     // fail
//     // [setUserLoginActionService.rejected]: (state, action) => {},
//   },
// });
// // export bỏ vào rootReducer
// export default userSlice.reducer;

// export const { setUserLogin } = userSlice.actions;
