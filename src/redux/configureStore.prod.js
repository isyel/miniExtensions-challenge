import { applyMiddleware, configureStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStoreState(initialState) {
  return configureStore(rootReducer, initialState, applyMiddleware(thunk));
}
