import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{  
        showgptsearch:false
    },
    reducers:{
        toggleGptSerachView:(state)=>{
            state.showgptsearch=!state.showgptsearch;
        }
    }
})

export const {toggleGptSerachView}=gptSlice.actions;
export default gptSlice.reducer;