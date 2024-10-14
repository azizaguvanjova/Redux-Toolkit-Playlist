import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movieSlice";
import songReducer from "./features/songSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songReducer,
  },
});
