import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Prasad" },
  { id: 1, name: "Sradhanjali" },
  { id: 2, name: "Pratyush" },
  { id: 3, name: "Sameer" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUser = (state) => state.users;
export default userSlice.reducer;
