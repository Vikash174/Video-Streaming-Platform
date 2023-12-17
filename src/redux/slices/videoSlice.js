import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularVideos: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { addPopularVideos } = videoSlice.actions;

export default videoSlice.reducer;
