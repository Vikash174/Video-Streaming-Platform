import { useEffect } from "react";
import { POPULAR_VIDEOS_URL, YOUTUBE_API_KEY } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPageToken, addPopularVideos } from "../redux/slices/videoSlice";
import { setShowSidebar } from "../redux/slices/appControlsSlice";

const useAAddPopularMoviesToStore = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((state) => state.video.popularVideos);
  const pageToken = useSelector((state) => state.video.pageToken);
  const pageCount = useSelector((state) => state.video.pageCount);

  console.log(pageToken);

  const addPopularMoviesToReduxStore = async () => {
    const url = `${POPULAR_VIDEOS_URL}${YOUTUBE_API_KEY}${
      pageToken === null || pageToken === undefined
        ? ""
        : `&pageToken=${pageToken}`
    } `;

    console.log(url);
    try {
      const response = await fetch(url);
      const jsonRes = await response.json();
      dispatch(addPopularVideos(jsonRes.items));

      dispatch(addPageToken(jsonRes.nextPageToken));
    } catch (error) {
      console.error("error while fetching the videos" + error);
    }
  };

  useEffect(() => {
    addPopularMoviesToReduxStore();
    dispatch(setShowSidebar(true));
  }, [pageCount]);
};

export default useAAddPopularMoviesToStore;
