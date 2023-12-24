import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";

const SearchedVideoCard = (props) => {
  const { videoData } = props;

  const videoThumbnailURL = videoData?.snippet?.thumbnails?.medium?.url;
  const videoTitle = videoData.snippet.title;
  const channelName = videoData.snippet.channelTitle;
  const uploadTime = videoData.snippet.publishedAt;
  const videoDescription = videoData.snippet.description;

  const [timeAgo, setTimeAgo] = useState("");

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

  return (
    <div className="flex flex-row justify-between items- p-2 items-start">
      <div>
        <img
          className="max-w-max object-cover rounded-lg"
          src={videoThumbnailURL}
          alt="video thumbnail"
        />
      </div>
      <div className="px-2">
        <p>{videoTitle}</p>
        <p className="text-sm text-gray-400">{timeAgo}</p>
        <p className="text-sm text-gray-400">{channelName}</p>
        <p className="text-sm text-gray-400">{videoDescription}</p>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
