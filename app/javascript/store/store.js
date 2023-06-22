import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetings/greeting";

const store = configureStore({
    reducer: {
        greeting: greetingSlice,
    }
})

export default store;