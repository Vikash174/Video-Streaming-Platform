import { useEffect, useState } from "react";
import {
  CHANNEL_DATA_URL,
  VIDEO_URL,
  YOUTUBE_API_KEY,
} from "../utils/constant";

const useFetchVideoInformation = (videoId) => {
  const [
    isLoadingVideoInformationApiData,
    setIsLoadingVideoInformationApiData,
  ] = useState(false);
  const [videoInformationApiData, setVideoInformationApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoadingVideoInformationApiData(true);

    const fetchData = async () => {
      try {
        const url = `${VIDEO_URL}${videoId}&key=${YOUTUBE_API_KEY}`;

        const response = await fetch(url);
        const jsonRes = await response.json();
        setVideoInformationApiData(jsonRes);
        setIsLoadingVideoInformationApiData(false);
      } catch (error) {
        setServerError(error);
        setIsLoadingVideoInformationApiData(false);
      }
    };

    fetchData();
  }, [videoId]);

  return {
    isLoadingVideoInformationApiData,
    videoInformationApiData,
    serverError,
  };
};

export default useFetchVideoInformation;
