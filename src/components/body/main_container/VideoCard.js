import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../../../utils/constant";

const VideoCard = (props) => {
  const { video } = props;
  const videoThumbnailURL =
    video?.snippet?.thumbnails?.maxres?.url === undefined
      ? video?.snippet?.thumbnails?.standard?.url
      : video?.snippet?.thumbnails?.maxres?.url;
  const videoTitle = video.snippet.title;
  const channelName = video.snippet.channelTitle;
  const videoViews = video.statistics.viewCount;
  const uploadTime = video.snippet.publishedAt;

  const [timeAgo, setTimeAgo] = useState("");
  const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    fetchChannelData();

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

  const fetchChannelData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${YOUTUBE_API_KEY}`;

    const response = await fetch(url);
    const jsonRes = await response.json();

    setChannelData(jsonRes);
  };

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

  return (
    <div className="w-full sm:w-52 md:w-60 lg:w-80 xl:w-[340px] 2xl:w-96 p-2 hover:cursor-pointer">
      {/* Adjust the width based on screen size: full width on small screens, half on medium, one-third on large, and one-fourth on extra-large */}
      <div>
        <img
          className="w-full h-auto max-h-[190px] rounded-lg bg-contain object-cover"
          src={videoThumbnailURL}
          alt="video thumbnail"
        />
      </div>

      <div className="flex items-start gap-1 p-2">
        <div>
          <img
            className="rounded-full max-w-[30px] mt-2"
            src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
            alt="channel user profile img"
          />
        </div>
        <div>
          <p className="text-sm lg:text-lg">
            {videoTitle.substring(0, 60) + "......."}
          </p>
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
