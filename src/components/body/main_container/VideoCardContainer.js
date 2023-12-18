import React from "react";
import useAAddPopularMoviesToStore from "../../../custom_hooks/useAddPopularMoviesToStore";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoCardContainer = () => {
  useAAddPopularMoviesToStore();

  const popularVideosList = useSelector((state) => state.video.popularVideos);

  return (
    <div className="flex flex-wrap bg-black text-white mt-10 items-center">
      {popularVideosList &&
        popularVideosList.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`} className="">
            <VideoCard video={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoCardContainer;
