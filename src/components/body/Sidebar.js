import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.appControls.showSidebar);

  if (!showSidebar) {
    return null;
  }

  return (
    <div className="bg-black text-white p-2 text-sm fixed top-20 w-60 h-[95vh] text-[1rem] overflow-x-scroll scrollbar-hide hidden lg:block">
      <div className="border-b border-gray-400 p-5">
        <ul className="">
          <Link to={"/"}>
            <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
              <span>Home</span>
            </li>
          </Link>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Shorts</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Subscription</span>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400 p-5">
        <ul>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>You</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>History</span>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400 p-5">
        <span>Sign in to like videos, comment, and subscribe</span>
        <button className="text-blue-500 border border-gray-500 p-1 rounded-l-full rounded-r-full m-1 ">
          Sign in
        </button>
      </div>
      <div className="border-b border-gray-400 p-5">
        <span className="font-semibold">Explore</span>
        <ul>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Trending</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Shopping</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Music</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Movies</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Live</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Gaming</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>News</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Sports</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Learning</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Fashion & Beauty</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Podcasts</span>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400 p-5">
        <span className="font-semibold ">More from YouTube</span>
        <ul>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>YouTube Studio</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>YouTube Music</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>YouTube Kids</span>
          </li>
        </ul>
      </div>
      <div className="border-b border-gray-400 p-5">
        <ul>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Settings</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Report history</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Help</span>
          </li>
          <li className="p-2 m-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
            <span>Send feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
