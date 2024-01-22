import { setToken } from "../../api/token";
import { updateToken } from "./token.slice";

export const tokenMiddleware = (store) => (next) => async (action) => {
  console.log("tokenMiddleware: ");

  // if (action.type === "token/updateToken") {
  //   updateToken(await action.payload);
  // }

  // if (action.type === "removeToken") {
  //   setToken("");
  // }

  next(action);
};
