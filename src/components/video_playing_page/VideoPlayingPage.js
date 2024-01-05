import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";
import useFetchVideoInformation from "../../custom_hooks/useFetchVideoInformation";

const VideoPlayingPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const { isLoadingVideoInformationApiData, videoInformationApiData } =
    useFetchVideoInformation(videoId);

  return (
    <div className="lg:flex w-screen h-[100vh]  text-white bg-black flex flex-col scrollbar-hide">
      <div className="lg:w-3/4">
        <VideoPlayer />
      </div>
      <div>
        {!isLoadingVideoInformationApiData && (
          <VideoInfo videoInfo={videoInformationApiData} />
        )}
      </div>
    </div>
  );
};

export default VideoPlayingPage;
