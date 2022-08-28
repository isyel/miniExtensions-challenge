import * as types from "../actions/action.types";
import initialState from "./initialState";
import { studentT } from "./initialState.types";

type actionT = {
  type: string;
  students: Array<studentT>;
  student: studentT;
};

function studentReducer(state = initialState.students, action: actionT) {
  switch (action.type) {
    case types.GET_STUDENTS:
      return { ...state, students: action.students };
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
