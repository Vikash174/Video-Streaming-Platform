import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setShowSidebar } from "../../redux/slices/appControlsSlice";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";

const VideoPlayingPage = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-3/4">
        <VideoPlayer />
      </div>
      <div className="lg:w-1/4">
        <VideoInfo />
      </div>
    </div>
  );
};

export default VideoPlayingPage;
