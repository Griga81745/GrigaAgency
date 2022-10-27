

import {createSlice} from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "bolean",
    initialState: {
        bolean: false
    },
    reducers: {
        increment(state){
            state.bolean = state.bolean = true
        },
        decrement(state){
            state.bolean = state.bolean = false
        },
    }
})

export default popupSlice.reducer
export const {increment, decrement} = popupSlice.actions