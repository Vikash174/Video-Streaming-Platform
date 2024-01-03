import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setShowSidebar } from "../../redux/slices/appControlsSlice";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";

import useFetchVideoComments from "../../custom_hooks/useFetchVideoComments";
import useFetchChannelData from "../../custom_hooks/useFetchChannelData";
import useFetchVideoInformation from "../../custom_hooks/useFetchVideoInformation";
import CommentSection from "./CommentsSection";

const VideoPlayingPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const { isLoadingVideoComments, videoComments } =
    useFetchVideoComments(videoId);
  const { isLoadingVideoInformationApiData, videoInformationApiData } =
    useFetchVideoInformation(videoId);

  console.log(videoComments);
  console.log(videoInformationApiData);
  // const { isLoading, apiData, serverError } = useFetchChannelData();

  return (
    <div className="lg:flex w-screen h-[100vh] text-white bg-black flex flex-col scrollbar-hide">
      <div className="lg:w-3/4">
        <VideoPlayer />
      </div>
      <div>
        {!isLoadingVideoInformationApiData && (
          <VideoInfo videoInfo={videoInformationApiData} />
        )}
      </div>
      <div>
        {!isLoadingVideoComments && <CommentSection comments={videoComments} />}
      </div>
    </div>
  );
};

export default VideoPlayingPage;
