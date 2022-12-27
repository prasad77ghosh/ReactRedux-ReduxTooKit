import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learn AI and ML",
    content:
      "AI and ML is the most Advance technology available the world thak Scanner inpu t= new Scanner(System.in)",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Webcevelopment",
    content:
      "jfdsk kjsdk kj sjf lkjsd kjf klsdjf kljsdklfjkdsjfklj sdjfkljsd fkjsd fjkdsljf jds lksdfj kjfdsk",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const blogSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        };
      },
    },
    addReactions(state, action){
      const {postId, reaction} = action.payload;
      const exstingPost = state.find(post => post.id === postId);
      if(exstingPost){
        exstingPost.reactions[reaction]++;
      }
    }
  },
});

export const selsectAllPost = (state) => state.posts;
export const { addPost, addReactions } = blogSlice.actions;
export default blogSlice.reducer;
