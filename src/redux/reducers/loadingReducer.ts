import * as types from "../actions/action.types";
import initialState from "./initialState";

type actionT = {
  type: string;
  isLoading: boolean;
  loadingError: boolean;
};

function loadingReducer(state = initialState.loading, action: actionT) {
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
