import { useEffect } from "react";
import { POPULAR_VIDEOS_URL, YOUTUBE_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../redux/slices/videoSlice";
import { setShowSidebar } from "../redux/slices/appControlsSlice";

const useAAddPopularMoviesToStore = () => {
  const dispatch = useDispatch();

  const addPopularMoviesToReduxStore = async () => {
    const url = POPULAR_VIDEOS_URL + YOUTUBE_API_KEY;

    try {
      const response = await fetch(url);
      const jsonRes = await response.json();

      dispatch(addPopularVideos(jsonRes.items));
    } catch (error) {
      console.error("error while fetching the videos" + error);
    }
  };

  useEffect(() => {
    addPopularMoviesToReduxStore();
    dispatch(setShowSidebar(true));
  }, []);
};

export default useAAddPopularMoviesToStore;
