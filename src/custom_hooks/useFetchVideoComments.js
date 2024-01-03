import { useEffect, useState } from "react";
import { COMMENTS_URL, YOUTUBE_API_KEY } from "../utils/constant";

const useFetchVideoComments = (videoId) => {
  const [isLoadingVideoComments, setIsLoadingVideoComments] = useState(false);
  const [videoComments, setVideoComments] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoadingVideoComments(true);

    const fetchData = async () => {
      try {
        const url = `${COMMENTS_URL}${videoId}&key=${YOUTUBE_API_KEY}`;

        const response = await fetch(url);
        const jsonRes = await response.json();
        setVideoComments(jsonRes);
        setIsLoadingVideoComments(false);
      } catch (error) {
        setServerError(error);
        setIsLoadingVideoComments(false);
      }
    };

    fetchData();
  }, [videoId]);

  return { isLoadingVideoComments, videoComments, serverError };
};

export default useFetchVideoComments;
