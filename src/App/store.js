import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import blogReducer from "../Features/Blog/blogSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: blogReducer,
  },
});

export default store;
