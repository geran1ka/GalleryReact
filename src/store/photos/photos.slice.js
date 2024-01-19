import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_KEY, API_URL } from "../../api/const";

export const fetchPhotos = createAsyncThunk(
  "fetch/fetchPhotos",
  async (_, { getState }) => {
    const token = getState().token.token;
    console.log("token: ", token);
    const response = await fetch(`${API_URL}/photos?per_page=10&`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось загрузить фотографии");
    }

    return await response.json();
  },
);

const initialState = {
  photos: [],
  loading: false,
  error: null,
  page: 1,
  like: "",
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.photos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        console.log("action: ", action);
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default photosSlice.reducer;
