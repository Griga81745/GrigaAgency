import {combineReducers, configureStore} from "@reduxjs/toolkit";
import popupSlice from "../features/popup/popupSlice";

const rootReducer = combineReducers({
    toolkit: popupSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
