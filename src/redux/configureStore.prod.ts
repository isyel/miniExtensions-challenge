import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStoreState(
  initialState: any
): EnhancedStore<any> {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [thunk],
  });
}
