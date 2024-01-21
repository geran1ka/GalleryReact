import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_KEY, API_URL } from "../../api/const";

export const fetchPhotos = createAsyncThunk(
  "fetch/fetchPhotos",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().token.token;
      let page = getState().photos.page;
      console.log("page: ", page);
      const response = await fetch(
        `${API_URL}/photos?per_page=30&${page && `page=${page}`}`,
        token
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          : {
              headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
              },
            },
      );

      if (!response.ok) {
        return rejectWithValue({
          status: response.status,
          error: "Не удалось загрузить фотографии.",
        });
      }
      page++;

      const photos = await response.json();
      return { photos, page };
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  photos: [],
  loading: false,
  error: null,
  page: 1,
  like: "",
  status: "",
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
        state.status = "";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.photos = [...state.photos, ...action.payload.photos];
        state.loading = false;
        state.error = null;
        state.page = action.payload.page;
        state.status = "";
        // state.like = action.payload.like
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        console.log("action: ", action);
        state.loading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
      });
  },
});

export default photosSlice.reducer;
