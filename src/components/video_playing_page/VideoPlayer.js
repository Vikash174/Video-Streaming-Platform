// components/VideoPlayer.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setShowSidebar } from "../../redux/slices/appControlsSlice";

const VideoPlayer = ({ videoUrl }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowSidebar(false));
  }, []);

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        width="700px"
        height="600px"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
