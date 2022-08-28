import * as types from "../actions/action.types";
import initialState from "./initialState";

type actionT = {
  type: string;
  students?: any;
  student?: any;
};

function studentReducer(state = initialState.students, action: actionT) {
  switch (action.type) {
    case types.GET_STUDENTS:
      return { ...state, classes: action.students };
    case types.GET_SINGLE_CLASS:
      return {
        ...state,
        singleStudent: action.student,
      };
    default:
      return state;
  }
}

export default studentReducer;
