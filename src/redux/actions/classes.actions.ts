import * as types from "./action.types";
import { classT } from "../reducers/initialState.types";

export function getAllClassesSuccess(classes: Array<classT>) {
  return { type: types.GET_CLASSES, classes };
}

export function getSingleClassSuccess(singleClass: any) {
  return { type: types.GET_SINGLE_CLASS, singleClass };
}
