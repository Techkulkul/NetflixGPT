import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isShowGPTSearchPage: false,
    searchMovie: null,
    searchMovieResult: null,
  },
  reducers: {
    toggleIsShowGPTSearchPage: (state) => {
      state.isShowGPTSearchPage = !state.isShowGPTSearchPage;
    },
    addSearchMovieResult: (state, action) => {
      const { search, value } = action.payload;
      state.searchMovie = search;
      state.searchMovieResult = value;
    },
    clearSearch: (state) => {
      state.searchMovie = null;
      state.searchMovieResult = null;
    },
  },
});

export const { toggleIsShowGPTSearchPage, addSearchMovieResult, clearSearch } =
  gptSlice.actions;
export default gptSlice.reducer;
