import * as types from "./action.types";
import { FieldSet, Records } from "airtable";

export function getStudentDetailsSuccess(student: any) {
  return { type: types.GET_SINGLE_STUDENT, student };
}

export function getAllStudentsSuccess(classes: Records<FieldSet>) {
  return { type: types.GET_STUDENTS, classes };
}
