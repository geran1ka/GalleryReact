import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_KEY, API_URL } from "../../api/const";

export const fetchFavoritePhotosList = createAsyncThunk(
  "fetch/fetchFavoritePhotosList",
  async (username, { getState, rejectWithValue }) => {
    try {
      const token = getState().token.token;

      if (!token) return;
      const response = await fetch(
        `${API_URL}/users/${username}/likes?client_id=${ACCESS_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        return rejectWithValue({
          status: response.status,
          error: "Не удалось загрузить фотографии.",
        });
      }

      const favoritePhotosList = response.json();
      console.log("favoritePhotosList: ", favoritePhotosList);

      return favoritePhotosList;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  favoritePhotosList: [],
  loading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritePhotosList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoritePhotosList.fulfilled, (state, action) => {
        state.favoritePhotosList = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavoritePhotosList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default favoriteSlice.reducer;
