const { createStore } = require("redux");

// INITIAL STATE
const initalState = {
  posts: [],
};

// ACTIONS
const fetchPostsRequest = () => {
  return {
    type: "REQUEST_STARTED",
  };
};

const fetchPostsSuccess = () => {
  return {
    type: "REQUEST_SUCCESS",
  };
};

const fetchPostsFailed = () => {
  return {
    type: "REQUEST_FAILED",
  };
};

// REDUCERS
const postReducer = (state = initalState, action) => {};

// STORE
const store = createStore(postReducer);

// DISPATCH
