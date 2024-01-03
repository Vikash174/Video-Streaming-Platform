// components/VideoInfo.js
import React from "react";
import { clip, dislike, download, like, save, share } from "../../assests";

const VideoInfo = (props) => {
  const { videoInfo } = props;
  const title = videoInfo?.items[0]?.snippet?.title;
  const views = videoInfo?.items[0]?.statistics?.viewCount;
  const description = videoInfo?.items[0]?.snippet?.description;

  return (
    <div className="p-4 bg-black w-full flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div>
            <img
              className="rounded-full"
              src="https://yt3.ggpht.com/U5OaCsAVC5t9u8jO8WvqHdhJPW9PvgYugDBXGF3PToz7TVWyZezepxs9WDdrR1QFwY9PC5Wm7mg=s48-c-k-c0x00ffffff-no-nd-rj"
              alt="channel logo"
            />
          </div>
          <div className="flex flex-col">
            <span>only Hit-songs</span>
            <span>27.7K subscribers</span>
          </div>
          <div>
            <button className="rounded-l-full rounded-r-full p-2 bg-white text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex">
            <div className="flex bg-gray-700 p-2 rounded-l-full">
              <img src={like} alt="" />
              <button className="ml-1">1.2M</button>
            </div>
            <div className="flex bg-gray-700  p-2 rounded-r-full">
              <img src={dislike} alt="" />
            </div>
          </div>
          <div>
            <div className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full">
              <img src={share} alt="" />
              <button className="ml-1">Share</button>
            </div>
          </div>
          <div>
            <div className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full">
              <img src={download} alt="" />
              <button className="ml-1">Download</button>
            </div>
          </div>
          <div>
            <div className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full">
              <img src={clip} alt="" />
              <button className="ml-1">Clip</button>
            </div>
          </div>
          <div>
            <div className="flex bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full">
              <img src={save} alt="" />
              <button className="ml-2">Save</button>
            </div>
          </div>
          <div>
            <button className="bg-gray-700 m-1 p-2 rounded-l-full rounded-r-full">
              ---
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
