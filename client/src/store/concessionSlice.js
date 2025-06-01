import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  concessions: [],
};

const concessionSlice = createSlice({
  name: "concession",
  initialState,
  reducers: {
    toFetchConcessions: (state, action) => {
      state.concessions = action.payload;
    },
    toAddConcession: (state, action) => {
      state.concessions.push(action.payload);
    },
    toEditConcession: (state, action) => {
      const { concessionId, updatedData } = action.payload;

      const concessionIndex = state.concessions.findIndex(
        (concession) => concession._id === concessionId
      );

      if (concessionIndex !== -1) {
        state.concessions[concessionIndex] = updatedData;
      }
    },
    toDeleteConcession: (state, action) => {
      state.concessions = state.concessions.filter(
        (concession) => concession._id !== action.payload
      );
    },
  },
});

export const {
  toFetchConcessions,
  toAddConcession,
  toEditConcession,
  toDeleteConcession,
} = concessionSlice.actions;

export default concessionSlice.reducer;
