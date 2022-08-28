import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStoreState(
  initialState: any
): EnhancedStore<any> {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [thunk, reduxImmutableStateInvariant()],
    devTools: process.env.NODE_ENV !== "production",
  });
}
