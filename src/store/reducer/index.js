import { cartReducer } from "./CartReducer";
import { categoryReducer } from "./CategoryReducer";
import { tokenReducer } from "./SignUpInReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
  categoryReducer,
  tokenReducer,
});

export { rootReducer };
