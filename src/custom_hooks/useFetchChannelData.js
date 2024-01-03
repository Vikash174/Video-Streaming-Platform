import { useEffect, useState } from "react";
import { CHANNEL_DATA_URL, YOUTUBE_API_KEY } from "../utils/constant";

const useFetchChannelData = (channelId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const url = `${CHANNEL_DATA_URL}${channelId}&key=${YOUTUBE_API_KEY}`;

        const response = await fetch(url);
        const jsonRes = await response.json();
        setApiData(jsonRes);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [channelId]);

  return { isLoading, apiData, serverError };
};

export default useFetchChannelData;
