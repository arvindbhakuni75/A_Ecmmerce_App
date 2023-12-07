import { configureStore } from "@reduxjs/toolkit";
import addToCardSlice from "./addToCardSlice";

const store = configureStore({
    reducer: {
        addToCardSlice: addToCardSlice,
    },
})


export default store;