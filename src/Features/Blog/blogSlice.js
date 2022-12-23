import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learn AI and ML",
    content:
      "AI and ML is the most Advance technology available the world thajsdh hasjk Scanner inpu t= new Scanner(System.in)",
  },
  {
    id: "2",
    title: "Webcevelopment",
    content:
      "jfdsk kjsdk kj sjf lkjsd kjf klsdjf kljsdklfjkdsjfklj sdjfkljsd fkjsd fjkdsljf jds lkj fsjkjfskdjf jsdflj lksdfj kjfdsk",
  },
];

const blogSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selsectAllPost = (state) => state.posts;
export const { addPost } = blogSlice.actions;
export default blogSlice.reducer;
