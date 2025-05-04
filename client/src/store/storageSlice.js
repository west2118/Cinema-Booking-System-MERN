import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: localStorage.getItem("userId") || "",
  refreshToken: localStorage.getItem("refreshToken") || "",
  accessToken: localStorage.getItem("accessToken") || "",
};

const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      const { userId, refreshToken, accessToken } = action.payload;

      state.userId = userId;
      localStorage.setItem("userId", userId);

      state.refreshToken = refreshToken;
      localStorage.setItem("refreshToken", refreshToken);

      state.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    authLogout: (state) => {
      state.userId = null;
      state.refreshToken = null;
      state.accessToken = null;
      localStorage.removeItem("userId");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    },
  },
});

export const { authLogin, authLogout } = storageSlice.actions;

export default storageSlice.reducer;
