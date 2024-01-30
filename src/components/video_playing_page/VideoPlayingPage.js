import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";
import useFetchVideoInformation from "../../custom_hooks/useFetchVideoInformation";
import { useSelector } from "react-redux";
import VideoCardContainer from "../body/main_container/VideoCardContainer";

const VideoPlayingPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const { isLoadingVideoInformationApiData, videoInformationApiData } =
    useFetchVideoInformation(videoId);

  return (
    <div className=" h-[100vh] w-screen  text-white bg-black scrollbar-hide flex">
      <div className="">
        <div className="">
          <VideoPlayer />
        </div>
        <div>
          {!isLoadingVideoInformationApiData && (
            <VideoInfo videoInfo={videoInformationApiData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayingPage;
