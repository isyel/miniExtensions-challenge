import { combineReducers } from "redux";
import classes from "./classesReducer";
import loading from "./loadingReducer";
import students from "./studentsReducer";

const rootReducer = combineReducers({
  classes,
  loading,
  students,
});

export default rootReducer;
