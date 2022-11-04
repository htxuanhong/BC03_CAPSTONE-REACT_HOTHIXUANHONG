import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./movieReducer";
import { spinnerReducer } from "./spinnerReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userReducer,
  spinnerReducer,
  movieReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
