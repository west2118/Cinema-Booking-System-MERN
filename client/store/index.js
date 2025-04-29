import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import theaterReducer from "./theaterSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    theater: theaterReducer,
  },
});

export default store;
