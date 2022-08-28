import * as types from "../actions/action.types";
import initialState from "./initialState";
import { classT } from "./initialState.types";

type actionT = {
  type: string;
  classes: Array<classT>;
  class: classT;
};

function classesReducer(state = initialState.classes, action: actionT) {
  switch (action.type) {
    case types.GET_CLASSES:
      return { ...state, classes: action.classes };
    case types.GET_SINGLE_CLASS:
      return {
        ...state,
        singleStudent: action.class,
      };
    default:
      return state;
  }
}

export default classesReducer;
