import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name: 'movies',
    initialState: { list: [] },
    reducers: {
        addMovie: (state, action) => {
            state.list.push(action.payload);
        },
        removeMovie: (state, action) => {
            state.list = state.list.filter(movie => movie.id !== action.payload);
        },
        clearListMovie: (state) => {
            state.list = [];
        },
    },
})

export const { addMovie, removeMovie, clearListMovie } = moviesSlice.actions;
export default moviesSlice.reducer