import { initialStateT } from "./initialState.types";

const initialState: initialStateT = {
  classes: {
    classes: [],
    singleClass: null,
  },
  students: {
    students: [],
    singleStudent: null,
  },
  loading: {
    isLoading: false,
    loadingError: false,
  },
};

export default initialState;
