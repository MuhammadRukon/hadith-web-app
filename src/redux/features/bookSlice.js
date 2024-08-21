import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = [...payload];
    },
    updateBooks: (state, { payload }) => {
      state.books = [...payload, ...state.books];
    },
  },
});
export const { setBooks, updateBooks } = bookSlice.actions;
export default bookSlice.reducer;
