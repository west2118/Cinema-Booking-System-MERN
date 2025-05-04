import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import theaterReducer from "./theaterSlice";
import screenReducer from "./screenSlice";
import storageReducer from "./storageSlice";
import showtimeReducer from "./showtimeSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    theater: theaterReducer,
    screen: screenReducer,
    storage: storageReducer,
    showtime: showtimeReducer,
  },
});

export default store;
