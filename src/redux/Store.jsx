import { configureStore } from "@reduxjs/toolkit";
import languageSlide from "./features/languageSlice.js"
import bookSlice from "./features/bookSlice.js";
const store = configureStore({
    reducer:{
        language: languageSlide,
        books: bookSlice
    }
})

export default store;