// components/VideoInfo.js
import React, { useEffect } from "react";
import { clip, dislike, download, like, save, share } from "../../assests";
import useFetchChannelData from "../../custom_hooks/useFetchChannelData";
import {
  converNumberIntoWords,
  converUploadTimeIntoTimeAgo,
} from "../../utils/utilitiesFunctions";
import { formatDistanceToNow } from "date-fns";

const VideoInfo = (props) => {
  const { videoInfo } = props;
  const title = videoInfo?.items[0]?.snippet?.title;
  const views = converNumberIntoWords(
    videoInfo?.items[0]?.statistics?.viewCount
  );
  const description = videoInfo?.items[0]?.snippet?.description;
  const uploadTime = converUploadTimeIntoTimeAgo(
    videoInfo?.items[0]?.snippet?.publishedAt
  );
  const videoLikeCount = converNumberIntoWords(
    videoInfo?.items[0]?.statistics?.likeCount
  );
  const channelId = videoInfo?.items[0]?.snippet?.channelId;

  const { isLoading, apiData } = useFetchChannelData(channelId);

  const channelName = isLoading ? "" : apiData?.items[0]?.snippet?.title;
  const subscribersCount = isLoading
    ? ""
    : converNumberIntoWords(apiData?.items[0]?.statistics?.subscriberCount);
  const channelLogo = isLoading
    ? ""
    : apiData?.items[0]?.snippet?.thumbnails?.default?.url;

  const handleMouseOver = (text) => (e) => {
    // Create and position the tooltip
    const tooltip = document.createElement("div");

    tooltip.innerText = text;
    tooltip.className +=
      "fixed z-50 bg-[#333] text-white rounded-[0.25rem] pointer-events-none";

    document.body.appendChild(tooltip);
    // console.log(tooltip);

    // Calculate the position of the tooltip relative to the mouse cursor
    const x = e.clientX + 10;
    const y = e.clientY + 10;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;

    // Remove the tooltip when the mouse leaves the element
    const handleMouseOut = () => {
      // console.log(tooltip);
      document.body.removeChild(tooltip);
      e.target.removeEventListener("mouseout", handleMouseOut);
    };

    e.target.addEventListener("mouseout", handleMouseOut);
  };

  const handleShowMore = () => {
    const descriptPara = document.getElementById("description");
    descriptPara.classList = null;
  };

  return (
    <div className="p-4 bg-black w-full flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col items-start lg:items-center justify-between lg:flex-row gap-2 w-screen">
        <div className="flex gap-2 items-center justify-between w-[90%]  lg:justify-start lg:w-fit">
          <div className="flex items-center gap-2">
            <div>
              <img
                className="rounded-full w-10"
                src={channelLogo}
                alt="channel logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{channelName}</span>
              <span className="text-gray-300">
                {subscribersCount} subscribers
              </span>
            </div>
          </div>
          <div>
            <button className="rounded-l-full rounded-r-full p-2 bg-white text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center w-[100%]  overflow-scroll scrollbar-hide">
          <div className="flex">
            <div
              className="flex bg-gray-700 p-2 rounded-l-full hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("like")}
            >
              <img src={like} alt="" />
              <button className="ml-1">{videoLikeCount}</button>
            </div>
            <div
              className="flex bg-gray-700  p-2 rounded-r-full border-l hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("dislike")}
            >
              <img src={dislike} alt="" />
            </div>
          </div>
          <div>
            <div
              className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("Share")}
            >
              <img src={share} alt="" />
              <button className="ml-1">Share</button>
            </div>
          </div>
          <div>
            <div
              className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("Download")}
            >
              <img src={download} alt="" />
              <button className="ml-1">Download</button>
            </div>
          </div>
          <div>
            <div
              className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("Clip")}
            >
              <img src={clip} alt="" />
              <button className="ml-1">Clip</button>
            </div>
          </div>
          <div>
            <div
              className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("Save")}
            >
              <img src={save} alt="" />
              <button className="ml-2">Save</button>
            </div>
          </div>
          <div>
            <button
              className="bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full hover:cursor-pointer min-w-max"
              onMouseOver={handleMouseOver("More")}
            >
              ---
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-5 rounded-lg">
        <p>
          <span>{views} views</span>
          <span className="ml-2">{uploadTime}</span>
        </p>
        <p className="max-h-16  overflow-hidden" id="description">
          {description}
        </p>
        <button onClick={handleShowMore}>...show more</button>
      </div>
    </div>
  );
};

export default VideoInfo;
