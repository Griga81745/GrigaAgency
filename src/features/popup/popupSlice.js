import {createAction} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    cartOpen: false
}

export const TOGLE_BOLEAN = createAction("TOGLE_BOLEAN");

export default createReducer(initialState,{
    [TOGLE_BOLEAN]: function (state){
        state.cartOpen = true
        console.log(TOGLE_BOLEAN)
    }
})

console.log(TOGLE_BOLEAN)

