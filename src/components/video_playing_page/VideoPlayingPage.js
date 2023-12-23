import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setShowSidebar } from "../../redux/slices/appControlsSlice";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";
import CommentsContainer from "./CommentsContainer";

const VideoPlayingPage = () => {
  return (
    <div className="lg:flex h-[100vh] text-white">
      <div className="lg:w-3/4">
        <VideoPlayer />
      </div>
      <div className="lg:w-1/4">
        <VideoInfo />
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default VideoPlayingPage;
