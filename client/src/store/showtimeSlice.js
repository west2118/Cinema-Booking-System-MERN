import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showtimes: [],
};

const showtimeSlice = createSlice({
  name: "showtime",
  initialState,
  reducers: {
    toFetchShowtimes: (state, action) => {
      state.showtimes = action.payload;
    },
    toAddShowtime: (state, action) => {
      state.showtimes.push(action.payload);
    },
    toEditShowtime: (state, action) => {
      const { showtimeId, updatedData } = action.payload;

      const showtimeIndex = state.showtimes.findIndex(
        (showtime) => showtime._id === showtimeId
      );

      if (showtimeIndex !== -1) {
        state.showtimes[showtimeIndex] = updatedData;
      }
    },
    toDeleteShowtime: (state, action) => {
      state.showtimes = state.showtimes.filter(
        (showtime) => showtime._id !== action.payload
      );
    },
  },
});

export const {
  toFetchShowtimes,
  toAddShowtime,
  toEditShowtime,
  toDeleteShowtime,
} = showtimeSlice.actions;

export default showtimeSlice.reducer;
