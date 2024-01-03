import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import useFetchChannelData from "../../../custom_hooks/useFetchChannelData";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoCard = (props) => {
  const { video } = props;
  const videoThumbnailURL =
    video?.snippet?.thumbnails?.maxres?.url === undefined
      ? video?.snippet?.thumbnails?.standard?.url
      : video?.snippet?.thumbnails?.maxres?.url;
  const videoTitle =
    video.snippet.title.length > 60
      ? video.snippet.title.substring(0, 60) + "......"
      : video.snippet.title;

  const channelName = video.snippet.channelTitle;
  const videoViews = video.statistics.viewCount;
  const uploadTime = video.snippet.publishedAt;

  const [timeAgo, setTimeAgo] = useState("");

  const { isLoading, apiData } = useFetchChannelData(video.snippet.channelId);

  useEffect(() => {
    const date = new Date(uploadTime);
    const intervalId = setInterval(() => {
      const newTimeAgo = formatDistanceToNow(date, {
        addSuffix: true,
        includeSeconds: true,
      });

      setTimeAgo(newTimeAgo);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [uploadTime]);

  const formateNumber = (num) => {
    if (num < 1000) {
      return num;
    } else if (num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num < 1000000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else {
      return (num / 1000000000).toFixed(1) + "B";
    }
  };

  return isLoading === true ? (
    <VideoCardShimmer />
  ) : (
    <div className="max-w-md mx-auto  bg-black text-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div>
        <img
          className="w-full h-full object-fill rounded-lg"
          src={videoThumbnailURL}
          alt="video thumbnail"
        />
        <span className="absolute">{}</span>
      </div>

      <div className="flex items-start gap-1 p-2">
        <div>
          <img
            className="rounded-full max-w-[30px] mt-2"
            src={apiData?.items[0]?.snippet?.thumbnails?.default?.url}
            alt="channel user profile img"
          />
        </div>
        <div>
          <p className="text-sm lg:text-lg">{videoTitle.substring(0, 60)}</p>
          <p className="text-sm text-gray-400">{channelName}</p>
          <p className="text-sm text-gray-400">
            {formateNumber(videoViews) + " views . " + timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
