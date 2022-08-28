import configureStoreStateDev from "./configureStore.dev";
import configureStoreStateProd from "./configureStore.prod";
import initialState from "./reducers/initialState";

const configureStoreState = () =>
  process.env.REACT_APP_NODE_ENV !== "production"
    ? configureStoreStateDev(initialState)
    : configureStoreStateProd(initialState);

export default configureStoreState;
