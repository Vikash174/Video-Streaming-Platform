import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_QUERY_URL, YOUTUBE_API_KEY } from "../../../utils/constant";

const SearchResultContainer = () => {
  const [searchParam] = useSearchParams();
  const [searchQueryData, setSearchQueryData] = useState(null);

  useEffect(() => {
    fetchSearchQueryResults();
  }, []);

  const fetchSearchQueryResults = async () => {
    const url =
      SEARCH_QUERY_URL +
      searchParam.get("search_query") +
      "&key=" +
      YOUTUBE_API_KEY;
    const res = await fetch(url);

    const jsonRes = await res.json();

    setSearchQueryData(jsonRes.items);
    console.log(jsonRes.items);
  };

  return <div>SearchResultContainer</div>;
};

export default SearchResultContainer;
