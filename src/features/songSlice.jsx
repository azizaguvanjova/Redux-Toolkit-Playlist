import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "song",
    initialState: { list: [] },
    reducers: {
        addSong: (state, action) => {
            state.list.push(action.payload);
        },
        removeSong: (state, action) => {
            state.list = state.list.filter((song) => song.id !== action.payload);
        },
        clearListSong: (state) => {
            state.list = [];
        }
    }
})

export const { addSong, removeSong, clearListSong } = songSlice.actions;
export default songSlice.reducer