import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    token: "tokenReducer",
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat("tokenMiddleware"),
});
