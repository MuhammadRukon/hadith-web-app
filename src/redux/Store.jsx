import { configureStore } from "@reduxjs/toolkit";
import languageSlide from "./features/languageSlice.js";
import bookSlice from "./features/bookSlice.js";
import bookmarkSlice from "./features/bookmarkSlice.js";
const store = configureStore({
  reducer: {
    language: languageSlide,
    books: bookSlice,
    bookmarks: bookmarkSlice,
  },
});

export default store;
