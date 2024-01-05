import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularVideos: [],
  pageToken: null,
  pageCount: 1,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addPopularVideos: (state, action) => {
      action.payload.map((video) => state.popularVideos.push(video));
    },
    addPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
    increasePageCount: (state) => {
      state.pageCount++;
    },
  },
});

export const { addPopularVideos, addPageToken, increasePageCount } =
  videoSlice.actions;

export default videoSlice.reducer;
