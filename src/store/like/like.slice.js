import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likeCount: 0,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setLikePhoto: (state, action) => {
      console.log("action: ", action);
      state.likeCount = action.payload;
    },
    likedPhoto: (state) => {
      state.likeCount += 1;
    },
    dislikedPhoto: (state) => {
      state.likeCount -= 1;
    },
  },
});

export default likeSlice.reducer;
export const { likedPhoto, dislikedPhoto, setLikePhoto } = likeSlice.actions;
