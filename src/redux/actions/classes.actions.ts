import * as types from "./action.types";
import { FieldSet } from "airtable";

export function getAllClassesSuccess(classes: Array<FieldSet>) {
  return { type: types.GET_CLASSES, classes };
}

export function getSingleClassSuccess(singleClass: any) {
  return { type: types.GET_SINGLE_CLASS, singleClass };
}
