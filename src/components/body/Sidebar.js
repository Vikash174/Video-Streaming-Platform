import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.appControls.showSidebar);

  if (!showSidebar) {
    return null;
  }

  return (
    <div className="bg-black text-white p-2 text-sm">
      <div className="w-52">
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Shorts</span>
          </li>
          <li>
            <span>Subscription</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>You</span>
          </li>
          <li>
            <span>History</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Sign in to like videos, comment, and subscribe</span>
        <button>Sign in</button>
      </div>
      <div>
        <span>Explore</span>
        <ul>
          <li>
            <span>Trending</span>
          </li>
          <li>
            <span>Shopping</span>
          </li>
          <li>
            <span>Music</span>
          </li>
          <li>
            <span>Movies</span>
          </li>
          <li>
            <span>Live</span>
          </li>
          <li>
            <span>Gaming</span>
          </li>
          <li>
            <span>News</span>
          </li>
          <li>
            <span>Sports</span>
          </li>
          <li>
            <span>Learning</span>
          </li>
          <li>
            <span>Fashion & Beauty</span>
          </li>
          <li>
            <span>Podcasts</span>
          </li>
        </ul>
      </div>
      <div>
        <span>More from YouTube</span>
        <ul>
          <li>
            <span>YouTube Studio</span>
          </li>
          <li>
            <span>YouTube Music</span>
          </li>
          <li>
            <span>YouTube Kids</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Report history</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <span>Send feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
