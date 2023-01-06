const { createStore } = require("redux");

// CUSTOM MIDDLEWARE
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("Action:", action);
      next(action);
    };
  };
};

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
const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return {
        posts: ["HTML"],
      };
  }
};

// STORE
const store = createStore(postReducer);

// SUBSCRIBE
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// DISPATCH
store.dispatch(fetchPostsRequest());
