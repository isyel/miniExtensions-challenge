import { combineReducers } from "redux";
import characters from "./classesReducer";
import loading from "./loadingReducer";
import episode from "./studentsReducer";

const rootReducer = combineReducers({
  characters,
  loading,
  episode,
});

export default rootReducer;
