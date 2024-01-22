import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUrlToken } from "../../api/token";
import { useNavigate } from "react-router-dom";

export const setToken = (token) => {
  const oldToken = localStorage.getItem("tokenGallery");
  console.log("oldToken: ", oldToken);
  console.log("token: ", token);

  if (oldToken === token) return;
  localStorage.setItem("tokenGallery", token);
};

export const fetchToken = createAsyncThunk(
  "fetch/fetchToken",
  async (_, { getState }) => {
    let token = getState().token.token;
    if (token) return;

    if (location.pathname.includes("/auth")) {
      const code = new URLSearchParams(location.search).get("code");
      const urlToken = getUrlToken(code);

      const response = await fetch(urlToken);

      if (!response.ok) {
        throw new Error("не удалось получить токен");
      }
      const data = await response.json();
      token = data.access_token;
      setToken(token);
      // useNavigate("/");
      return token;
    }
    return token;
  },
);

const initialState = {
  token: localStorage.getItem("tokenGallery") || null,
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error;
      });
  },
});

export default tokenSlice.reducer;
export const { updateToken, removeToken } = tokenSlice.actions;
