import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token/token.slice";
import authReducer from "./auth/auth.slice";
import photosReducer from "./photos/photos.slice";
import photoReducer from "./photo/photo.slice";
import { tokenMiddleware } from "./token/token.middleware";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
    photo: photoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
