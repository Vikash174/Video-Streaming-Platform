// components/VideoInfo.js
import React from "react";

const VideoInfo = ({ title, views, description }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-500">{views} views</p>
      <p>{description}</p>
    </div>
  );
};

export default VideoInfo;
