import { configureStore } from "@reduxjs/toolkit";
import appControlsReducer from "../slices/appControlsSlice";
import videoReducer from "../slices/videoSlice";

export const store = configureStore({
  reducer: {
    appControls: appControlsReducer,
    video: videoReducer,
  },
});
