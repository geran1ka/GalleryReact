import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("tokenGallery") || null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      console.log("action: ", action);
      state.token = action.token;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export default tokenSlice.reducer;
export const { updateToken, removeToken } = tokenSlice.actions;
