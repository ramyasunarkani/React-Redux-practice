import { createSlice } from "@reduxjs/toolkit";

const initialCounterState={counter:0,showCounter:true}

const countSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter+=action.payload;
        },
        toggle(state) {
      state.showCounter = !state.showCounter;
       }

    }
})
 export const counterActions=countSlice.actions;


export default countSlice.reducer;
