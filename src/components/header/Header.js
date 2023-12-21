import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../../assests/images/youtube_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setShowSidebar } from "../../redux/slices/appControlsSlice";
import { Link } from "react-router-dom";
import { SEARCH_SUGGESTIONS_API } from "../../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryResult, setSearchQueryResult] = useState(null);
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.appControls.showSidebar);

  useEffect(() => {
    // API Call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const jsongData = await data.json();

    setSearchQueryResult(jsongData[1]);
  };

  const sidebarClickHandler = () => {
    dispatch(setShowSidebar(!showSidebar));
  };

  return (
    <>
      <div className="flex bg-black text-white justify-between items-center fixed w-full">
        <div className="flex items-center">
          <div className="m-2 pl-4 hidden md:block">
            <button onClick={sidebarClickHandler}>
              <FontAwesomeIcon icon={icon({ name: "bars" })} />
            </button>
          </div>

          <div>
            <img
              className="w-40 object-cover bg-center"
              src={logo}
              alt="youtube logo"
            />
          </div>
        </div>
        <div className="flex">
          <input
            className="p-2 rounded-l-full bg-black border border-[#ffffff33] hidden md:block md:w-96"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-[#ffffff33] px-2 py-1 md:py-2 md:px-4  md:rounded-r-full border border-[#ffffff33]">
            <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />
          </button>
          <button className="bg-[#ffffff33] py-2 px-3 mx-2  rounded-[50%]">
            <FontAwesomeIcon icon={icon({ name: "microphone" })} />
          </button>
        </div>
        <div className="hidden md:block">
          <button className="mx-5">
            <FontAwesomeIcon icon={icon({ name: "video" })} />
          </button>
          <button className="mx-5">
            <FontAwesomeIcon icon={icon({ name: "bell" })} />
          </button>

          <button className="mx-5">
            <FontAwesomeIcon icon={icon({ name: "user" })} />
          </button>
        </div>
      </div>

      {searchQueryResult && (
        <div className="bg-black fixed  md:w-96 z-10 top-20 left-[600px] text-white">
          {searchQueryResult.map((searchQuery) => {
            return (
              <div className="p-1 m-1 cursor-default hover:bg-gray-500">
                <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />
                <span className="ml-2">{searchQuery}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;
