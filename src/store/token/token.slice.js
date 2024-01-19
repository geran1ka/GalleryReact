import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.token;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

export default tokenSlice.reducer;
