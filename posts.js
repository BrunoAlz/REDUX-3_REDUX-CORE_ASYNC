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

// STORE

// DISPATCH
