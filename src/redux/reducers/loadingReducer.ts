import * as types from "../actions/action.types";
import initialState from "./initialState";

function loadingReducer(state = initialState.loading, action) {
  switch (action.type) {
    case types.BEGIN_API_CALL:
      return { ...state, isLoading: true };
    case types.END_API_CALL:
      return { ...state, isLoading: false };
    case types.API_CALL_ERROR:
      return { ...state, loadingError: true };
    default:
      return state;
  }
}

export default loadingReducer;
