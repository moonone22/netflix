import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./reduce/reduce";
import stateSlice2 from "./reduce/reduce2";


const store = configureStore({
    reducer:{
        state1:stateSlice.reducer,
        state2:stateSlice2.reducer,
    }
})

export default store