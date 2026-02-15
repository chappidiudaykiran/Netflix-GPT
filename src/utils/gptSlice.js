import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{  
        showgptsearch:false,
        Movienames:null,
        MovieResults:null
    },
    reducers:{
        toggleGptSerachView:(state)=>{
            state.showgptsearch=!state.showgptsearch;
        },
        addGptMovieResults:(state,action)=>{
            const{Movienames,MovieResults}=action.payload;
            state.Movienames=Movienames;
            state.MovieResults=MovieResults;
            
        }
    }
})

export const {toggleGptSerachView,addGptMovieResults}=gptSlice.actions;
export default gptSlice.reducer;