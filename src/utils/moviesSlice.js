import { createSlice, createSelector } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null, 
        popularMovies:null,
        addTrailerVideo:null, 
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.addTrailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

// Memoized selector to prevent unnecessary rerenders
export const selectNowPlayingMovies = createSelector(
    (state) => state.movies.nowPlayingMovies,
    (nowPlayingMovies) => nowPlayingMovies || []
);

export default moviesSlice.reducer;