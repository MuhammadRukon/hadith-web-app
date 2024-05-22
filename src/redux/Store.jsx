import { configureStore } from "@reduxjs/toolkit";
import languageSlide from "./features/languageSlice.js"
const store = configureStore({
    reducer:{
        language: languageSlide
    }
})

export default store;