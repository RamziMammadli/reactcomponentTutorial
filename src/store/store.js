import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./reducer/getSlice";
import postSlice from "./reducer/postSlice";

export const store = configureStore({
    reducer: {
        getSlice: getSlice,
        postSlice: postSlice
    }
})