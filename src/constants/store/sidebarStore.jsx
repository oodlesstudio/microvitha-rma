import { createStore, combineReducers } from "redux";
import sidebarReducer from "../reducers/sidebarReducer";
import themeChangeReducer from "../reducers/themeChangeReducer";

const rootReducer = combineReducers({
  sidebarReducer,
  themeChangeReducer,
});

const Store = createStore(rootReducer);

export default Store;
