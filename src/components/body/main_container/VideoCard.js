import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../../../utils/constant";
import { json } from "react-router-dom";

const VideoCard = (props) => {
  const { video } = props;
  const videoThumbnailURL = video.snippet.thumbnails.standard.url;
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
    console.log(jsonRes);
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
    <div className="w-96 p-5 hover:cursor-pointer">
      <div>
        <img
          className="w-96 h-52 rounded-lg bg-contain object-cover"
          src={videoThumbnailURL}
          alt="video thumbnail"
        />
      </div>

      <div className="flex items-start gap-1 p-2 ">
        <div>
          <img
            className="rounded-full max-w-[30px]  mt-2 "
            src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
            alt="channel user profile img"
          />
        </div>
        <div>
          <p className="text-lg">{videoTitle}</p>
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
