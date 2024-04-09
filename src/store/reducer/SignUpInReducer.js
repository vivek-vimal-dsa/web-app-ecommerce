import { TOKEN } from "../action/ActionType";

const initialToken = { token: "", user: "" };

export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action?.payload?.token,
        user: action?.payload?.user,
      };
    default:
      return state;
  }
};
