import React, { useEffect } from "react";
import useAAddPopularMoviesToStore from "../../../custom_hooks/useAddPopularMoviesToStore";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardContainerShimmer from "./VideoCardContainerShimmer";
import { increasePageCount } from "../../../redux/slices/videoSlice";

const VideoCardContainer = () => {
  useAAddPopularMoviesToStore();

  const popularVideosList = useSelector((state) => state.video.popularVideos);
  const dispatch = useDispatch();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // load more videos
      console.log("should load more videos");
      dispatch(increasePageCount());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return popularVideosList === null ? (
    <VideoCardContainerShimmer />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 mt-6">
      {popularVideosList &&
        popularVideosList.map((video) => (
          <>
            <Link key={video.id} to={`/watch?v=${video.id}`} className="">
              <VideoCard video={video} />
            </Link>
          </>
        ))}
    </div>
  );
};

export default VideoCardContainer;
