import { createStore } from "redux";
import { rootReducer } from "./reducer";

export const globalStore = createStore(rootReducer);
