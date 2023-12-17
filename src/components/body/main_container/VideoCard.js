import React from "react";

const VideoCard = (props) => {
  const { video } = props;
  const videoThumbnailURL = video.snippet.thumbnails.standard.url;
  const videoTitle = video.snippet.title;
  const channelName = video.snippet.channelTitle;
  const videoViews = video.statistics.viewCount;
  const uploadTime = video.snippet.publishedAt;

  return (
    <div className="w-96 p-5 ">
      <div>
        <img
          className="w-96 h-52 rounded-md bg-contain object-cover"
          src={videoThumbnailURL}
          alt="video thumbnail"
        />
      </div>

      <div>
        <div>
          <img src="" alt="channel user profile img" />
        </div>
        <div>
          <span>{videoTitle}</span>
          <span>{channelName}</span>
          <span>{videoViews + "." + uploadTime}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
