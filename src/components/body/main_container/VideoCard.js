import React from "react";
import useFetchChannelData from "../../../custom_hooks/useFetchChannelData";
import VideoCardShimmer from "./VideoCardShimmer";
import {
  converNumberIntoWords,
  converUploadTimeIntoTimeAgo,
} from "../../../utils/utilitiesFunctions";

const VideoCard = (props) => {
  const { video } = props;
  const videoThumbnailURL =
    video?.snippet?.thumbnails?.maxres?.url === undefined
      ? video?.snippet?.thumbnails?.standard?.url
      : video?.snippet?.thumbnails?.maxres?.url;
  console.log(
    video.snippet.title.length,
    video.snippet.title.length > 60
      ? `${video.snippet.title.substring(0, 60)}......`
      : video.snippet.title
  );
  const videoTitle =
    video.snippet.title.length > 60
      ? `${video.snippet.title.substring(0, 60)}......`
      : video.snippet.title;

  const channelName = video.snippet.channelTitle;
  const videoViews = converNumberIntoWords(video.statistics.viewCount);
  const uploadTime = converUploadTimeIntoTimeAgo(video.snippet.publishedAt);

  const { isLoading, apiData } = useFetchChannelData(video.snippet.channelId);

  return isLoading === true ? (
    <VideoCardShimmer />
  ) : (
    <div className="max-w-md mx-auto  bg-black text-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div>
        <img
          className="w-full h-full object-cover max-h-[189px] rounded-lg"
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
          <p className="text-sm lg:text-lg">{videoTitle}</p>
          <p className="text-sm text-gray-400">{channelName}</p>
          <p className="text-sm text-gray-400">
            {videoViews + " views . " + uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
