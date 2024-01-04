import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_QUERY_URL, YOUTUBE_API_KEY } from "../../../utils/constant";
import SearchedVideoCard from "./SearchedVideoCard";

const SearchResultContainer = () => {
  const [searchParam] = useSearchParams();
  const [searchQueryData, setSearchQueryData] = useState(null);

  useEffect(() => {
    fetchSearchQueryResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam.get("search_query")]);

  const fetchSearchQueryResults = async () => {
    const url =
      SEARCH_QUERY_URL +
      searchParam.get("search_query") +
      "&key=" +
      YOUTUBE_API_KEY;
    const res = await fetch(url);

    const jsonRes = await res.json();

    setSearchQueryData(jsonRes.items);
  };

  return (
    <div className="text-white h-full flex flex-col p-2 m-2 ml-96 mt-20">
      {searchQueryData &&
        searchQueryData.map((searchData) => {
          if (searchData?.id?.kind === "youtube#video") {
            return (
              <Link
                key={searchData.id.videoId}
                to={`/watch?v=${searchData.id.videoId}`}
                className=""
              >
                <SearchedVideoCard videoData={searchData} />
              </Link>
            );
          }
        })}
    </div>
  );
};

export default SearchResultContainer;
