import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counterSlice";
import blogReducer from "../Features/Blog/blogSlice";
import userSlice from "../Features/users/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: blogReducer,
    users: userSlice,
  },
});

export default store;
