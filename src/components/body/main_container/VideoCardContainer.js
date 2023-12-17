import React from "react";
import useAAddPopularMoviesToStore from "../../../custom_hooks/useAddPopularMoviesToStore";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoCardContainer = () => {
  useAAddPopularMoviesToStore();

  const popularVideosList = useSelector((state) => state.video.popularVideos);

  return (
    <div className="flex flex-wrap">
      {popularVideosList &&
        popularVideosList.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
    </div>
  );
};

export default VideoCardContainer;
