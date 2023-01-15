const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;

// ACTION CONSTANTS

const REQUEST_STARTED = "REQUEST_STARTED";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILED = "REQUEST_FAILED";

// CUSTOM MIDDLEWARE
// const customLogger = () => {
//   return (next) => {
//     return (action) => {
//       console.log("Action:", action);
//       next(action);
//     };
//   };
// };

// INITIAL STATE
const initalState = {
  posts: [],
  error: "",
  loading: false,
};

// ACTIONS
const fetchPostsRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: REQUEST_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: REQUEST_FAILED,
  };
};

// REDUCERS
const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        posts: ["HTML"],
      };
  }
};

const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsRequest);
      const data = await axios.get("https://jsonplaceholder.typcode.com/posts");
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      dispatch(fetchPostsFailed(error.message));
    }
  };
};

// STORE
const store = createStore(postReducer, applyMiddleware(thunk));

// SUBSCRIBE
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// DISPATCH
store.dispatch(fetchPostsRequest());
