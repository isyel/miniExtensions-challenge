const configureStoreState = () =>
  process.env.REACT_APP_NODE_ENV !== "production"
    ? require("./configureStore.dev")
    : require("./configureStore.prod");

export default configureStoreState;
