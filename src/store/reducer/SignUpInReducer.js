import { TOKEN } from "../action/ActionType";

const initialToken = { token: "", email: "" };

export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case TOKEN:
      window.localStorage.setItem('token',action?.payload?.token)
      window.localStorage.setItem('user',action?.payload?.user)
      return {
        ...state,
        token: window.localStorage.getItem('token'),
        user: window.localStorage.getItem('user'),
      };
    default:
      return state;
  }
};
