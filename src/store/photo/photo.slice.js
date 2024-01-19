import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../api/const";

const fetchPhoto = createAsyncThunk(
  `fetch/fetchPhoto`,
  async (photoId, { getState }) => {
    const token = getState().token.token;

    const response = await fetch(`${API_URL}/photos/${photoId}`, {
      headers: {
        Autorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось загрузить фотографию");
    }

    return await response.json();
  },
);

const initialState = {
  photo: {},
  loading: false,
  error: null,
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhoto.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPhoto.fulfilled, (state, action) => {
        state.photo = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default photoSlice.reducer;
