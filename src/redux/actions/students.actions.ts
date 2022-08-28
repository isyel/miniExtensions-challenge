import * as types from "./action.types";
import { studentT } from "../reducers/initialState.types";

export function getStudentDetailsSuccess(student: studentT) {
  return { type: types.GET_SINGLE_STUDENT, student };
}

export function getAllStudentsSuccess(students: Array<studentT>) {
  return { type: types.GET_STUDENTS, students };
}
