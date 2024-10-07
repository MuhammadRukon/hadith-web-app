import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bookmarks: [],
};
const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setBookmarks: (state, { payload }) => {
      state.bookmarks = [...payload];
    },
    addBookmark: (state, { payload }) => {
      state.bookmarks = [...state.bookmarks, payload];
    },
    deleteBookmark: (state, { payload }) => {
      const filter = state.bookmarks.filter((id) => id !== payload);
      state.bookmarks = filter;
      console.log(state.bookmarks, "state.bookmarks");
    },
  },
});

export const { setBookmarks, addBookmark, deleteBookmark } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
