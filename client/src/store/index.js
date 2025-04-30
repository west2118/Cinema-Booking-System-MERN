import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import theaterReducer from "./theaterSlice";
import screenReducer from "./screenSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    theater: theaterReducer,
    screen: screenReducer,
  },
});

export default store;
