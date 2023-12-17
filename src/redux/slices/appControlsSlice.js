import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: true,
};

const appControlsSlice = createSlice({
  name: "appControls",
  initialState,
  reducers: {
    setShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
  },
});

export const { setShowSidebar } = appControlsSlice.actions;

export default appControlsSlice.reducer;
