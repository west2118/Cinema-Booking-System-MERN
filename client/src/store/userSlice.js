import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toFetchUsers: (state, action) => {
      state.users = action.payload;
    },
    toAddUser: (state, action) => {
      state.users.push(action.payload);
    },
    toEditUser: (state, action) => {
      const { userId, updatedData } = action.payload;

      const userIndex = state.users.findIndex((user) => user._id === userId);

      if (userIndex !== -1) {
        state.users[userIndex] = updatedData;
      }
    },
    toDeleteUser: (state, action) => {
      state.users = state.users.filter((user) => user._id !== action.payload);
    },
  },
});

export const { toFetchUsers, toAddUser, toEditUser, toDeleteUser } =
  userSlice.actions;

export default userSlice.reducer;
