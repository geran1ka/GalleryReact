export const tokenMiddleware = (store) => (next) => (action) => {
  console.log(action.type);

  next(action);
};
