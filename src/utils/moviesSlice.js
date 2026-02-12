import { createSlice, createSelector } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null, 
        addTrailerVideo:null, 
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.addTrailerVideo=action.payload;
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo}=moviesSlice.actions;

// Memoized selector to prevent unnecessary rerenders
export const selectNowPlayingMovies = createSelector(
    (state) => state.movies.nowPlayingMovies,
    (nowPlayingMovies) => nowPlayingMovies || []
);

export default moviesSlice.reducer;