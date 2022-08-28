import * as types from "./action.types";
import * as classesApi from "../../api/classesApi";
import { apiCallError, beginApiCall, endApiCall } from "./apiStatus.actions";
import { Dispatch } from "@reduxjs/toolkit";
import { FieldSet, Records } from "airtable";

export function getAllClassesSuccess(classes: Records<FieldSet>) {
  return { type: types.GET_CLASSES, classes };
}

export function getSingleClassSuccess(singleClass: any) {
  return { type: types.GET_SINGLE_CLASS, singleClass };
}

export function getAllClasses() {
  return async function (dispatch: Dispatch) {
    dispatch(beginApiCall());
    try {
      const response = await classesApi.getClasses();
      dispatch(getAllClassesSuccess(response));
      dispatch(endApiCall());
    } catch {
      dispatch(endApiCall());
      dispatch(apiCallError());
      dispatch(getAllClassesSuccess([]));
    }
  };
}

export function getSingleClass(classId: string) {
  return async function (dispatch: Dispatch) {
    dispatch(beginApiCall());
    try {
      const singleClass = await classesApi.getSingleClass(classId);
      dispatch(getSingleClassSuccess(singleClass));
      dispatch(endApiCall());
    } catch (error) {
      dispatch(endApiCall());
      dispatch(apiCallError());
      getSingleClassSuccess(null);
    }
  };
}
