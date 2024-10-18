import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") || "en",
};
const languageSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    changeToBn: (state) => {
      state.lang = "bn";
    },
    changeToEn: (state) => {
      state.lang = "en";
    },
  },
});
export const { changeToBn, changeToEn } = languageSlice.actions;
export default languageSlice.reducer;
