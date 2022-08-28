import * as types from "./action.types";
import * as studentsApi from "../../api/studentsApi";
import { apiCallError, beginApiCall, endApiCall } from "./apiStatus.actions";
import { Dispatch } from "@reduxjs/toolkit";
import { FieldSet, Records } from "airtable";

export function getStudentDetailsSuccess(student: any) {
  return { type: types.GET_SINGLE_STUDENT, student };
}

export function getAllStudentsSuccess(classes: Records<FieldSet>) {
  return { type: types.GET_STUDENTS, classes };
}

export function getAllStudents() {
  return async function (dispatch: Dispatch) {
    dispatch(beginApiCall());
    try {
      const response = await studentsApi.getStudents();
      dispatch(getAllStudentsSuccess(response));
      dispatch(endApiCall());
    } catch {
      dispatch(endApiCall());
      dispatch(apiCallError());
      dispatch(getAllStudentsSuccess([]));
    }
  };
}

export function getStudentData(studentId: string) {
  return async function (dispatch: Dispatch) {
    try {
      const student = await studentsApi.getSingleStudent(studentId);
      dispatch(getStudentDetailsSuccess(student));
    } catch (error) {
      dispatch(apiCallError());
      getStudentDetailsSuccess(null);
    }
  };
}
